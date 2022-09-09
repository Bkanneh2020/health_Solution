import React from "react";
import{Link} from 'react-router-dom';




const FirstDropMenu =()=>{
  
    const linkclass={
        textDecoration:'none',
        listStyle:'none',
        padding:'4px'
        
        
    }

    return(
       
    <div className='firstDropLinks' style={{position: 'absolute', backgroundColor:'#F9F9F9', paddingTop:'5px', borderRadius:'5px'}}>
            <ul className="firstDropLinks" style={{paddingLeft:'0'}}>
                <li>
                    <Link style={linkclass}  to='Nursing'>Cooking</Link>
                </li>
                <li>
                    <Link style={linkclass}  to='Therapy'>Cleaning</Link>
                </li>
                <li>
                    <Link style={linkclass}  to='Minfulness'>Health Evaluation</Link>
                </li>
                <li>
                    <Link style={linkclass} to='Peace of Mind'>Peace of Mind</Link>
                </li>
                <li>
                    <Link style={linkclass}  to='Exercise'>Exercise</Link>
                </li>
            </ul>
        </div>
    
    )
}

export default FirstDropMenu;