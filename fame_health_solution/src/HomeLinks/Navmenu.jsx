import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Compname from "./Header";
import { AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import SmallLinks from "./MenuList";
import SeconDropMenu from "./SecondDropMenu";
import FirstDropMenu from "./FirstDropMenu";

const Navmenu = () => {
 

  const [menuDisplay, setmenuDisplay] = useState(false);

  const afterClick = (event) => {
    setmenuDisplay((current) => !current);
  };

  const onBigScreen = useMediaQuery({
    query: '(min-width:768px)'
  });

   const [WhenHovering, setWhenHovering] = useState(false);

  const handlehovering =()=>{
    setWhenHovering(true)
  } 

  const mouseout =()=>{
    setWhenHovering(false)
  }
  const [HoveringTime, setHoveringTime] = useState(false);

  const mousehover =()=>{
    setHoveringTime(true)
  }

  const nomousehover =()=>{
    setHoveringTime(false)
  }
  return (
    <>
      <nav>
        <Compname />
        <AiOutlineMenu className="threebars" onClick={afterClick} />
        {menuDisplay && <SmallLinks />}
       {onBigScreen && ( 

        <div className="navmenu" style={{marginTop:'-40px'}}>
          <ul className="Navstyle">
            <li>
              <Link
                to="/"
                style={{ textDecoration: "none", color: "black", padding: "5px",
                fontSize: "1.2rem" }}
              >
                Home
              </Link>
            </li>

            <li className="healthlist">
              <Link
                to="/HealthcarePage"
                style={{ textDecoration: "none", color: "black",  padding: "5px",
                fontSize: "1.2rem" }} className="healthlist"  onMouseOver={handlehovering} onMouseOut={mouseout}>
              
                HealthCare{" "}
               {WhenHovering && <SeconDropMenu />} 

              </Link> 
              
            </li>

            <li className="homelist">
              <Link
                to="/HomeHealthPage"
                style={{ textDecoration: "none", color: "black", padding: "5px",
                fontSize: "1.2rem"}} className='homelist' onMouseOver={mousehover} onMouseOut={nomousehover}
              >
                HHealthcare
                {HoveringTime && <FirstDropMenu />}
              </Link>
            </li>

            <li>
              <Link
                to="/Contact"
                style={{ textDecoration: "none", color: "black", padding: "5px",
                fontSize: "1.2rem" }}
                
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/Help"
                style={{ textDecoration: "none", color: "black", padding: "5px",
                fontSize: "1.2rem" }}
              
              >
                Help
              </Link>
            </li>

          </ul>
        </div>
       )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navmenu;
