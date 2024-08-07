<script>
    import InputForm from "$lib/components/InputForm.svelte";
    import Login from "$lib/components/Login.svelte";

</script>
<svelte:head>
	<title>Login</title>
	<meta name="description" content="Log in or register" />
</svelte:head>

<div class="text-column">
	<h1>Sign in or register</h1>

	<p>
		<Login />
	</p>

	
	<br>
	<p>
		Or register here:
	</p>
	<br>
	<InputForm />
</div>
