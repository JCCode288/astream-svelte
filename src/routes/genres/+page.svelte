<script lang="ts">
	import GenreButton from "./genre-button.svelte";

	export let data;

	$: genres = data.genres;
</script>

<svelte:head>
	<title>Anime Genres</title>
	<meta name="description" content="All list of anime genres in Astreamline website" />
	<meta name="keywords" content="animes, genres, all genres" />
</svelte:head>

<div class="flex max-h-full flex-col">
	<h1>All Genres</h1>

	<div class="relative my-4 flex flex-wrap gap-x-4 gap-y-6 overflow-y-auto px-8 py-4">
		{#each genres as genre}
			<GenreButton {genre} />
		{/each}
	</div>
</div>
e
