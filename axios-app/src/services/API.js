import axios from 'axios';

//crear una instancia de Axios
const API = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    timeout: 10000
});

export default API;