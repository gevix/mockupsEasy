<script>
import  Tabs  from './Tabs.svelte';
</script>

<svelte:head>
	<title>MockupsEasy</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1 class="font-black text-left w-3.5">Transform Your Designs into Stunning Mockups with Ease</h1>
	<p class="text-left text-xl">MockupsEasy is a collection of free and premium mockups for your design projects.</p>
	<Tabs />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
