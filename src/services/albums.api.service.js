import axios from "axios";

let axiosInstance=axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/albums'
})

const getAllAlbums=axiosInstance.get('');
export {getAllAlbums}