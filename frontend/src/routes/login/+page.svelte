<script>
    import InputForm from "$lib/components/InputForm.svelte";
    import Login from "$lib/components/Login.svelte";
    import Register from "$lib/components/Register.svelte";
    import { writable } from 'svelte/store';

    const accessToken = writable(null);
    const refreshToken = writable(null);

    function handleRegisterSuccess(event) {
        accessToken.set(event.detail.access);
        refreshToken.set(event.detail.refresh);
        // Optionally redirect the user or perform additional actions
        console.log('User registered successfully with access token:', event.detail.access);
    }

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
	<h2>
		Register here:
	<h2>
	<br>
	<Register on:registerSuccess={handleRegisterSuccess} />
</div>
