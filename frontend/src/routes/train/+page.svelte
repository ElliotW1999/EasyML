<script>
    import Dropzone from '$lib/components/Dropzone.svelte';
    import SelectInput from '$lib/components/SelectInput.svelte';

	import { Spinner, Button, Dropdown, DropdownItem, Radio } from 'flowbite-svelte';
	import { ChevronDownOutline, ArrowRightOutline, CartSolid, BrainSolid, BrainOutline } from 'flowbite-svelte-icons';
	
	// testing spinner
	import { onMount } from 'svelte';

	let isLoading = true;
  	let data = null;

	onMount(async () => {
		// Simulate a data fetch
		setTimeout(() => {
		data = { message: "Data fetched successfully!" };
		isLoading = false;
		}, 2000);
	});
	// end test
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
		<Dropzone />
	</p>

	
	<pre> [Is there any way users can inject code here?] </pre>
	<br>


	
	<section>
		<SelectInput/>
		
	</section>


	<br>

	<p>
		Start training:
	</p>
	<section>
		<Button>
			<BrainOutline class="w-5 h-5 me-2" />
		   	Generate model
		</Button>
	</section>
	<pre>When the model is training, display spinner (or loading bar)</pre>
	{#if isLoading}
		<div class="text-center"><Spinner />
		<p>Training models...</p></div>
	{:else}
		<p>{data.message}</p>
	{/if}
	

	
	<pre>Once complete, display new dropzone</pre>
	<Dropzone></Dropzone>
	


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
