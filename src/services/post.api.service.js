
const basUrl='https://jsonplaceholder.typicode.com/posts';

const getPost=(postId)=>fetch(basUrl+'/'+postId).then(value => value.json())
export {getPost}