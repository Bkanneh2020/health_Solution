import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Compname from "./Header";
import { AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import SmallLinks from "./MenuList";
import SeconDropMenu from "./SecondDropMenu";

const Navmenu = () => {
 

  const [menuDisplay, setmenuDisplay] = useState(false);

  const afterClick = (event) => {
    setmenuDisplay((current) => !current);
  };

  const onBigScreen = useMediaQuery({
    query: '(min-width:768px)'
  });

  const [HoveringTime, setHoveringTime]=useState(false);

  const handleMouseTime =()=>{
    setHoveringTime(true)
  };


  return (
    <>
      <nav>
        <Compname />
        <AiOutlineMenu className="threebars" onClick={afterClick} />
        {menuDisplay && <SmallLinks />}
       {onBigScreen && ( 

        <div className="navmenu">
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

            <li onMouseOver={handleMouseTime}>
              <Link
                to="/work"
                style={{ textDecoration: "none", color: "black",  padding: "5px",
                fontSize: "1.2rem" }}
              >
                HealthCare{" "}
              </Link> 
              {HoveringTime && <SeconDropMenu />}
            </li>

            <li>
              <Link
                to="/House"
                style={{ textDecoration: "none", color: "black", padding: "5px",
                fontSize: "1.2rem"}}
              >
                HHealthcare
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
