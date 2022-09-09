import React from "react";
import{Link} from 'react-router-dom';




const SeconDropMenu =()=>{
    const listclass ={
        backgroundColor:'#F9F9F9',
        paddingTop:'5px', 
        paddingLeft:'0',
        paddingRight:'5px',
        borderRadius:'5px'
    }
    const linkclass={
        textDecoration:'none',
        listStyle:'none',
        
    }
    const secondDiv={
     position:'absolute', 
  
    }


    return(
       
    <div className='SecondDropLinks' style={secondDiv}>
            <ul className="SecondDropLinks" style={listclass}>
                <li>
                    <Link style={linkclass}  to='Nursing'>Nursing</Link>
                </li>
                <li>
                    <Link style={linkclass}  to='Therapy'>Therapy is session</Link>
                </li>
                <li>
                    <Link style={linkclass}  to='Minfulness'>Mindfulness</Link>
                </li>
                <li>
                    <Link style={linkclass}  to='Peace of Mind'>Peace within</Link>
                </li>
                <li>
                    <Link style={linkclass}  to='Exercise'>Exercise</Link>
                </li>
            </ul>
        </div>
    
    )
}

export default SeconDropMenu;