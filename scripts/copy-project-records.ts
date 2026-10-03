import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

type RepositoryRecord = {
	record: string;
	content: string;
	resource: {
		id: string;
		name: string;
		remote: string;
	};
};

const WORKSPACE = resolve(import.meta.dirname, '../../..');
const RECORDS_DIR = join(WORKSPACE, '_records/repositories');
const DATA_DIR = join(import.meta.dirname, '../data/_records/projects');
const HOSTING_REPO = 'noodlestan-web';

function kebab(name: string): string {
	return name
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.toLowerCase()
		.replace(/\s+/g, '-');
}

async function loadRepositoryRecords(): Promise<RepositoryRecord[]> {
	const { readdirSync } = await import('node:fs');
	const files = readdirSync(RECORDS_DIR).filter(f => f.endsWith('.art'));

	return files.map(file => {
		const content = readFileSync(join(RECORDS_DIR, file), 'utf-8');
		const nameMatch = content.match(/## Repository:\s*(.+)/);
		if (!nameMatch) throw new Error(`No H1 in ${file}`);
		const name = nameMatch[1]?.trim();
		if (!name) {
			throw new Error(`Could not resolve ID from file: ${file}`);
		}
		const id = kebab(name);

		// Extract remote from content
		const remoteMatch = content.match(/\*\*Remote:\*\*\s*`([^`]+)`/);
		const remote = remoteMatch?.[1]
			? remoteMatch[1].replace('git@github.com:', '').replace('.git', '')
			: id;

		return {
			record: file,
			content,
			resource: { id, name, remote },
		};
	});
}

async function copyRepositoryProjectRecord(repo: RepositoryRecord): Promise<void> {
	const location = join(WORKSPACE, 'checkouts', repo.resource.id);
	const isHosting = repo.resource.id === HOSTING_REPO;

	// Clone if not exists
	if (!existsSync(location)) {
		console.info(`Cloning ${repo.resource.name}...`);
		execSync(`npm run art-work clone "${repo.resource.name}"`, {
			cwd: WORKSPACE,
			stdio: 'inherit',
		});
	}

	// Verify remote
	const gitConfig = readFileSync(join(location, '.git/config'), 'utf-8');
	const expectedRemote = `github.com:${repo.resource.remote}.git`;
	if (!gitConfig.includes(expectedRemote)) {
		throw new Error(`Remote mismatch in ${repo.resource.id}: expected ${expectedRemote}`);
	}

	if (isHosting) {
		// Hosting repo runs the script and may be on a feature branch during the plan;
		// skip branch check and pull, its project.art is already present locally.
		console.info(`Skipping branch check and pull for hosting repo: ${repo.resource.name}`);
	} else {
		// Verify branch
		const branch = execSync('git branch --show-current', {
			cwd: location,
			encoding: 'utf-8',
		}).trim();
		if (branch !== 'main') {
			throw new Error(`Branch mismatch in ${repo.resource.id}: expected main, got ${branch}`);
		}

		// Pull (skip if the checkout has uncommitted changes, e.g. leftover workspace state)
		const dirty = execSync('git status --porcelain', {
			cwd: location,
			encoding: 'utf-8',
		}).trim();
		if (dirty) {
			console.warn(`Skipping pull for ${repo.resource.id}: uncommitted changes present`);
		} else {
			execSync('git pull', { cwd: location, stdio: 'inherit' });
		}
	}

	// Copy project.art
	const projectRecord = join(location, '_records/project.art');
	if (!existsSync(projectRecord)) {
		console.warn(`No project.art in ${repo.resource.id}, skipping`);
		return;
	}

	mkdirSync(DATA_DIR, { recursive: true });
	const dest = join(DATA_DIR, `${repo.resource.id}.art`);
	const content = readFileSync(projectRecord, 'utf-8');
	// Enrich the copied record with the repository remote so downstream scripts
	// can derive URLs (e.g. GitHub) without hardcoding the org.
	const enriched = `${content.trimEnd()}\n\n**Remote:** \`${repo.resource.remote}\`\n`;
	writeFileSync(dest, enriched);
	console.info(`Copied project record: ${repo.resource.id}`);
}

async function main() {
	const repos = await loadRepositoryRecords();
	console.info(`Found ${repos.length} repository records`);

	for (const repo of repos) {
		await copyRepositoryProjectRecord(repo);
	}

	console.info('Done copying project records');
}

main().catch(err => {
	console.error(err);
	process.exit(1);
});
