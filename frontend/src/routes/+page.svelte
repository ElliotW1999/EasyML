<script>
	import Counter from './Counter.svelte';
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';
	import { Button } from 'flowbite-svelte';

	import { onMount } from 'svelte';

	let message = '';

	onMount(async () => {
		const response = await fetch('http://localhost:8000/api/data/');
		const data = await response.json();
		message = data.message;
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>

		Something inspiring<br />with mAcHiNe LeArNiNg
		{message}
		<br>
		<Button href="/train">Get Started</Button>
	</h1>
	<br>

	<h2>
		1. Upload file -> 2. Train model -> 3. Make predictions (with icons)
	</h2>


</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
