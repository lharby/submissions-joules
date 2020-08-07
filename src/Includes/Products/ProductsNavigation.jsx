import React from 'react';

import './ProductsList.scss';

const ProductsNavigation = () => {
  return (
    <ul className="el el-2 filters">
      <li className="title m-b-2">Filters</li>
      <li><a href="#item1">Desktops</a></li>
      <li><a href="#item2" className="active">Tablets</a></li>
      <li><a href="#item3">Mobile phones</a></li>
      <li><a href="#item4">Accessories</a></li>
    </ul>
  );
}

export default ProductsNavigation;
