import React from "react";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Compname from "./Header";
import { AiOutlineMenu, AiOutlineDown } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import SmallLinks from "./Mall";

const Navmenu = () => {
  const [isShown, SetIsShown] = useState(false);

  const whenClick = (event) => {
    SetIsShown((current) => !current);
  };

  const [menuDisplay, setmenuDisplay] = useState(false);

  const afterClick = (event) => {
    setmenuDisplay((current) => !current);
  };

  return (
    <>
      <nav>
        <Compname />
        <AiOutlineMenu className="threebars" onClick={afterClick} />
        {menuDisplay && <SmallLinks />}

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
              <AiOutlineDown className="arrowdown" onClick={whenClick} />

              {isShown && (
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
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navmenu;
