import {Link, Outlet} from "react-router-dom";

export function MainLayout(){
    return(
        <div>
            <h2>submenu</h2>
            <ul>
                <li><Link to={'todos'}>todos</Link></li>
                <li><Link to={'albums'}>albums</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
            </ul>
            <Outlet/>
        </div>
    )
}