import React from "react";
import{Link} from 'react-router-dom';




const SeconDropMenu =()=>{
    return(
       
    <div style={{display:'flex'}} className='SecondDropLinks'>
            <ul>
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