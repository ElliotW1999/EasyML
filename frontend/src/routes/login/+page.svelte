<script>
    import InputForm from "$lib/components/InputForm.svelte";

</script>
<svelte:head>
	<title>Login</title>
	<meta name="description" content="Log in or register" />
</svelte:head>

<div class="text-column">
	<h1>Sign in or register</h1>

	<p>
		Add a sign in here
	</p>

	<pre>npm create svelte@latest</pre>

	<p>
		The page you're looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don't need to load any JavaScript. Try viewing the page's source, or opening
		the devtools network panel and reloading.
	</p>
	<br>
	<p>
		Or register here:
	</p>
	<br>
	<InputForm />
</div>
