import {useForm} from "react-hook-form";
import {useEffect} from "react";

import {carService} from "../../services";



function CarForm({addCar,carForUpdate,updateCar}) {
    const {register, handleSubmit,reset,setValue, formState: {errors}} = useForm({mode:'all'})
    const submit= async (newCar)=>{
        if (!carForUpdate){
            const {data} = await carService.create(newCar);
            addCar(data);
            reset();
        } else {
            const {data}= await carService.updateById(carForUpdate.id, newCar);
            updateCar(data);
        }



    }

    useEffect(()=>{
        if (carForUpdate){
            setValue('model', carForUpdate.model)
            setValue('year', carForUpdate.year)
            setValue('price', carForUpdate.price)
        }
    },[carForUpdate])

    return (

        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={'text'} placeholder={'model'} {...register('model',{
                    required:true,
                    pattern: new RegExp(/^[a-zA-ZА-яіІїЇҐґёЁєЄ]{1,20}$/)
                })}/>
                <input type='number' placeholder={'year'} {...register('year', {
                    valueAsNumber:true,
                    required:true,
                    min: 1990,
                    max: new Date().getFullYear()
                })}/>
                <input type='number' placeholder={'price'} {...register('price', {
                    valueAsNumber:true,
                    required:true,
                    min: 0,
                    max: 1000000
                })}/>
                <button>{carForUpdate ? 'Edit': 'Save'}</button>
            </form>
            <div>
                {errors.model && <span>only ALPHA 1-20</span>}
                {errors.price && <span>min 0 max 1 000 000</span>}
                {errors.year && <span>min 1990 max current year</span>}
            </div>
        </div>
    )
}

export {CarForm}