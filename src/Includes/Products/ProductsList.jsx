import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { productsURL, testDataURL } from '../../store/globals/globals.js';
import './ProductsList.scss';

const ProductsList = () => {
    const [data, setData] = useState([]);
    const pathName = document.location.pathname.split('/')[1].toUpperCase();
    const fetchData = () => {
        const result = axios
            .get(testDataURL)
            .then(res => {
                setData(res.data.results);
            })
    };
    useEffect(() => {
        document.title = `Joules ${pathName}`;
        fetchData();
    }, []);
    return (
        <ul className="product-list">
            {data.map(item => (
                <li key={item.code} className="col">
                    <ul>
                        <li>
                            <a href={item.url}>
                                <img src={item.images[1].url} alt={item.name} />
                            </a>
                        </li>
                        <li>{item.name}</li>
                        <li>{item.price.formattedValue}</li>
                    </ul>
                </li>
            ))}
        </ul>
    );
};

export default ProductsList;
