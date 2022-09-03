import React from "react";
import { useMediaQuery } from "react-responsive";
import{AiOutlineMedicineBox} from 'react-icons/ai';

const Compname =()=>{
    const headingForSmall= useMediaQuery({
        query:'(max-width: 768px)'
    })

    const headingForBig= useMediaQuery({
        query:'(min-width: 768px)'
    })
    return(
        <div className="compnamestyle">
            {headingForBig && (
            <h3 style={{color:'#fff', fontSize:'1.4rem'}}>
                Fame Health Solutions <span style={{color:'#fff', fontSize:'1.3rem', backgroundColor: '#3B9AE1'}}><AiOutlineMedicineBox /></span>
            </h3>

            )}

            {headingForSmall && (
                <div style={{marginTop:'-20px', backgroundColor:'black', color:'#fff', marginLeft:'-5px', paddingRight:'60px'}}>
                <h3>
                <span style={{marginTop:'3px', color:'#fff', fontSize:'1.3rem', backgroundColor: '#3B9AE1'}}><AiOutlineMedicineBox /></span>Fame Health Solutions 
                </h3>
                </div>
            )}
        </div>
    )
}

export default Compname;