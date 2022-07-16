export class PostApiService{

    _url='https://jsonplaceholder.typicode.com/posts'

    getAllPosts(){
       return fetch(this._url)
           .then(value => value.json())
    }
}