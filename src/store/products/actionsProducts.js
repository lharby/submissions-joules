import axios from 'axios';
import { testDataURL } from '../globlas/globals';

const acGetProductsAjax = () => {
    axios
        .get(testDataURL)
        .then((response) => {
            return response.data;
        })
        .catch((errored) => {
            errored = true;
        });
};

const asyncActions = {
    acGetProductsAjax
};

const acGetProducts = (payload, errored, loading) => {
    return asyncActions.acGetProductsAjax(payload, errored, loading);
};

const actions = { acGetProducts };

export default actions;

export { actions, asyncActions };
