import { writable } from 'svelte/store';

export const isLoading = writable(false);

export const hasLoaded = writable(false);
