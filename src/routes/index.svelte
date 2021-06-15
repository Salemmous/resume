<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Project from '../components/Project.svelte';
	import { PROJECTS } from '../data/projects';
	import Language from '../components/Language.svelte';
	import Level from '../components/Level.svelte';
	import { LANGUAGES } from '../data/languages';
	import { fade } from 'svelte/transition';
	import { TECHNOLOGIES } from '../data/technologies';

	export const prerender = true;
</script>

<svelte:head>
	<title>Thomas De Bluts</title>
</svelte:head>

<section class="flex flex-col items-center mt-4">
	<h1 in:fade out:fade={{ duration: 100 }} class="text-4xl md:text-6xl mt-2 text-center px-8">
		<span class="inline-block">Thomas</span>
		<span class="inline-block">De Bluts</span>
	</h1>
	<img
		in:fade={{ delay: 100 }}
		out:fade={{ duration: 100, delay: 50 }}
		alt="Thomas De Bluts"
		src="/prof_profile_pic.png"
		class="object-cover rounded-full border-steel-700 mt-4 border-2 w-32 h-32 md:border-4 md:w-48 md:h-48 lg:w-64 lg:h-64 shadow-xl"
	/>

	<h2
		in:fade={{ delay: 200 }}
		out:fade={{ duration: 100, delay: 100 }}
		class="text-2xl md:text-4xl mt-4 text-center px-8"
	>
		<span class="inline-block">Software Developer</span>
		<span class="inline-block">and</span>
		<span class="inline-block">Cloud Architect</span>
	</h2>
	<hr class="transition-colors w-3/4 mt-4 dark:border-gray-900 opacity-50" />
	<p class="my-2 px-12 sm:px-16 md:px-24 lg:px-32 xl:px-48">
		Programming for over 11 years, I have learnt diverse aspects of the discipline. Ranging from
		gaming to machine learning, there is no topic I would not be interested to learn about. I am
		always eager to learn new things.
	</p>
	<hr class="transition-colors w-3/4 mb-4 dark:border-gray-900 opacity-50" />
</section>

<section
	class="flex flex-col items-center mt-4 px-4 mb-4"
	in:fade={{ delay: 300 }}
	out:fade={{ duration: 100, delay: 100 }}
>
	<h2 class="text-2xl md:text-4xl text-center px-8">
		<span class="inline-block">Projects and experience</span>
	</h2>
	<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8">
		{#each PROJECTS as project}
			<Project {project} />
		{/each}
	</div>
	<span class="mt-4">Most of my projects cannot be shown due to NDA.</span>
</section>
<hr class="transition-colors w-3/4 mb-4 dark:border-gray-900 opacity-50" />
<section
	class="flex flex-col items-center mt-4 px-4 mb-4"
	in:fade={{ delay: 300 }}
	out:fade={{ duration: 100, delay: 100 }}
>
	<h2 class="text-2xl md:text-4xl text-center px-8">
		<span class="inline-block">Languages</span>
	</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8">
		{#each LANGUAGES as language}
			<Language {language} />
		{/each}
	</div>
	<span class="mt-4">I also happen to love languages. I studied Computational Linguistics</span>
</section>
<hr class="transition-colors w-3/4 mb-4 dark:border-gray-900 opacity-50" />
<section
	class="flex flex-col items-center mt-4 px-4 mb-4"
	in:fade={{ delay: 300 }}
	out:fade={{ duration: 100, delay: 100 }}
>
	<h2 class="text-2xl md:text-4xl text-center px-8">
		<span class="inline-block">Technologies</span>
	</h2>
	<table class="mt-8">
		{#each TECHNOLOGIES as technology}
			<tr>
				<td class="pr-6 md:pr-12 py-2 flex">
					<a href={`/technologies/${technology.uid}`}>
						{technology.name}
					</a>{#if technology.certificate}
						<a href={technology.certificate.link}>
							<img src={technology.certificate.image} class="ml-2 h-6 w-6" alt="Certificate" />
						</a>
					{/if}
				</td>
				<td class="py-2">
					<Level level={technology.level} />
				</td>
			</tr>
		{/each}
	</table>
	<!-- <span class="mt-4">I also happen to love languages. I studied Computational Linguistics</span> -->
</section>
