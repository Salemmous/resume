<script lang="ts">
	import { page } from '$app/stores';
	import Level from '../../components/Level.svelte';
	import { PROJECTS } from '../../data/projects';
	import { TECHNOLOGY_MAP } from '../../data/technologies';

	const uid = $page.params.slug;

	const technology = TECHNOLOGY_MAP[uid];
	const projects = PROJECTS.filter((project) => project.technologies?.includes(uid));
</script>

{#if technology}
	<article class="p-8">
		<h1 class="text-3xl">{technology.name}</h1>
		<div>
			<Level level={technology.level} />
		</div>
		{#if technology.description}
			<p class="mt-4">{technology.description}</p>
		{/if}
	</article>
	{#if projects}
		<section class="p-8">
			<h2 class="text-2xl">Projects</h2>
			<ul class="mt-4">
				{#each projects as project}
					<li>
						<a href={`/projects/${project.uid}`}>
							<span>
								{project.name}
							</span>
							{#if project.description}
								<small> - {project.description}</small>
							{/if}
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
{/if}
