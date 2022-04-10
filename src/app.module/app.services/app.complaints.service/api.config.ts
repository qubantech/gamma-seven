import axios from 'axios';

const BASE_URL = 'https://complaints.quban.tech';

export const COMPLAINTS = {
    GET_USER_COMPLAINTS: (id: string) => `${BASE_URL}/complaints/user/${id}`,
    PUT_COMPLAINTS: () => `${BASE_URL}/complaints`,
    CREATE_REPORT_URL: `${BASE_URL}/report/create/`,
    /*GET_REPORT_PDF: (id: string) => `${BASE_URL}/report/pdf/${id}`,*/
};

export const $complaintsApi = axios.create({
    withCredentials: true,
});
