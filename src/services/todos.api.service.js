import axios from "axios";

let axiosInstance=axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos'
})

const getAllTodos= axiosInstance.get('')

export {getAllTodos}