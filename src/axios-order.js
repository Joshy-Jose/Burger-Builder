import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://console.firebase.google.com/project/react-my-burger-4ee1e/database/react-my-burger-4ee1e-default-rtdb/data/~2F'
});

export default instance;
