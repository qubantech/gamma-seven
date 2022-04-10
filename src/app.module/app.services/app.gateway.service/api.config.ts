import axios from 'axios';

const BASE_URL = 'https://gateway.quban.tech';

export const GATEWAY = {
    SUBMIT: `${BASE_URL}/submit`,
};

export const $gatewayApi = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true,
});
