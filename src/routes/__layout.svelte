<script lang="ts">
	import Header from '../components/Header.svelte';
	import '../app.postcss';

	const isBrowser = typeof document !== 'undefined';

	function initBrowser() {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}

	if (isBrowser) initBrowser();
</script>

<Header />

<main>
	<slot />
</main>
