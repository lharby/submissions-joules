import React from 'react';

const navItem = [
    {
        text: 'JOULES',
        link: '/',
        className: 'no-link'
    },
    {
        text: 'SALE',
        link: '/sale/',
        className: 'sale'
    },
    {
        text: 'WOMEN',
        link: '/women/'
    },
    {
        text: 'GIRLS',
        link: '/girls/'
    },
    {
        text: 'BOYS',
        link: '/boys/'
    },
    {
        text: 'OUTDOOR',
        link: '/outdoor/'
    },
    {
        text: 'BLOG',
        link: '/blog/'
    },
    {
        text: 'CONTACT US',
        link: '/contact/',
        className: 'contact'
    }
];

const navIcon = [
    {
        item: 'Search',
        link: '/search/',
        className: 'ion-search'
    },
    {
        item: 'Likes',
        link: '/likes/',
        className: 'ion-heart'
    },
    {
        item: 'Cart',
        link: '/cart/',
        className: 'ion-bag'
    }

];

const navItems = navItem.map((item) =>
    <li key={item.link}><a href={item.link} className={item.className}>{item.text}</a></li>
);

const navIcons = navIcon.map((item) =>
    <li key={item.className}><a href={item.link} className={item.className}></a></li>
);

const MainNavigationItems = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#" className="mobile-visible ion-navicon"></a>
                    <ul className="main-navigation mobile-hidden">
                        {navItems}
                    </ul>
                    <ul className="icon-navigation mobile-visible pos-abs">
                        {navIcons}
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavigationItems;
