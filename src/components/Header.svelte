<script lang="ts">
	const isBrowser = typeof localStorage !== 'undefined';
	const isDarkTheme =
		isBrowser &&
		(localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));

	let theme = isDarkTheme ? 'dark' : 'light';

	const themeChanged = (theme) => {
		if (!isBrowser) return;
		if (theme === 'dark') {
			localStorage.theme = 'dark';
			document.documentElement.classList.add('dark');
		} else {
			localStorage.theme = 'light';
			document.documentElement.classList.remove('dark');
		}
	};

	$: themeChanged(theme);

	const handleSwitchTheme = () => {
		theme = theme === 'dark' ? 'light' : 'dark';
	};

	let height = 0;
</script>

<header
	class="text-steel-800 bg-gray-50 dark:bg-gray-800 dark:text-gray-200 px-4 flex justify-between fixed w-full shadow-sm transition-colors z-10"
	bind:clientHeight={height}
>
	<nav class="p-4 space-x-4 text-steel-700 dark:text-gray-400">
		<a href="/">Home</a><a href="/contact">Contact</a>
	</nav>
	<button on:click={handleSwitchTheme} class="focus:outline-none text-steel-700 dark:text-gray-400"
		>{#if theme === 'dark'}
			Dark 🌚
		{:else}
			Light 🌝
		{/if}
	</button>
</header>

{#if height}
	<div style={`height: ${height}px;`} />
{/if}
