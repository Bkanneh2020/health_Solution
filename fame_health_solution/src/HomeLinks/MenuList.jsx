import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import SmallScreen from "./SmallScreen";
import { AiOutlineDown } from "react-icons/ai";
import SecondSmall from "./SecondSmall";


const SmallLinks = () => {
  const SmallerLinks = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [isDisplay, SetIsDisplay] = useState(false);

  const handleClick = (event) => {
    SetIsDisplay((current) => !current);
  };

  const [DisplaySecond, setDisplaySecond]= useState(false);

  const eventClick =()=>{
    setDisplaySecond((current)=> !current)
  }
  const listmenu={
    listStyle:'none',
    marginTop: '-5px'
  
  }

  return (
    <div style={{ marginLeft:'-15px', marginTop:'-22px', paddingTop:'20px', backgroundColor:'black'}}>
      {SmallerLinks && (
        <ul style={listmenu}>
          <li>
            <Link to="/" style={{textDecoration:'none', color:'#fff'}}>Home</Link>
          </li>
          <li>
            <Link to="/Work" style={{textDecoration:'none', color:'#fff'}}>HealthCare</Link>
            <AiOutlineDown className="arrowdown" style={{color:'#fff'}} onClick={handleClick}/>
            {isDisplay && <SmallScreen />}
          </li>
          <li>
            <Link to="/House" style={{textDecoration:'none', color:'#fff'}}>HHealthCare</Link>
            <AiOutlineDown className="arrowdown" style={{color:'#fff'}} onClick={eventClick} />
            {DisplaySecond && <SecondSmall />}
          </li>
          <li>
            <Link to="/Contact" style={{textDecoration:'none', color:'#fff'}}>Contact</Link>
          </li>
          <li>
            <Link to="/Help" style={{textDecoration:'none', color:'#fff'}}>Help</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SmallLinks;
