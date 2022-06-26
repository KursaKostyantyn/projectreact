
function UserDetails({user}){
    return(
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
            <p>{user.address.suite}</p>
            <p>{user.address.city}</p>
            <p>{user.address.zipcode}</p>
            <p>{user.address.geo.lat}</p>
            <p>{user.address.geo.lng}</p>
        </div>
    )
}

export {UserDetails}