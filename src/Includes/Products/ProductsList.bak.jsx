import React, {Component} from 'react';
import axios from 'axios';
import { productsURL, testDataURL } from '../../store/globals/globals.js';
import initialState from '../../store/products/data/_initialState.json';
import './ProductsList.scss';

class ProductsList extends Component {
    constructor(){
        super()
        this.mounted = false;
        this.state = {
            initialState: true,
            errored: false,
            loading: true,
            products: initialState.results
        }
    }

    componentDidMount() {
        this.mounted = true;
        axios
            .get(testDataURL)
            .then((data) => {
                this.setState({
                    products: data.data.results,
                    initialState: false,
                    loading: false
                });
            }).catch(() => {
                this.setState({
                    errored: true
                });
            });
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        return (
            <ul className="product-list">
                {this.state.products.map(item => (
                    <li key={item.code}>{item.name}</li>
                ))}
            </ul>
        );
    }
}

export default ProductsList;
