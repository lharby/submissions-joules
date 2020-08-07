import React from 'react';
import ProductsHeader from './ProductsHeader.jsx';
import ProductsNavigation from './ProductsNavigation.jsx';
import ProductsList from './ProductsList.jsx';
import './Products.scss';

function ProductsPresenter() {
    return (
        <div>
            <ProductsHeader />
            <ProductsNavigation />
            <ProductsList />
        </div>
    );
}

export default ProductsPresenter;
