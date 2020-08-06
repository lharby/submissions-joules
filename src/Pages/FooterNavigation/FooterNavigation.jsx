import React from 'react';

const navItem = [
    {
        text: 'Index',
        link: '/'
    },
    {
        text: 'Products',
        link: '/products/'
    },
    {
        text: 'About Us',
        link: '/about/'
    },
    {
        text: 'Contact Us',
        link: '/contact/'
    }
]

const navItems = navItem.map((item) =>
    <li key={item.link}><a href={item.link}>{item.text}</a></li>
);

const FooterNavigation = () => {
    return (
        <nav>
            <ul>
                {navItems}
            </ul>
        </nav>
    );
}

export default FooterNavigation;
