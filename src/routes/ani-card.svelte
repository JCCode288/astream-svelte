<script lang="ts">
	import type { IAnimeResult } from "@consumet/extensions";
	import { Card, GradientButton, Img } from "flowbite-svelte";

	export let anime: IAnimeResult;

	$: detailUrl = `detail/${anime.id}`;
	$: animeTitle = anime.title.toString();
</script>

<Card padding="none" size="sm" class="justify-between rounded-md bg-secondary-100">
	<div class="flex flex-col justify-center gap-3 px-5 align-middle">
		<img
			class="items-center justify-self-center rounded-lg"
			src={anime.cover ?? anime.image}
			alt={animeTitle}
		/>
		<h4
			class="whitespace-pre-wrap pb-1 text-center text-xl font-semibold tracking-tight text-gray-900 dark:text-secondary-300"
		>
			{animeTitle}
		</h4>
	</div>
	<div class="mx-auto my-8 w-[80%]">
		<GradientButton
			class="mt-1 flex items-center justify-center text-lg duration-500 ease-in-out"
			outline
			color="pinkToOrange"
			href={detailUrl}>Detail</GradientButton
		>
	</div>
</Card>
