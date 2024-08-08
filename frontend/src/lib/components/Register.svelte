<script lang="ts">
    import { Section, Register } from 'flowbite-svelte-blocks';
    import { Button, Checkbox, Label, Input } from 'flowbite-svelte';
    import { createEventDispatcher } from 'svelte';
    import { writable } from 'svelte/store';

    const dispatch = createEventDispatcher();

    let username = '';
    let email = '';
    let password = '';
    let confirmPassword = '';

    const error = writable('');

    async function handleSubmit(event) {
        event.preventDefault();
        if (password !== confirmPassword) {
            error.set('Passwords do not match');
            return;
        }

        const response = await fetch('http://localhost:5173/api/user/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();
        if (response.ok) {
            // Handle successful registration
            dispatch('registerSuccess', { access: data.access, refresh: data.refresh });
        } else {
            // Handle errors
            error.set(data.detail || 'Registration failed');
        }
    }
</script>
  
  <Section name="register">
    <Register href="/">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <form class="flex flex-col space-y-6" on:submit={handleSubmit}>
          <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">Create an account</h3>
          <Label class="space-y-2">
            <span>Your email</span>
            <Input type="email" name="email" id="email" bind:value={email} placeholder="name@company.com" required />
          </Label>
          <Label class="space-y-2">
            <span>Your username</span>
            <Input type="text" id="username" bind:value={username} placeholder="John" required />
          </Label>
          <Label class="space-y-2">
            <span>Your password</span>
            <Input type="password" name="password" id="password" bind:value={password} placeholder="•••••" required />
          </Label>
          <Label class="space-y-2">
            <span>Confirm password</span>
            <Input type="password" name="confirm-password" id="confirm-password" bind:value={confirmPassword} placeholder="•••••" required />
          </Label>
          <div class="flex items-start">
            <Checkbox>I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/"> Terms and Conditions</a></Checkbox>
          </div>
          <Button type="submit" class="w-full1">Create an account</Button>
          {#if $error}
            <p class="error">{$error}</p>
          {:else}
            <p >User created</p>

          {/if}
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have an account? <a href="/" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
          </div>
        </form>
      </div>
    </Register>
  </Section>