// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'El Aroui Stories',
			social: {
				github: 'https://github.com/h-chayma/abdelaziz-elaroui-stories-api',
			},
			customCss: [
				'./src/styles/style.css',
			],
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'introduction' },
						{ label: 'Quick Start', slug: 'quick-start' },
					],
				},
				{
					label: 'API References',
					items: [
						{ label: 'Get All Stories', slug: 'get-all-stories' },
						{ label: 'Get Story by ID', slug: 'get-story-by-id' },
					],
				},
				{
					label: 'Examples',
					items: [
						{ label: 'How to Use the API in Angular', slug: 'how-to-use-api-angular' },
						{ label: 'Project Showcase', slug: 'project-showcase' },
					],
				},
			]

		}),
	],
});
