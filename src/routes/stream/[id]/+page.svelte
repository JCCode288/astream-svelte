<script lang="ts">
	import Player from "./Player.svelte";

	export let data;

	$: sourcesData = data.sourcesData;
</script>

<h1>Stream Page</h1>
<Player {sourcesData} />
