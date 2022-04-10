import axios from 'axios';

const BASE_URL = 'https://complaints.quban.tech';

export const COMPLAINTS = {
    GET_COMPLAINT_BY_ID: (id: string) => `${BASE_URL}/complaints/${id}`,
    UPDATE_COMPLAINT_BY_ID: (id: string) => `${BASE_URL}/complaints/${id}`,
    GET_ALL_COMPLAINTS: () => `${BASE_URL}/complaints`,
    POST_COMPLAINT: () => `${BASE_URL}/complaints`,
    GET_USER_COMPLAINTS: (id: string) => `${BASE_URL}/complaints/user/${id}`,
    GET_INSTITUTION_COMPLAINTS: (id: string) => `${BASE_URL}/complaints/institution/${id}`,
};

export const $complaintsApi = axios.create({
    withCredentials: true,
});
