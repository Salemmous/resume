<script lang="ts">
	import type { IProject } from '../models/project';

	export let project: IProject;
</script>

<a
	class="p-4 shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-pointer rounded-2xl border border-black border-opacity-20"
	href={`/projects/${project.uid}`}
>
	<h3 class="text-2xl text-center">{project.name}</h3>
	<small>{project.dateRange}</small>
	<p>{project.description}</p>
</a>
