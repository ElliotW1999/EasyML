<script>
	import FileUpload from '$lib/components/FileUpload.svelte';
	import { Button, Dropdown, DropdownItem, Radio } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	let group1 = 1;
</script>


<svelte:head>
	<title>Training</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Machine Learning made easy</h1>

	<p>
		Start by uploading your training data in a csv format [possibly allow for more formats?], with the final column as your target variable [or specify after upload].
		<br>
		<br>
		<FileUpload />
	</p>

	
	<pre> [Is there any way users can inject code here?] </pre>
	<br>
	<br>
	<p>
		GPT: You can customize the upload logic inside the handleUpload function to fit your specific needs, such as uploading the file to a server using fetch or any other method.
	</p>

	Select which type of problem to solve:
	<section>
		<Button>Dropdown radio {group1} <ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" /></Button>
		<Dropdown class="w-48 p-3 space-y-1">
		<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
			<Radio name="group2" bind:group={group1} value={1}>Table-based</Radio>
		</li>
		<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
			<Radio name="group2" bind:group={group1} value={2}>Time series</Radio>
		</li>
		<li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
			<Radio name="group2" bind:group={group1} value={3}>Multimedia</Radio>
		</li>
		</Dropdown>
	</section>


	<br>

	<pre>[Add button to begin training]</pre>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

</style>
