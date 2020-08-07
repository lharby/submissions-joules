import React from 'react';
import {getCurrentYear} from '../../store/utils/date';
import FooterNavigation from '../../Pages/FooterNavigation/FooterNavigation.jsx';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="pos-fix xs-font full-width">
            <FooterNavigation />
            <span className="pos-abs copyright">&copy; <span className="year">{getCurrentYear()}</span> Luke Harby</span>
        </footer>
    );
};

export default Footer;
