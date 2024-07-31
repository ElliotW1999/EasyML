<script>
    import { Input, Label, Helper, Button, Checkbox, A } from 'flowbite-svelte';
  </script>
  
  <form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <Label for="first_name" class="mb-2">First name</Label>
        <Input type="text" id="first_name" placeholder="John" required />
      </div>
      <div>
        <Label for="last_name" class="mb-2">Last name</Label>
        <Input type="text" id="last_name" placeholder="Doe" required />
      </div>
      <div>
        <Label for="company" class="mb-2">Company (optional)</Label>
        <Input type="text" id="company" placeholder="Google" optional />
      </div>
      <div>
        <Label for="phone" class="mb-2">Phone number (optional)</Label>
        <Input type="tel" id="phone" placeholder="123-456-7890" pattern={"[0-9]{3}-[0-9]{3}-[0-9]{4}"} optional />
      </div>

    </div>
    <div class="mb-6">
      <Label for="email" class="mb-2">Email address</Label>
      <Input type="email" id="email" placeholder="john.doe@company.com" required />
    </div>
    <div class="mb-6">
      <Label for="password" class="mb-2">Password</Label>
      <Input type="password" id="password" placeholder="•••••••••" required />
    </div>
    <div class="mb-6">
      <Label for="confirm_password" class="mb-2">Confirm password</Label>
      <Input type="password" id="confirm_password" placeholder="•••••••••" required />
    </div>
    <Checkbox class="mb-6 space-x-1 rtl:space-x-reverse" required>
      I agree with the <A href="/" class="text-primary-700 dark:text-primary-600 hover:underline">terms and conditions</A>.
    </Checkbox>
    <Button type="submit">Register</Button>
  </form>