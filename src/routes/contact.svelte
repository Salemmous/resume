<script context="module">
	import { fade } from 'svelte/transition';
	export const prerender = true;
</script>

<svelte:head>
	<title>Contact</title>
</svelte:head>

<section in:fade out:fade={{ duration: 100 }} class="flex flex-col items-center mt-4">
	<h1 class="text-2xl">Contact me</h1>

	<table class="mt-4">
		<tr>
			<td class="pr-4">Email</td>
			<td>
				<a href="mailto:thomas.debluts@gmail.com" class="text-steel-600 dark:text-steel-200">
					thomas.debluts@gmail.com
				</a>
			</td>
		</tr>
		<tr>
			<td class="pr-4">Phone</td>
			<td>
				<a href="tel:+358449496579" class="text-steel-600 dark:text-steel-200"> +358 44 9496579 </a>
			</td>
		</tr>
		<tr>
			<td colspan="2" class="text-center pt-2 text-steel-600 dark:text-steel-200">
				<a href="https://www.linkedin.com/in/thomas-de-bluts-296a74131/">LinkedIn</a>
			</td>
		</tr>
	</table>
</section>
