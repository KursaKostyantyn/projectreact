import {useEffect, useState} from "react";

import {getUsers} from "../../services/users.api.service";
import {User} from "../index";

function Users({showPosts}){
    const [users, setUsers]= useState([])
    useEffect(()=>{
        getUsers().then(({data})=> setUsers([...data]))
    },[])
    return (
        <div>
            {users.map(user=><User
                key={user.id}
                user={user}
                showPosts={showPosts}
            />)}


        </div>
    )
}
export default Users