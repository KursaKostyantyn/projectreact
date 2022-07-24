import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux";

const CarForm = () => {
    const {reset, register, handleSubmit, setValue} = useForm()
    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch()

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])

    const submit = async (data) => {
        if (carForUpdate) {
            await dispatch(carActions.updateById({id: carForUpdate.id, car: data}))
        } else {
            await dispatch(carActions.createCar({car: data}))
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model', {
                required: true,
                pattern: new RegExp(/^[a-zA-ZА-яіІїЇҐґёЁєЄ]{1,20}$/)
            })}/>
            <input type="number" placeholder={'price'} {...register('price', {
                valueAsNumber: true,
                required: true,
                min: 0,
                max: 1000000
            })}/>
            <input type="number" placeholder={'year'} {...register('year', {
                valueAsNumber: true,
                required: true,
                min: 1990,
                max: new Date().getFullYear()
            })}/>
            <button>{carForUpdate ? 'Update' : 'Create'}</button>
        </form>
    )
}

export {CarForm}