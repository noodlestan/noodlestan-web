import { file } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const projects = defineCollection({
	loader: file('../../data/projects/collection.json'),
	schema: z.object({
		id: z.string(),
		project: z.object({
			name: z.string(),
			purpose: z.string(),
			description: z.string(),
			website: z.string().nullable(),
			code: z.string().nullable(),
			repository: z.string(),
			owner: z.string(),
			resources: z.array(z.string()),
			private: z.boolean(),
		}),
	}),
});

export const collections = {
	projects,
};
