<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app h-full bg-gradient-to-b from-cyan-500 to-blue-500 font-mono">
	<Header />

	<main
		class="h-full flex justify-center 
	"
	>
		<div class="w-9/12 sm:w-6/12 sm:w-5/12 lg:w-3/12 xl:w-2/12 py-32">
			<slot />
		</div>
	</main>
</div>

<style>
</style>
