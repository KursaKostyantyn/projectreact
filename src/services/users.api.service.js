import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
})

const getUsers = axiosInstance.get('')
const createUser = (obj) => {
    return axiosInstance.post('', JSON.stringify(obj))
}


export {getUsers, createUser}