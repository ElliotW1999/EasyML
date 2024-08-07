<script lang="ts">
  import { Section, Register } from 'flowbite-svelte-blocks';
  import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
  import { login } from '$lib/utils/auth';
  import { authToken } from '../stores/auth';
  import { isLoggedIn } from '../stores/auth';
  import { navigate } from 'svelte-routing';

  let username = '';
  let password = '';
  let errorMessage = '';
  let successMessage = '';

  async function handleLogin() {
      const success = await login(username, password);
      if (success) {
          successMessage = 'Login successful!';
          errorMessage = '';
          navigate('/protected');  // Redirect to a protected route
      } else {
          errorMessage = 'Invalid credentials';
          successMessage = '';
      }
  }
</script>

<Section name="login">
  <Register href="/">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <form class="flex flex-col space-y-6" on:submit|preventDefault={handleLogin} action="/protected/">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Sign in</h3>
        <Label class="space-y-2">
          <span>Your username</span>
          <Input type="text" bind:value={username} id="username" placeholder="John" required />
        </Label>
        <Label class="space-y-2">
          <span>Your password</span>
          <Input type="password" bind:value={password} name="password" placeholder="•••••" required />
        </Label>
        <div class="flex items-start">
          <Checkbox>Remember me</Checkbox>
          <a href="/" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Forgot password?</a>
        </div>
        {#if errorMessage}
          <p>{errorMessage}</p>
        {/if}

        {#if successMessage}
          <p class="success">{successMessage}</p>
        {/if}
        <Button type="submit" class="w-full1">Sign in</Button>
        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
          Don’t have an account yet? <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
        </p>
      </form>
    </div>
  </Register>
</Section>


<style>
  .error {
      color: red;
  }
  .success {
      color: green;
  }
</style>