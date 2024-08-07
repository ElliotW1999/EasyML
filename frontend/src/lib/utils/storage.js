export function getLocalStorageItem(key) {
    if (typeof window !== 'undefined' && window.localStorage) {
        return localStorage.getItem(key);
    }
    return null;
}

export function setLocalStorageItem(key, value) {
    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(key, value);
    }
}

export function removeLocalStorageItem(key) {
    if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem(key);
    }
}
