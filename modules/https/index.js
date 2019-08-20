import axios from 'axios'

const HTTPS = axios.create({
    baseURL: '/api',
});

export default HTTPS