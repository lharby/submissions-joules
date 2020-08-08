import React from 'react';
import ReactDOM from 'react-dom';
import ProductsPresenter from '../../../../Includes/Products/ProductsPresenter.jsx';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductsPresenter />, div);
    expect(div.querySelectorAll('.products').length).toBe(1);
    ReactDOM.unmountComponentAtNode(div);
});
