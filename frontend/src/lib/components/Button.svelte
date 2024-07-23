<script>
  // Add any necessary script here
  import { goto } from '$app/navigation';

  function handleClick() {
    goto('/train');
  }
</script>
  
<style>
  button {
    padding: 10px 20px;
    font-size: 16px;
  }
</style>

<button on:click={handleClick}>
  Get started
</button>
  