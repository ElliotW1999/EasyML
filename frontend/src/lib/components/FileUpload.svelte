<script>
  let file;

  function handleFileChange(event) {
    file = event.target.files[0];
    console.log(file);
  }

  function handleUpload() {
    if (file) {
      // Process the file upload logic here
      console.log(`Uploading file: ${file.name}`);
      // Example: Use fetch or any other method to upload the file to the server
    } else {
      alert("Please select a file first.");
    }
  }
</script>

<style>
  .file-upload {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    max-width: 400px;
    margin: auto;
  }

  .file-upload input[type="file"] {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }

  .file-upload button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    transition: background-color 0.3s;
  }

  .file-upload button:hover {
    background-color: #0056b3;
  }
</style>

<div class="file-upload">
  <input type="file" accept=".csv" on:change={handleFileChange} />
  <button on:click={handleUpload}>Upload File</button>
</div>
