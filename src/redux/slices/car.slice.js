import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null,
    errors: null
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id, car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.updateById(id, car);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    }
);

const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({car}, {rejectWithValue}) => {
        try {
            const {data} = await carService.createCar(car);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    }
)

const deleteCar = createAsyncThunk(
    'carSlice/deleteCar',
    async ({id}, {rejectWithValue}) => {
        try {
            await carService.deleteById(id);
            return id
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;

        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.errors = null;
                state.cars = action.payload;
            })
            .addCase(updateById.fulfilled, (state, actions) => {
                const currentCar = state.cars.find(value => value.id === actions.payload.id);
                Object.assign(currentCar, actions.payload);
                state.carForUpdate = null;
                state.errors = null;
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.errors = null
                state.cars.push(action.payload)
            })
            .addCase(deleteCar.fulfilled, (state, action) => {
                state.errors = null;
                const index = state.cars.findIndex(car => car.id === action.payload)
                state.cars.splice(index, 1);
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').slice(-1);
                if (type === 'rejected') {
                    state.errors = action.payload;
                } else {
                    state.errors = null
                }
            })
    }
});

const {reducer: carReducer, actions: {setCarForUpdate}} = carSlice;

const carActions = {
    getAll,
    setCarForUpdate,
    updateById,
    createCar,
    deleteCar
};

export {
    carReducer,
    carActions
}