<script lang="ts">
	import type { IAnimeResult } from "@consumet/extensions";
	import { Card, GradientButton } from "flowbite-svelte";

	export let anime: IAnimeResult;
</script>

<Card padding="none" size="sm" class="bg-secondary-200 rounded-md">
	<div class="flex flex-col w-full gap-4">
		<a href={"/detail/" + anime.id} class="px-5 flex flex-col gap-3 justify-center align-middle">
			<img
				class="rounded-lg justify-self-center items-center"
				src={anime.cover ?? anime.image}
				alt={`${anime.title.toString()} - ${anime.episodeNumber}`}
			/>
		</a>
		<h4
			class="text-xl font-semibold tracking-tight text-gray-900 dark:text-secondary-300 text-center whitespace-pre-wrap mb-1"
		>
			{`${anime.title.toString()} - ${anime.episodeNumber}`}
		</h4>
	</div>

	<div class="mx-auto w-[80%] my-8">
		<GradientButton
			class="flex justify-center items-center mt-1 ease-in-out duration-500 text-lg"
			outline
			color="pinkToOrange"
			href={`stream/${btoa(anime.id + "-episode-" + anime.episodeNumber)}`}
			>Watch Now</GradientButton
		>
	</div>
</Card>
