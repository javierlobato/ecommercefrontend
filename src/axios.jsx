
import axios from 'axios';


const instance = axios.create({
  baseURL: 'http://localhost:8000/api/', // Cambia esta URL según el endpoint de tu backend
});

export default instance;
    