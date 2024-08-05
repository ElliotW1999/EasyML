<script>
  import { Dropzone } from 'flowbite-svelte';
  import { fileStore } from '../stores/fileStore';
  let file = null;

  const handleDrop = (event) => {
      event.preventDefault();
      const files = event.dataTransfer.items || event.dataTransfer.files;
      if (files.length > 0) {
          const droppedFile = files[0].kind ? files[0].getAsFile() : files[0];
          file = droppedFile;
          fileStore.set(file);
      }
  };

  const handleChange = (event) => {
      const files = event.target.files;
      if (files.length > 0) {
          file = files[0];
          fileStore.set(file);
      }
  };
</script>

<Dropzone
  id="dropzone"
  on:drop={handleDrop}
  on:dragover={(event) => event.preventDefault()}
  on:change={handleChange}
  accept=".csv, .xlsx"  
  multiple={false}> 
  <svg aria-hidden="true" class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
  </svg>
  {#if file}
      <p class="text-sm text-gray-500 dark:text-gray-400">Selected file: {file.name}</p>
  {:else}
      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
      <p class="text-xs text-gray-500 dark:text-gray-400">CSV (or xlsx?)</p>
  {/if}
</Dropzone>
