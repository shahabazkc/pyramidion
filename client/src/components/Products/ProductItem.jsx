import './ProductItem.css';
import { Link } from "react-router-dom";
import React, { memo } from 'react';

function ProductItem({ data }) {
    return (
        <>
            <div className="product_item_box">
                <h2 className="product_title">
                    {data.name}
                </h2>
                <div className="product_category">{data.category}</div>
                <div className="product_short_description">
                    {data.short_description}
                </div>
                <div className="product_price_container">
                    Price:  <span className="product_price">
                        <span className="currency">&#x20B9;</span>{data.price}
                    </span>
                </div>
                <Link to={`product/${data._id}`}>
                    <div className="product_action">
                        <button
                            className="btn custom-view-btn p-2 mt-3 btn-primary"
                        >
                            View
                        </button>
                    </div>
                </Link>
            </div>
        </>
    );
}


export default memo(ProductItem);