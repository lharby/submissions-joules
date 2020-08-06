import React from 'react';
import {getCurrentYear} from '../../store/utils/date';
import FooterNavigation from '../../Pages/FooterNavigation/FooterNavigation';

import './Footer.scss';

const Footer = () => {
  return (
    <footer className="pos-fix xs-font full-width">
      <FooterNavigation />
      <p>&copy; <span className="year">{getCurrentYear()}</span> Luke Harby</p>
    </footer>
  );
};

export default Footer;
