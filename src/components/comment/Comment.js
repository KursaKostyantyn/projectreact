function Comment({comment}) {

    return (
        <div>

            <h2>{comment.id}: {comment.body}</h2>

        </div>
    )

}

export default Comment;