function Character(props) {
    const {name, desc, photo} = props;
    return (
        <div className='character'>
            <h2>{name}</h2>
            <p>{desc}</p>
            <img src={photo} alt={name}/>
        </div>
    )
}


export default Character
