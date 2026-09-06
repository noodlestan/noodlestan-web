import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

type ProjectRecord = {
	id: string;
	record: string;
	content: string;
	resource: {
		name: string;
		purpose: string;
		description: string;
		website: string | null;
		code: string | null;
		repository: string;
		owner: string;
		resources: string[];
		private: boolean;
	};
};

const RECORDS_DIR = join(import.meta.dirname, '../data/_records/projects');
const DATA_DIR = join(import.meta.dirname, '../data/projects');

function kebab(name: string): string {
	return name
		.replace(/([a-z])([A-Z])/g, '$1-$2')
		.toLowerCase()
		.replace(/\s+/g, '-');
}

function extractField(content: string, field: string): string | null {
	const escapedField = field.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const patterns = [
		new RegExp(`\\*\\*${escapedField}:\\*\\*\\s*\`([^\`]+)\``, 'm'),
		new RegExp(`\\*\\*${escapedField}:\\*\\*\\s*(.+)`, 'm'),
	];

	for (const pattern of patterns) {
		const match = content.match(pattern);
		if (match) return match[1].trim();
	}
	return null;
}

function extractBoolean(content: string, field: string): boolean {
	const value = extractField(content, field);
	return value?.toLowerCase() === 'true';
}

function extractResources(content: string, field: string): string[] {
	const escapedField = field.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	const pattern = new RegExp(`\\*\\*${escapedField}:\\*\\*([\\s\\S]*?)(?=\\n\\*\\*|\\n##|$)`, 'm');
	const match = content.match(pattern);
	if (!match) return [];

	const block = match[1];
	const items: string[] = [];
	const lines = block.split('\n');
	for (const line of lines) {
		const trimmed = line.trim();
		if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
			const item = trimmed.replace(/^[-•]\s*/, '').trim();
			if (item) items.push(item);
		}
	}
	return items;
}

async function loadProjectRecords(dir: string): Promise<ProjectRecord[]> {
	const { readdirSync } = await import('node:fs');
	const files = readdirSync(dir).filter(f => f.endsWith('.art'));

	return files.map(file => {
		const content = readFileSync(join(dir, file), 'utf-8');

		const nameMatch = content.match(/## Project:\s*(.+)/);
		if (!nameMatch) throw new Error(`No H1 in ${file}`);
		const name = nameMatch[1]?.trim();
		if (!name) {
			throw new Error(`Could not resolve name from file: ${file}`);
		}

		const id = kebab(name);
		const purpose = extractField(content, 'Purpose') || '';
		const description = extractField(content, 'Description') || '';
		const website = extractField(content, 'Website') || null;
		let code = extractField(content, 'Code') || null;
		const private_ = extractBoolean(content, 'Private');

		let repository = extractField(content, 'Repository') || '';
		if (repository && !repository.startsWith('Repository: ')) {
			repository = `Repository: ${repository}`;
		}

		if (!code) {
			const remote = extractField(content, 'Remote');
			if (remote) {
				code = `https://github.com/${remote}`;
			}
		}

		let owner = extractField(content, 'Owner') || '';
		if (owner && !owner.startsWith('Project: ')) {
			owner = `Project: ${owner}`;
		}

		const resources = extractResources(content, 'Resources');

		return {
			id,
			record: file,
			content,
			resource: {
				name,
				purpose,
				description,
				website,
				code,
				repository,
				owner,
				resources,
				private: private_,
			},
		};
	});
}

async function saveProjectJson(projects: ProjectRecord[]): Promise<void> {
	const items = projects
		.filter(p => !p.resource.private)
		.map(p => ({
			id: p.id,
			project: p.resource,
		}));

	mkdirSync(DATA_DIR, { recursive: true });
	const outPath = join(DATA_DIR, 'collection.json');
	writeFileSync(outPath, JSON.stringify(items, null, 2) + '\n');
	console.log(`Saved ${items.length} projects to collection.json`);
}

async function main() {
	const projects = await loadProjectRecords(RECORDS_DIR);
	console.log(`Loaded ${projects.length} project records`);
	await saveProjectJson(projects);
	console.log('Done');
}

main().catch(err => {
	console.error(err);
	process.exit(1);
});
