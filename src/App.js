import React from 'react';
import MainNavigation from './Includes/MainNavigation/MainNavigation.jsx';
import ProductsPresenter from './Includes/Products/ProductsPresenter.jsx';
import Footer from './Includes/Footer/Footer.jsx';

function App(props) {
    return (
        <div className="App wrapper clearfix">
            <MainNavigation />
            <ProductsPresenter />
            <Footer />
        </div>
    );
}

export default App
