import React from "react";
import { useMediaQuery } from "react-responsive";
import{Link} from 'react-router-dom';

const SecondSmall =()=>{

const SecondSmallLiks = useMediaQuery({
    query: '(max-width: 768px)'
})


    return(
        <div style={{ backgroundColor: "#73777B", marginLeft:'-25px' }}>
            {SecondSmallLiks && (
                 <ul className="homehealthstyle">
                 <li style={{listStyle:'none', fontSize:'.9rem'}}>
                   <Link to="" style={{ textDecoration: "none", color:'#fff', marginLeft:'-13px' }}>
                     Health Evaultion
                   </Link>
                 </li>
                 <li style={{listStyle:'none', fontSize:'.9rem'}}>
                   <Link to="" style={{ textDecoration: "none", color:'#fff', marginLeft:'-13px' }}>
                     Cleaing
                   </Link>
                 </li>
                 <li style={{listStyle:'none', fontSize:'.9rem'}}>
                   <Link to="" style={{ textDecoration: "none", color:'#fff', marginLeft:'-13px' }}>
                     Cooking
                   </Link>
                 </li>
                 <li style={{listStyle:'none', fontSize:'.9rem'}}>
                   <Link to="" style={{ textDecoration: "none", color:'#fff', marginLeft:'-13px' }}>
                     Peace of Mind
                   </Link>
                 </li>
                 <li style={{listStyle:'none', fontSize:'.9rem'}}>
                   <Link to="" style={{ textDecoration: "none", color:'#fff', marginLeft:'-13px' }}>
                     Exercise
                   </Link>
                 </li>
               </ul>

            )}

        </div>
    )
}

export default SecondSmall;