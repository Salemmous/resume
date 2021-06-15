<script lang="ts">
	export let level: number;

	const emojis = ['🧐', '😀', '🤓', '😎', '🤩'];
	const text = ['Tried it', 'Familiar', 'Good', 'Very good', 'Excellent'];
</script>

<div class="space-x-4">
	<span>Level: </span>
	{#each emojis as emoji, i}
		<span class:opacity-100={i + 1 === level} class="opacity-50">
			{emoji}
		</span>
	{/each}
	<span class="p-2 border-lg rounded-md">
		{text[level - 1]}
	</span>
</div>
