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
]

const navItems = navItem.map((item) =>
    <li key={item.link}><a href={item.link} className={item.className}>{item.text}</a></li>
);

const MainNavigationItems = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#" className="mobile-visible ion-navicon"></a>
                    <ul className="mobile-hidden">
                        {navItems}
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavigationItems;
