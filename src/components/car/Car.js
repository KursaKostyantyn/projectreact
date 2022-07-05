import css from './car.css'


function Car({car, deleteCar, setCarForUpdate}) {
    const {id, model, price, year} = car;


    return (
        <div className={css.wrap}>
            <div className={css.carModule}>
                <div>id:{id}</div>
                <div>model:{model}</div>
                <div>price:{price}</div>
                <div>year:{year}</div>
            </div>
            <div className={css.buttons}>
                <button onClick={()=>{setCarForUpdate(car)}}>edit</button>
                <button onClick ={() => deleteCar(id)}> delete </button>
            </div>

        </div>
    )
}

export {Car}