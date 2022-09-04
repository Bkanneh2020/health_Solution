import React from "react";
import { useState } from "react";
import SeconDropMenu from "./SecondDropMenu";


const Help =()=>{
    const [SecondDrop, setSecondDrop]= useState(false);
    const handleclick =()=>{
        setSecondDrop((current)=> !current )
    }
    return(
        <div>
            <h2 style={{color:'yellow'}}>How may I help you?</h2>

            <button onMouseOver={handleclick}>Click Me</button>
            {SecondDrop && (
                <SeconDropMenu />
            )}
        </div>
    )
}

export default Help;