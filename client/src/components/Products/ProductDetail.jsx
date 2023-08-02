import React, { useEffect, useState } from 'react';
import './ProductDetail.css';
import { useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetailsAsync } from '../../redux/api/product';


const ProductDetail = () => {
    const routeParams = useParams();
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.productData);
    const [product, setProductData] = useState({});

    const fetchProductData = async (id) => {
        try {
            if (productData && productData[id]) {
                setProductData(productData[id]);
            }
            else {
                let response = await dispatch(getProductDetailsAsync(id)).unwrap();
                setProductData(response?.data)
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || "Internal Server Error");
        }
    };

    useEffect(() => {
        const { id } = routeParams;
        fetchProductData(id)
    }, []);

    return (
        <div className="product-detail">
            <div className="product-info">
                <h2 className="product-name">{product?.name}</h2>
                <p className="product-category">{product?.category}</p>
                <p className="product-price"><span className="currency">&#x20B9;</span>{product?.price}</p>
                <p className="product-short-description">{product?.short_description}</p>
                <p className="product-description">{product?.description}</p>
                <p className="product-seller">Seller: {product?.seller}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
