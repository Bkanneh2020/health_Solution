import React from "react";
import {Outlet, Link} from 'react-router-dom';
import Compname from "./Header";
import { AiOutlineMenu } from "react-icons/ai";


const Navmenu =()=>{
    
    
    
    
    return(
        
        <>
        <nav>
            <Compname />
            <AiOutlineMenu className="threebars" />
          
            <ul className="Navstyle">

                <li>
                    <Link to='/' style={{  textDecoration:'none'}}>Home</Link>
                </li>
                
                <li>
                    <Link to='/work'style={{  textDecoration:'none'}}>HealthCare</Link>
                </li>

                <li>
                    <Link to='/House' style={{  textDecoration:'none'}}>HHealthcare</Link>
                </li>


                <li>
                    <Link to='/Contact' style={{  textDecoration:'none'}}>Contact</Link>
                </li>

               
            </ul>
       
        </nav>
        <Outlet />
        </>
    )
}


export default Navmenu;