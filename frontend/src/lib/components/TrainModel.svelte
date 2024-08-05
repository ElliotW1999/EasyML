<script>
    import { Button } from 'flowbite-svelte';
    import { fileStore } from '../stores/fileStore';
    import { get } from 'svelte/store';
	import { BrainOutline } from 'flowbite-svelte-icons';
    
    const handleSubmit = async () => {
        const file = get(fileStore);
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            try {
                const response = await fetch('http://localhost:8000/api/upload/', {
                    method: 'POST',
                    body: formData,
                });

                if (response.ok) {
                    console.log('File uploaded successfully');
                } else {
                    console.error('File upload failed');
                }
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        } else {
            console.error('No file selected');
        }
    };
</script>

<Button on:click={handleSubmit}>
    <BrainOutline class="w-5 h-5 me-2" />
		   	Generate model
</Button>
