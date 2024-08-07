import axios from 'axios';
import { setAuthToken } from '../stores/auth';

const API_URL = 'http://localhost:5173/api';  // Adjust according to your API endpoint

export async function login(username, password) {
    try {
        const response = await axios.post(`${API_URL}/token/`, {
            username,
            password
        });
        const { access } = response.data;
        setAuthToken(access, username);  // Pass the username to setAuthToken
        return true;
    } catch (error) {
        console.error("Login error: ", error);
        return false;
    }
}
