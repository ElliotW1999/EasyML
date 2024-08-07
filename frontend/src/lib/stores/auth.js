import { writable } from 'svelte/store';

export const authToken = writable(null);
export const isLoggedIn = writable(false);
export const username = writable(null);

export function setAuthToken(token, user) {
    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('authToken', token);
        localStorage.setItem('username', user);
    }
    authToken.set(token);
    username.set(user);
    isLoggedIn.set(true);
}

export function clearAuthToken() {
    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('authToken');
        localStorage.removeItem('username');
    }
    authToken.set(null);
    username.set(null);
    isLoggedIn.set(false);
}

// Initialize the store with token and username from localStorage, if available
if (typeof window !== 'undefined' && window.localStorage) {
    const storedToken = localStorage.getItem('authToken');
    const storedUsername = localStorage.getItem('username');
    if (storedToken && storedUsername) {
        authToken.set(storedToken);
        username.set(storedUsername);
        isLoggedIn.set(true);
    }
}
