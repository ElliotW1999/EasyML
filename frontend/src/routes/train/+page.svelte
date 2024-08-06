<script>
    import Dropzone from '$lib/components/Dropzone.svelte';
    import SelectInput from '$lib/components/SelectInput.svelte';
    import TrainModel from '$lib/components/TrainModel.svelte';
    import { fileStore } from '$lib/stores/fileStore';
    import { isLoading, hasLoaded } from '$lib/stores/loadingStore.js';
    import { get } from 'svelte/store';
	import { Spinner, Button, Dropdown, DropdownItem, Radio } from 'flowbite-svelte';

	
	let file = get(fileStore);

	// Subscribe to the file store
    fileStore.subscribe(value => {
		file = value;
		if (file) {
			console.log(`Selected file: ${file.name}`);
		}
    });

	let loadStatus = false
	// Subscribe to the loading store
    isLoading.subscribe(value => {
		loadStatus = value;
		
    });

	let trainingComplete = false
	// Subscribe to the loading store
    hasLoaded.subscribe(value => {
		trainingComplete = value;
    });
	
		
	/*
	// testing spinner

  	let data = null;
	let isLoading = true;
	import { onMount } from 'svelte';
	onMount(async () => {
		// Simulate a data fetch
		setTimeout(() => {
		data = { message: "Data fetched successfully!" };
		isLoading = false;
		}, 2000);
	});
	 end test */
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
		<SelectInput />
		
	</section>


	<br>
	{#if !file}
		<p>Please select a file</p>
	{:else}
		<p>
			Start training:
		</p>
		<section>
			<TrainModel></TrainModel>
		</section>
		{#if loadStatus}
			<div class="text-center"><Spinner />
			<p>Training models...</p></div>
			<script>
				trainingComplete = true
			</script>
		{:else}

			<p></p>
		{/if}

		{#if trainingComplete}
			
			<Dropzone></Dropzone>
		{:else}
			<p></p>
		{/if}

		
	
	{/if}

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
