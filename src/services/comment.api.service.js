import axios from "axios";

export class CommentApiService{

    _BaseUrl='https://jsonplaceholder.typicode.com/comments';

    axiosService= axios.create({
        baseURL: this._BaseUrl
    });

    getAllComments(){
        return this.axiosService.get('')
    };
}