import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		paths: {
			base: '/cclick'
		},
		appDir: 'internal',
		adapter: adapter({
			fallback: '200.html'
		}),
		prerender: { entries: [] },
		alias: {
			// an alias ending /* will only match
			// the contents of a directory, not the directory itself
			'src/*': 'src/*'
		}
	}
};

export default config;
