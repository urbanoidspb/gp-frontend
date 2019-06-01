import axios from 'axios'

//GET
axios.get('https://fea7511f.ngrok.io/api/albums')
axios.get('https://fea7511f.ngrok.io/api/news ')
axios.get('https://fea7511f.ngrok.io/api/events')


//POST
axios.post('https://fea7511f.ngrok.io/api/events/1/join')

export default axios