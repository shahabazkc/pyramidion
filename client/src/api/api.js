import axios from 'axios'

const baseUrl = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: baseUrl,
    withCredentials: true
});

export const testPasswordStrength = async (password) => await api.post('/password/check', { password });