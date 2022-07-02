const baseUrl = 'https://jsonplaceholder.typicode.com/comments';

const getComments = () => {
    return fetch(baseUrl).then(response => response.json())
}

const createComment = (obj) => {
    return fetch(baseUrl, {
        method: 'post',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(respone => respone.json())
}

export {getComments, createComment}