<script lang="ts">
	import type { ILanguage } from '../models/language';

	export let language: ILanguage;
</script>

<div
	class="flex flex-col p-4 shadow-lg transition-shadow duration-500 rounded-2xl border border-black border-opacity-5"
>
	<h3 class="text-2xl text-center self-center">{language.name}</h3>
	<small class="mt-2">{language.description}</small>
</div>
