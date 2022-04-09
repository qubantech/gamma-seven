import axios from 'axios'


export const API_URL = 'http://192.168.221.32:6868/'

export const ENDPOINTS = {
    REPORTS: (uid:string) => API_URL + `report/`,
}

const baseConfig = {
    baseURL: API_URL,
}

export const $api = axios.create(baseConfig)