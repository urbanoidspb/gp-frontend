import axios from 'axios'

const HTTPS = axios.create({
    baseURL: process.env.API_URL || '//api',
});

export default HTTPS