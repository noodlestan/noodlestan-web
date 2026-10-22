// @ts-check
import { defineConfig } from 'astro/config';
import { ENDPOINTS } from './src/constants';

// https://astro.build/config
export default defineConfig({ site: ENDPOINTS.noodlestan.site });
