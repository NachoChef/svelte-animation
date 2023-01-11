<script>
	import { fade, blur, slide, fly } from 'svelte/transition';
	import '$lib/app.css';
	import { custom } from './custom';
	import Nav from '$lib/Nav.svelte';
	import Box from '$lib/Box.svelte';

	let ready = false;
	let isNavOpen = false;

	function toggleNav() {
		isNavOpen = !isNavOpen;
	}
</script>

<!-- Fade - opacity 0-1 -->
<!-- Blur - opacity and blur -->
<!-- Fly - x and y along with opacity -->
<!-- Slide - height (basically an accordion) -->
<!-- Scale - start: scale, opacity -->
<!-- Draw - draw svgs -->

<!-- css transition animation -->
<!-- <h1 class:hidden={!ready}>Welcome to SvelteKit</h1> -->

<!-- mounting and unmounting -->

<button on:click={toggleNav}>Menu</button>

{#if isNavOpen}
	<Nav {toggleNav} />
{/if}
<!-- <button on:click={() => (ready = !ready)}>Toggle animation</button> -->

<Box />

{#if ready}
	<!-- <h1 transition:slide>Welcome to SvelteKit</h1> -->
	<h1 transition:custom>Welcome to SvelteKit</h1>
{/if}

<style>
	.hidden {
		opacity: 0;
		transform: 0.3s ease opacity;
	}
</style>
