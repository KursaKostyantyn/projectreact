import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

import {createComment, getComments} from "../../services";
import {Comment} from "../index";


function Comments() {
    const [comments, setComments] = useState([])
    useEffect(() => {
        getComments().then(value => setComments(value))
    }, [])

    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            body: 'body',
            name: 'name',
            email: 'example@gmail.com'
        }
    })

    const submit = (obj) => {
        createComment(obj).then(value => console.log(value))
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register('body', {required: true})}/>
                {errors.body && <span>field is required</span>}
                <input type='text'{...register('name', {required: true})}/>
                {errors.name && <span>field is require</span>}
                <input type='email' {...register('email', {required: true})}/>
                {errors.email && <span>field is required</span>}
                <input type='submit'/>
            </form>


            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}

        </div>
    )
}

export default Comments;