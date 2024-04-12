<script lang="ts">
	export let data;
</script>

<svelte:head>
	<title>Anime Detail - {data.title}</title>
	<meta name="description" content={data.description} />
	<meta name="keywords" content={`${data.title}, ${data.genres?.join(", ")}, ${data.rating}`} />
</svelte:head>

<h1>Detail Page</h1>
<div>
	{JSON.stringify(data)}
</div>
