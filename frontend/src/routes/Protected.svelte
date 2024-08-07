<script>
    import axiosInstance from '$lib/utils/axiosInstance';
    import { onMount } from 'svelte';

    let data = null;

    onMount(async () => {
        try {
            const response = await axiosInstance.get('/protected/');
            data = response.data;
        } catch (error) {
            console.error("Error fetching protected data: ", error);
        }
    });
</script>

<main>
    <h1>Protected Route</h1>
    {#if data}
        <pre>{JSON.stringify(data, null, 2)}</pre>
    {:else}
        <p>Loading...</p>
    {/if}
</main>
