import React from "react";
import { useState } from "react";
import {Outlet, Link} from 'react-router-dom';
import Compname from "./Header";
import { AiOutlineMenu, AiOutlineDown } from "react-icons/ai";


const Navmenu =()=>{
    const [isDisplay, SetIsDisplay]= useState(false);

    const handleClick = event =>{
        SetIsDisplay(current => !current);
    }

    const [isShown, SetIsShown]= useState(false);

    const whenClick = event =>{
        SetIsShown(current => !current);
    }

    const [menuDisplay, setmenuDisplay]= useState(false);

    const afterClick = event =>{
        setmenuDisplay(current => !current);
    }

    

    

    return(
        
        <>
        <nav>
            <Compname />
            <AiOutlineMenu className="threebars" onClick={afterClick}/>
            {menuDisplay && (
          
            <ul className="Navstyle">

                <li>
                    <Link to='/' style={{  textDecoration:'none', color:'black'}} className='homestyle'>Home</Link>
                </li>
                
                <li className="healthlist">
                    <Link to='/work'style={{  textDecoration:'none', color:'black'}} 
                   className='healthlist'
                    >HealthCare <AiOutlineDown className="arrowdown" onClick={handleClick} /> </Link>

                    {isDisplay &&(
                    <ul className="healthstyle" >
                        <li>
                            <Link to='' style={{  textDecoration:'none'}}>
                            Nuring
                            </Link>
                        </li>
                        <li>
                            <Link to='' style={{  textDecoration:'none'}}>
                            Therapy
                            </Link>
                        </li>
                        <li>
                            <Link to='' style={{  textDecoration:'none'}}>
                            Mindfulness
                            </Link>
                        </li>
                        <li>
                            <Link to='' style={{  textDecoration:'none'}}>
                            Peace of Mind
                            </Link>
                        </li>
                        <li>
                            <Link to='' style={{  textDecoration:'none'}}>
                            Exercise
                            </Link>
                        </li>

                    </ul>)}
                </li>

                <li className="homehealthlist">
                    <Link to='/House' style={{  textDecoration:'none', color:'black'}} className="homehealthlist">HHealthcare <AiOutlineDown  className="arrowdown" onClick={whenClick}/> </Link>
                   {isShown && (
                   
                   <ul className="homehealthstyle">
                        <li>
                            <Link to='' style={{  textDecoration:'none'}}>
                            Health Evaultion
                            </Link>
                        </li>
                        <li>
                            <Link to='' style={{  textDecoration:'none'}}>
                            Cleaing
                            </Link>
                        </li>
                        <li>
                            <Link to='' style={{  textDecoration:'none'}}>
                           Cooking
                           </Link>
                        </li>
                        <li>
                            <Link to='' style={{  textDecoration:'none'}}>
                            Peace of Mind
                            </Link>
                        </li>
                        <li>
                            <Link to ='' style={{  textDecoration:'none'}}>
                            Exercise
                            </Link>
                        </li>

                    </ul>
                   )}

                </li>


                <li className="contactstyle">
                    <Link to='/Contact' style={{  textDecoration:'none', color:'black'}} className='contactstyle'>Contact</Link>
                </li>

               
            </ul>
            )}
       
        </nav>
        <Outlet />
        </>
    )
}


export default Navmenu;