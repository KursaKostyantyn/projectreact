import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {getAllComments} from "../../services";
import CommentComponent from "./CommentComponent";

export default function CommentsComponent(){
    const[comments, setComments]=useState([])
    useEffect(()=> {
        getAllComments.then(({data}) => setComments([...data]))
    },[])

    return(
        <div>
            <Outlet/>
            {comments.map((comment, index)=> <CommentComponent comment={comment} key={index}/>)}
        </div>
    )
}