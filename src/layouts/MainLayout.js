import {Outlet} from 'react-router-dom'
import {useSelector} from "react-redux";

import {CarForm, Header} from "../components";


const MainLayout = () => {
    const {errors} = useSelector(state => state.auth)
    const isAuth = localStorage.getItem('access')

    return (
        <div>
            <Header/>
            {errors && <h3>{JSON.stringify(errors)}</h3>}
            {isAuth && <CarForm/>}
            <Outlet/>
        </div>
    )
}

export {MainLayout}