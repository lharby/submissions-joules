import React from 'react';
import MainNavigationItems from '../../Pages/MainNavigationItems/MainNavigationItems.jsx';
import './MainNavigation.scss';

const MainNavigation = () => {
    return (
        <header className="header pos-fix full-width">
            <MainNavigationItems />
        </header>
    );
};

export default MainNavigation;
