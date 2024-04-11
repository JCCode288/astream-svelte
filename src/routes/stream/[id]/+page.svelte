<script lang="ts">
	import Player from "./Player.svelte";

	export let data;

	$: sourcesData = data.sourcesData;
</script>

<svelte:head>
	<title>Streaming Anime - {data.anime.title} Episode {data.curEps}</title>
	<meta name="description" content={data.anime.description} />
	<meta
		name="keywords"
		content={`Streaming Online, ${data.anime.title} Episode ${data.curEps}, No Ads`}
	/>
</svelte:head>

<h1>{data.anime.title} Episode {data.curEps}</h1>
<Player {sourcesData} />
