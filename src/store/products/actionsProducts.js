import axios from 'axios';

const acGetProductsAjax = (payload, errored, loading) => {
    axios
        .get('https://api.myjson.com/bins/1ykgs')
        .then((response) => {
            payload = response.data;
            console.log(payload);
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
