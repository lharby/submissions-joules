import React from 'react';
import MainNavigation from './Includes/MainNavigation/MainNavigation.jsx';
import Products from './Includes/Products/Products.jsx';
import Footer from './Includes/Footer/Footer.jsx';

function App(props) {
    return (
        <div className="App wrapper clearfix">
            <MainNavigation />
            <Products />
            <Footer />
        </div>
    );
}

export default App
