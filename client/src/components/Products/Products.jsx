import React, { useEffect, memo } from 'react';

import { toast } from 'react-toastify';
import ProductItem from './ProductItem';
import { getAllProductsAsync } from '../../redux/api/product';
import { useDispatch, useSelector } from 'react-redux';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);

    const fetchProductsData = async () => {
        try {
            const response = await dispatch(getAllProductsAsync()).unwrap();
        } catch (error) {
            toast.error('Error while fetching products');
        }
    };

    useEffect(() => {
        fetchProductsData();
    }, []);

    return (
        <div className="product_lists">
            {
                products?.map((item, index) => (
                    <ProductItem data={item} key={index * 20} />
                ))
            }
        </div>
    )
}

export default memo(Products)
