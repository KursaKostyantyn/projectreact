import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

import {getPost} from "../../services";


export default function CurrentPost() {
    const [post, setPost] = useState({})

    let {postId} = useParams()


    useEffect(() => {
        getPost(postId).then(value => setPost(value))
    }, [postId])


    return (
        <div>
            <h3>Post id: {post.id}</h3>
            <p>post title: {post.title}</p>
            <p>{post.body}</p>
        </div>
    )
}