import React from "react";
import { useMediaQuery } from "react-responsive";

const Compname =()=>{
    const headingForSmall= useMediaQuery({
        query:'(max-width: 768px)'
    })

    return(
        <div className="compnamestyle">
            <h3>
                Fame Health Solutions
            </h3>

            {headingForSmall && (
                <div style={{marginTop:'-10px'}}>
                <h3>
                Fame Health Solutions 
                </h3>
                </div>
            )}
        </div>
    )
}

export default Compname;