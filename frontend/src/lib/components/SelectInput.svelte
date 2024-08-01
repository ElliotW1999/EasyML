<script>
    import { Label, Select } from 'flowbite-svelte';
    let selected = 'tabular';
  
    let problem = [
      { value: 'tabular', name: 'Table-based' },
      { value: 'timeseries', name: 'Time series' },
      { value: 'multimodal', name: 'Multimedia' }
    ];
  </script>
  
  <Label>
    Select which type of problem to solve:
    <Select class="mt-2" items={problem} bind:value={selected} />
  </Label>