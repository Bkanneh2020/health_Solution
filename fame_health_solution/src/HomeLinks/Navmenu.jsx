import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Compname from "./Header";
import { AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import SmallLinks from "./MenuList";

const Navmenu = () => {
 

  const [menuDisplay, setmenuDisplay] = useState(false);

  const afterClick = (event) => {
    setmenuDisplay((current) => !current);
  };

  const onBigScreen = useMediaQuery({
    query: '(min-width:768px)'
  });

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
                style={{ textDecoration: "none", color: "black" }}
                className="homestyle"
              >
                Home
              </Link>
            </li>

            <li className="healthlist">
              <Link
                to="/work"
                style={{ textDecoration: "none", color: "black" }}
                className="healthlist"
              >
                HealthCare{" "}
              </Link> 
            </li>

            <li className="homehealthlist">
              <Link
                to="/House"
                style={{ textDecoration: "none", color: "black" }}
                className="homehealthlist"
              >
                HHealthcare
              </Link>
            </li>

            <li className="contactstyle">
              <Link
                to="/Contact"
                style={{ textDecoration: "none", color: "black" }}
                className="contactstyle"
              >
                Contact
              </Link>
            </li>

            <li className="help">
              <Link
                to="/Help"
                style={{ textDecoration: "none", color: "black" }}
              
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
