import React from "react";
import{Link} from 'react-router-dom';




const SeconDropMenu =()=>{
    return(
       
    <div style={{display:'flex'}}>
            <ul>
                <li>
                    <Link to='Nursing'></Link>
                </li>
                <li>
                    <Link to='Therapy'></Link>
                </li>
                <li>
                    <Link to='Minfulness'></Link>
                </li>
                <li>
                    <Link to='Peace of Mind'></Link>
                </li>
                <li>
                    <Link to='Exercise'></Link>
                </li>
            </ul>
        </div>
    
    )
}

export default SeconDropMenu;