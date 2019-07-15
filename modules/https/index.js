import axios from 'axios'

const HTTPS = axios.create({
    baseURL: 'https://peremen.live/api',
});

export default HTTPS