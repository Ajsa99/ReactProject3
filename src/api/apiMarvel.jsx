import axios from 'axios'

const apiMarvel = axios.create({baseURL:'https://gateway.marvel.com/'})

export default apiMarvel;