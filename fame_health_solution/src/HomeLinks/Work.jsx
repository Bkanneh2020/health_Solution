import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import HomeMaker from "../Healthinfo/Homemaker";

const Work = () => {
    const btnstyle={
        padding:'10px',
        margin:'5px'

    }
  return (
    <div>
      <div className="homehealth">
       <Link to='#Homeread'><button style={btnstyle}>Home Maker</button></Link>
        <button style={btnstyle}>ICLS</button>
        <button style={btnstyle}>IHS</button>
        <button style={btnstyle}>Night Supervision</button>
        <button style={btnstyle}>Personal Support</button>
        <button style={btnstyle}>SILS</button>
      </div>
      <HomeMaker/>
    </div>
  );
};

export default Work;
