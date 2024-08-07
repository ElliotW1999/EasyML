import axios from 'axios';
import { authToken } from '$lib/stores/auth';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api',  // Adjust according to your API endpoint
});

authToken.subscribe(token => {
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
});

export default axiosInstance;
