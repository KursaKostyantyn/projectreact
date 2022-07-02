import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

import {createUser, getUsers} from "../../services";
import {User} from "../index";


function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        getUsers.then(({data}) => setUsers(data))
    }, [])
    const {register, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            name: 'name',
            username: 'username',
            email: 'example@example.com'
        }
    })

    const submit = (obj) => {
        createUser(obj).then(({data}) => console.log(data))
    }



    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text' {...register('name', {required: true})}/>
                {errors.name && <span>field is required</span>}
                <input type='text' {...register('username', )}/>
                <input type='email' {...register('email', )}/>
                <button>save</button>
            </form>

            {users.map(user => <User key={user.id} user={user}/>)}}


        </div>
    )
}

export default Users;