import React from 'react';
import MainNavigation from './Includes/MainNavigation/MainNavigation.jsx';
import Footer from './Includes/Footer/Footer.jsx';

function App(props) {
    return (
        <div className="App wrapper clearfix">
            <MainNavigation />
            <Footer />
        </div>
    );
}

export default App
