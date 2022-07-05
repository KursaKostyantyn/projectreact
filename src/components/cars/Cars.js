import {useEffect, useState} from "react";

import {carService} from "../../services/index";
import {Car} from "../car/Car";
import {CarForm} from "../carForm/CarForm";

function Cars() {
    const [cars, setCars] = useState([]);
    const [carForUpdate, setCarForUpdate] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, []);



    const addCar = (car) => {
        setCars([...cars, car])
    }

    const deleteCar = async (id) => {
        await carService.deleteById(id);
        const res = [...cars]
        const index = res.findIndex(value => value.id === id);
        if (index !== -1) {
            res.splice(index, 1)
            setCars(res)
        }
    }

    const updateCar =(car)=>{
        const res=[...cars];
        const find=res.find(value => value.id===carForUpdate.id);
        Object.assign(find,car);
        setCars(res);
        setCarForUpdate(null);

    }


    return (
        <div>
            <CarForm addCar={addCar} carForUpdate={carForUpdate} updateCar={updateCar}/>
            <hr/>
            {cars.map(car => <Car car={car} key={car.id} deleteCar={deleteCar} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    )
}

export {Cars}