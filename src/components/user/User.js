
function User({user, showPosts}) {
const onclick= ()=>{
    showPosts(user.id)
}
    return (
        <div>
            <h2>{user.id}: {user.name}</h2>
            <button onClick={onclick}>Show posts</button>
        </div>
    )
}

export default User