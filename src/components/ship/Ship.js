
function Ship({ship: {mission_name, launch_year, links: {
    mission_patch_small
}
}
}){
    return (
        <div>
            <h2>{mission_name}</h2>
            <p>{launch_year}</p>
            <img src={mission_patch_small} alt={mission_name}/>

        </div>
    )
}

export {Ship}