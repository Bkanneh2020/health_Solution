import React from "react";
import { useMediaQuery } from "react-responsive";
import{Link} from 'react-router-dom';

const SecondSmall =()=>{

const SecondSmallLiks = useMediaQuery({
    query: '(max-width: 768px)'
})


    return(
        <div>
            {SecondSmallLiks && (
                 <ul className="homehealthstyle">
                 <li>
                   <Link to="" style={{ textDecoration: "none" }}>
                     Health Evaultion
                   </Link>
                 </li>
                 <li>
                   <Link to="" style={{ textDecoration: "none" }}>
                     Cleaing
                   </Link>
                 </li>
                 <li>
                   <Link to="" style={{ textDecoration: "none" }}>
                     Cooking
                   </Link>
                 </li>
                 <li>
                   <Link to="" style={{ textDecoration: "none" }}>
                     Peace of Mind
                   </Link>
                 </li>
                 <li>
                   <Link to="" style={{ textDecoration: "none" }}>
                     Exercise
                   </Link>
                 </li>
               </ul>

            )}

        </div>
    )
}

export default SecondSmall;