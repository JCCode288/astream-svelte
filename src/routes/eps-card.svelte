<script lang="ts">
	import type { IAnimeResult } from "@consumet/extensions";
	import { Card, GradientButton } from "flowbite-svelte";

	export let anime: IAnimeResult;

	$: animeTitle = `${anime.title.toString()} - ${anime.episodeNumber}`;
	$: watchUrl = `stream/${btoa(anime.id + "-episode-" + anime.episodeNumber)}`;
	$: detailUrl = "/detail/" + anime.id;
</script>

<Card padding="none" size="sm" class="justify-between rounded-md bg-secondary-200">
	<div class="flex w-full flex-col gap-4">
		<a href={detailUrl} class="flex flex-col justify-center gap-3 px-5 align-middle">
			<img
				class="items-center justify-self-center rounded-lg"
				src={anime.cover ?? anime.image}
				alt={animeTitle}
			/>
		</a>
		<h4
			class="mb-1 whitespace-pre-wrap text-center text-xl font-semibold tracking-tight text-gray-900 dark:text-secondary-300"
		>
			{`${anime.title.toString()} - ${anime.episodeNumber}`}
		</h4>
	</div>

	<div class="mx-auto my-8 w-[80%]">
		<GradientButton
			class="mt-1 flex items-center justify-center text-lg duration-500 ease-in-out"
			outline
			color="pinkToOrange"
			href={watchUrl}>Watch Now</GradientButton
		>
	</div>
</Card>
