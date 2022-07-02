import {Post} from "../index";

function Posts({posts}){


    return(
        <div>

            {posts.map((post, index)=> <Post post={post} key={index}/>)}

        </div>
    )
}

export default Posts