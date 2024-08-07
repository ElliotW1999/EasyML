import { writable } from 'svelte/store';
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '$lib/utils/storage';

export const authToken = writable(null);

export function setAuthToken(token) {
    setLocalStorageItem('authToken', token);
    authToken.set(token);
}

export function clearAuthToken() {
    removeLocalStorageItem('authToken');
    authToken.set(null);
}

// Initialize the store with token from localStorage, if available
const storedToken = getLocalStorageItem('authToken');
if (storedToken) {
    authToken.set(storedToken);
}
