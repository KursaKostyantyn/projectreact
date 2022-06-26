import {useEffect, useState} from "react";
import {User} from "../user/User";
import {UserDetails} from "../userDetails/UserDetails";

function Users(){
    let[users, setUsers]=useState([])
    let [user, setUser] = useState(null)
    console.log(user);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setUsers(value))
    },[])

 const chosenUser=(item)=>{
     console.log(item);
     setUser(item)
    }


    return(
        <div>
            <div>{user && <UserDetails user={user}/>}</div>

            {users.map((user, index)=><User
                key={index}
                item={user}
                chosenUser ={chosenUser}
            />)}

        </div>
    )
}

export {Users}