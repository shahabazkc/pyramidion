import axios from 'axios'

const baseUrl = 'http://localhost:5000/api';

const api = axios.create({
    baseURL: baseUrl,
    withCredentials: true
});



export const getProducts = async () => await api.get('/products');
export const getProductData = async (id) => await api.get(`/products/${id}`);