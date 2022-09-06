import React from "react";
import{Link} from 'react-router-dom';




const SeconDropMenu =()=>{
    const listclass ={
        textDecoration:'none',
        listStyle:'none', 
        display: 'flex',
        position:'absolute'
    }
    return(
       
    <div className='SecondDropLinks'>
            <ul className="SecondDropLinks" style={listclass}>
                <li>
                    <Link to='Nursing'>Nursing</Link>
                </li>
                <li>
                    <Link to='Therapy'>Therapy</Link>
                </li>
                <li>
                    <Link to='Minfulness'>Mindfulness</Link>
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

export default SeconDropMenu;