import React from 'react';
import ReactDOM from 'react-dom';
import ProductsPresenter from '../../../../Pages/Products/ProductsPresenter.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductsPresenter />, div);
  ReactDOM.unmountComponentAtNode(div);
});
