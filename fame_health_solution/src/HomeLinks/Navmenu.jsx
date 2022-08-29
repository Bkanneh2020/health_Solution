import React from "react";
import {Outlet, Link} from 'react-router-dom';
import Compname from "./Header";


const Navmenu =()=>{
    
    
    
    
    return(
        
        <>
        <nav>
          
            <ul className="Navstyle">

                <li>
                <Compname />
                </li>
                <li>
                    <Link to='/' style={{  textDecoration:'none'}}>Home</Link>
                </li>
                
                <li>
                    <Link to='/work'style={{  textDecoration:'none'}}>Work</Link>
                </li>

                <li>
                    <Link to='/House' style={{  textDecoration:'none'}}>House</Link>
                </li>

                <li>
                    <Link to='/school' style={{  textDecoration:'none'}}>School</Link>
                </li>

                <li>
                    <Link to='/plane' style={{  textDecoration:'none'}}>Plane</Link>
                </li>

                <li>
                    <Link to='/Contact' style={{  textDecoration:'none'}}>Contact</Link>
                </li>

                <li>
                    <Link to='/mall' style={{  textDecoration:'none'}}>Mall</Link>
                </li>

            </ul>
       
        </nav>
        <Outlet />
        </>
    )
}


export default Navmenu;