import axios from 'axios'

const HTTP = axios.create({
    baseURL: 'http://2d84df61.ngrok.io',
});

export default HTTP