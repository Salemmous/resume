<script lang="ts">
	import { page } from '$app/stores';
	import Level from '../../components/Level.svelte';
	import { PROJECT_MAP } from '../../data/projects';
	import { TECHNOLOGY_MAP } from '../../data/technologies';

	const uid = $page.params.slug;

	const project = PROJECT_MAP[uid];
	const technologies =
		project.technologies && project.technologies.map((uid) => TECHNOLOGY_MAP[uid]);
</script>

{#if project}
	<article class="p-8">
		<h1 class="text-3xl">
			{project.name}{#if project.link}
				<small class="ml-2 text-sm"> - <a href={project.link}>{project.link}</a></small>
			{/if}
		</h1>
		<small>{project.dateRange}</small>
		<p class="mt-4">{project.longDescription || project.description}</p>
	</article>
	{#if technologies}
		<section class="p-8">
			<h2 class="text-2xl">Technologies</h2>
			<table class="mt-4">
				{#each technologies as technology}
					<tr>
						<td class="pr-6 md:pr-12 py-2">
							<a
								class="text-steel-500 dark:text-steel-200"
								href={`/technologies/${technology.uid}`}
							>
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
		</section>
	{/if}
{/if}
