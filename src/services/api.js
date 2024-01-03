import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://rocketmovie-20zh.onrender.com'
});