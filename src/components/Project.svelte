<script lang="ts">
	import type { IProject } from '../models/project';

	export let project: IProject;
</script>

<a
	class="p-4 shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer rounded-2xl border border-black border-opacity-20 bg-royalblue-50 dark:bg-gray-700 relative"
	href={`/projects/${project.uid}`}
>
	<h3 class="text-2xl text-center">{project.name}</h3>
	<small>{project.dateRange}</small>
	<p>{project.description}</p>
	<!-- <small class="absolute top-2 right-2 info opacity-20 transition-opacity">ℹ️</small> -->
</a>

<style>
	a:hover > .info {
		opacity: 1;
	}
</style>
