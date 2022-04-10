import axios from 'axios';

const BASE_URL = 'https://audit.quban.tech';

export const AUDIT = {
    CREATE_REPORT_FOR_USER_URL: (id: string) => `${BASE_URL}/report/create/user/${id}`,
    CREATE_REPORT_FOR_INSTITUTION_URL: (id: string) => `${BASE_URL}/report/create/institution/${id}`,
    CREATE_REPORT_URL: `${BASE_URL}/report/create/`,
    GET_ALL_REPORTS_URL: `${BASE_URL}/report/`,
    GET_REPORT_PDF: (id: string) => `${BASE_URL}/report/pdf/${id}`,
};

export const $auditApi = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
    withCredentials: true,
});
