import React from "react";
import {Outlet, Link} from 'react-router-dom';

const Navmenu =()=>{
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/work'>Work</Link>
                </li>

                <li>
                    <Link to='/House'>House</Link>
                </li>

                <li>
                    <Link to='/school'>School</Link>
                </li>

                <li>
                    <Link to='/plane'>Plane</Link>
                </li>

                <li>
                    <Link to='/car'>Contact</Link>
                </li>

                <li>
                    <Link to='/mall'>Mall</Link>
                </li>

            </ul>
        </nav>
        <Outlet />
        </>
    )
}


export default Navmenu;