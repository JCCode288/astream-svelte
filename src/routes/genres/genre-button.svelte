<script lang="ts">
	import type { IGenreAnime } from "$lib/interfaces/provider.interface";
	import { Button } from "flowbite-svelte";

	export let genre: IGenreAnime;
</script>

<a href="/genres/{genre.id}">
	<Button color="green">{genre.title}</Button>
</a>
