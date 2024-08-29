import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users'; 
const IMAGE_URL = 'https://picsum.photos/v2/list?page=2&limit=20';

export const fetchUsers = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const fetchImages = async()=> {
    const response = await axios.get(IMAGE_URL);
    return response.data;
}
