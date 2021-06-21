<script lang="ts">
	export let level: number;

	const emojis = ['🧐', '😀', '🤓', '😎', '🤩'];
	const text = ['Tried it', 'Familiar', 'Good', 'Very good', 'Excellent'];
</script>

<div class="flex flex-wrap flex-col sm:flex-row">
	<span class="hidden sm:block mr-2">Level: </span>
	<div class="space-x-2 sm:space-x-4 sm:mr-2">
		{#each emojis as emoji, i}
			<span class:opacity-100={i + 1 === level} class="opacity-50">
				{emoji}
			</span>
		{/each}
	</div>
	<span>
		{text[level - 1]}
	</span>
</div>
