<script>
	import FileUpload from '$lib/components/FileUpload.svelte';
</script>
  

<svelte:head>
	<title>Training</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>Machine Learning made easy</h1>

	<p>
		Start by uploading your training data in a csv format [possibly allow for more formats?], with the final column as your target variable [or specify after upload].
	</p>

	<pre>[Add button to upload file here]</pre>
	<FileUpload />
	<pre> [Is there any way users can inject code here?] </pre>
	<p>
		GPT: You can customize the upload logic inside the handleUpload function to fit your specific needs, such as uploading the file to a server using fetch or any other method.
	</p>
	<p>
		Select which type of problem to solve
		[Table-based, time series, multimedia]
	</p>

	<pre>[Add dropdown menu to select]</pre>

	<pre>[Add button to begin training]</pre>

	<p>
		The <a href="/sverdle">Sverdle</a> page illustrates SvelteKit's data loading and form handling. Try
		using it with JavaScript disabled!
	</p>
</div>
