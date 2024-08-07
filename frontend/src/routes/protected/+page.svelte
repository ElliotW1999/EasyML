<script>
    import { onMount } from 'svelte';
    import { navigate } from 'svelte-routing';
    import { authToken, username } from '$lib/stores/auth';

    let token;
    let user;

    // Subscribe to the authToken and username stores
    authToken.subscribe(value => {
        token = value;
    });

    username.subscribe(value => {
        user = value;
    });

    // Redirect to login if not authenticated
    onMount(() => {
        setTimeout(() => {
            if (!token) {
                window.location.reload(); // Reload the page
                window.location.href = '/login'; // Then perform the redirect
            }
        }, 70); // Slight delay
    });
</script>

<main>
    {#if token}
        <h1>Protected Page</h1>
        <p>Welcome, {user}! Only logged-in users can see this page.</p>
    {:else}
        <p>Redirecting to login...</p>
    {/if}
</main>
