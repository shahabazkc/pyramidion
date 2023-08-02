import React, { useEffect, memo, useState } from 'react';

import { toast } from 'react-toastify';
import ProductItem from './ProductItem';
import { createProductAsync, getAllProductsAsync } from '../../redux/api/product';
import { useDispatch, useSelector } from 'react-redux';
import CreateProductModal from '../CreateProduct/createProductModal';

const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const [modalIsOpen, setModal] = useState(false);

    const [onSubmitted, setOnSubmitted] = useState(false);

    const onCloseModal = () => setModal(false);

    const onCreateProduct = async (data) => {
        try {
            await dispatch(createProductAsync(data)).unwrap();
            setOnSubmitted(true);
            onCloseModal();
        } catch (error) {
            toast.error(error?.message || "Internal Server Error")
        }
    }

    const fetchProductsData = async () => {
        try {
            await dispatch(getAllProductsAsync()).unwrap();
        } catch (error) {
            toast.error('Error while fetching products');
        }
    };

    useEffect(() => {
        fetchProductsData();
    }, []);

    return (
        <div className='home_container'>
            <CreateProductModal onSubmitted={onSubmitted} setOnSubmitted={setOnSubmitted} open={modalIsOpen} onClose={onCloseModal} onCreateProduct={onCreateProduct} />
            <div className="d-flex flex-row-reverse">
                <button onClick={() => setModal(true)} className="btn btn-large btn-primary m-3">Create Product</button>
            </div>
            <div className="product_lists">
                {
                    products?.map((item, index) => (
                        <ProductItem data={item} key={index * 20} />
                    ))
                }
            </div>
        </div>
    )
}

export default memo(Products)
