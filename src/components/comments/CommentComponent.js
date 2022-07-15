import {Link} from "react-router-dom";

export default function CommentComponent({comment}){
    return(
        <div>
            <h2>comment id:{comment.id}</h2>
            <p>body: {comment.body}</p>
            <p><Link to={'post/'+comment.postId}>go to the post</Link></p>
        </div>
    )
}