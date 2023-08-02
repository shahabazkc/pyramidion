import {
    getProductData,
    getProducts
} from '../../api/api';

import { createAsyncThunk } from '@reduxjs/toolkit';

export const getAllProductsAsync = createAsyncThunk(
    'product/getAllProduct',
    async () => {
        try {
            const { data } = await getProducts();
            return data;
        } catch (err) {
            throw err?.response?.data;
        }
    }
);

export const getProductDetailsAsync = createAsyncThunk(
    'product/getProductDetails',
    async (id) => {
        try {
            const { data } = await getProductData(id);
            return data;
        } catch (err) {
            throw err?.response?.data;
        }
    }
);

