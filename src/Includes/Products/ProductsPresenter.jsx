import React from 'react';
import ProductsHeader from './ProductsHeader.jsx';
import ProductsList from './ProductsList.jsx';
import './Products.scss';

function ProductsPresenter() {
    return (
        <div className="products">
            <ProductsHeader />
            <ProductsList />
        </div>
    );
}

export default ProductsPresenter;
