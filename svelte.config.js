import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
    alias: {
      '$components': 'src/lib/components/',
      '$components/*': 'src/lib/components/*',
      '$styles': 'src/lib/styles/',
      '$styles/*': 'src/lib/styles/',
      '$stores': 'src/lib/stores/',
      '$stores/*': 'src/lib/stores/',
      '$utils': 'src/lib/utils/',
      '$utils/*': 'src/lib/utils/',
      '$theme-scheme': 'src/lib/utils/theme_scheme/',
    },
		adapter: adapter()
	}
};

export default config;
