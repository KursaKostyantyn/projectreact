import axios from "axios";


let axiosInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/comments'
})

const getAllComments=axiosInstance.get('')

export {getAllComments}