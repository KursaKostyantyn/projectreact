import './Character.css'


function Character(props){
    const {id,name,status,species,gender,image} =props

    return (
        <div className='characterWrap'>
            <div className='photo'>
                <img src={image} alt={name}/>
            </div>
            <div className='description'>
                <h2>{id}: {name}</h2>
                <p>Status: {status}</p>
                <p>Species: {species}</p>
                <p>Gender: {gender}</p>
            </div>
        </div>
    )
}






export default Character
