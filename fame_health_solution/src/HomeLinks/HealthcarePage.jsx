import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import HomeMaker from "../Healthinfo/Homemaker";
import Iclspage from "../Healthinfo/Iclspage";
import InsPage from "../Healthinfo/InsPage";
import NightsupPage from "../Healthinfo/NightsupPage";
import PersonalSupPage from "../Healthinfo/PersonalSupPage";
import SilsPage from "../Healthinfo/SilsPage";

const Work = () => {
  const listyle = {
    padding: "8px",
    margin: "5px",
    fontSize: "1.2em",
  };

  return (
    <div style={{ backgroundImage: "url(/Images/clockbg.jpg)" }}>
      <div className="pageheading">
        <h1>Your Healthcare Solutions</h1>
      </div>
      <div className="homehealth">
        <ul style={{ listStyle: "none" }}>
          <li style={listyle}>
            <Link
              to="#Homeread"
              smooth
              style={{ textDecoration: "none", color: "#fff" }}
              className="listyle"
            >
              Home Maker
            </Link>
          </li>
          <li style={listyle}>
            <Link
              to="#iclsread"
              smooth
              style={{ textDecoration: "none", color: "#fff" }}
              className="listyle"
            >
              Individual Community Living Support
            </Link>
          </li>
          <li style={listyle}>
            <Link
              to="#insread"
              smooth
              style={{ textDecoration: "none", color: "#fff" }}
              className="listyle"
            >
              {" "}
              Individual Home Support
            </Link>
          </li>
          <li style={listyle}>
            <Link
              to="#nightsupread"
              smooth
              style={{ textDecoration: "none", color: "#fff" }}
              className="listyle"
            >
              Night Supervision
            </Link>
          </li>
          <li style={listyle}>
            <Link
              to="#personalsupread"
              smooth
              style={{ textDecoration: "none", color: "#fff" }}
              className="listyle"
            >
              {" "}
              Personal Support
            </Link>
          </li>
          <li style={listyle}>
            <Link
              to="#silsread"
              smooth
              style={{ textDecoration: "none", color: "#fff" }}
              className="listyle"
            >
              {" "}
              Support Individual Linving Standard
            </Link>
          </li>
        </ul>
      </div>
      <HomeMaker />
      <Iclspage />
      <InsPage />
      <NightsupPage />
      <PersonalSupPage />
      <SilsPage />
    </div>
  );
};

export default Work;
