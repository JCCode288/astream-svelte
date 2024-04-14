<script lang="ts">
	import { ButtonGroup, GradientButton } from "flowbite-svelte";
	import Player from "./Player.svelte";
	import { page } from "$app/stores";

	export let data;

	console.log(data, "<<< Stream data");

	$: sourcesData = data.sourcesData;
	$: prevUrl = `/stream/${btoa(data.prev?.id ?? $page.params.id)}`;
	$: nextUrl = `/stream/${btoa(data.next?.id ?? $page.params.id)}`;
</script>

<svelte:head>
	<title>Streaming Anime - {data.anime.title} Episode {data.curEps}</title>
	<meta name="description" content={data.anime.description} />
	<meta
		name="keywords"
		content={`Streaming Online, ${data.anime.title} Episode ${data.curEps}, No Ads`}
	/>
</svelte:head>

<div class="flex w-full flex-col justify-center gap-4 p-4">
	<div class="w-fit rounded-md border-[3px] bg-primary-700 px-2 py-4 shadow-md md:px-4 md:py-6">
		<h1 class="text-2xl font-semibold text-white">
			{data.anime.title} Episode {data.curEps}
		</h1>
	</div>
	<Player {sourcesData} />
	<div class="flex w-full justify-center whitespace-break-spaces text-wrap">
		<ButtonGroup>
			<GradientButton disabled={data.prev ? false : true} href={prevUrl} outline color="tealToLime"
				>Previous Episode</GradientButton
			>
			<GradientButton disabled={data.next ? false : true} href={nextUrl} outline color="tealToLime"
				>Next Episode</GradientButton
			>
		</ButtonGroup>
	</div>
</div>
