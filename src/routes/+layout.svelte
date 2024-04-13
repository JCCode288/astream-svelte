<script>
	import Navbar from "./navbar.svelte";
	import "../app.pcss";
</script>

<div class="h-screen max-w-[100%] overflow-x-hidden">
	<slot />
</div>
<Navbar />
