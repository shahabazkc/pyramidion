import { createSlice } from '@reduxjs/toolkit';
import {
    createProductAsync,
    getAllProductsAsync,
    getProductDetailsAsync
} from '../api/product';


const initialState = {
    products: [],
    productData: {}
};

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getAllProductsAsync.fulfilled, (state, action) => {
                state.products = action.payload?.data ?? []
            })
            .addCase(getAllProductsAsync.rejected, (state) => {
                state.products = state.products ?? []
            })
            .addCase(getProductDetailsAsync.fulfilled, (state, action) => {
                state.productData[action?.payload?.data?._id] = action.payload?.data;
            })
            .addCase(getProductDetailsAsync.rejected, (state) => { })
            .addCase(createProductAsync.fulfilled, (state, action) => {
                state.products.push(action.payload?.data)
            })
            .addCase(createProductAsync.rejected, (state) => { })
    },
});

export default productSlice.reducer;
