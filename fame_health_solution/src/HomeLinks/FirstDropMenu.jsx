import React from "react";
import{Link} from 'react-router-dom';




const FirstDropMenu =()=>{
    const listclass ={
        textDecoration:'none',
        listStyle:'none', 
        display: 'flex',
        position:'absolute'
    }
    return(
       
    <div className='SecondDropLinks'>
            <ul className="firstDropLinks" style={listclass}>
                <li>
                    <Link to='Nursing'>Cooking</Link>
                </li>
                <li>
                    <Link to='Therapy'>Cleaning</Link>
                </li>
                <li>
                    <Link to='Minfulness'>Health Evaluation</Link>
                </li>
                <li>
                    <Link to='Peace of Mind'>Peace of Mind</Link>
                </li>
                <li>
                    <Link to='Exercise'>Exercise</Link>
                </li>
            </ul>
        </div>
    
    )
}

export default FirstDropMenu;