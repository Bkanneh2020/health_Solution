import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import HomeMaker from "../Healthinfo/Homemaker";
import Iclspage from "../Healthinfo/Iclspage";
import InsPage from "../Healthinfo/InsPage";
import NightsupPage from "../Healthinfo/NightsupPage";
import PersonalSupPage from "../Healthinfo/PersonalSupPage";
import SilsPage from "../Healthinfo/SilsPage";

const Work = () => {
  const btnstyle = {
    padding: "10px",
    margin: "5px",
  };
  return (
    <div>
      <div className="homehealth">
        <Link to="#Homeread" smooth>
          <button style={btnstyle}>Home Maker</button>
        </Link>
        <Link to="#iclsread" smooth>
          <button style={btnstyle}>ICLS</button>
        </Link>
        <Link to="#insread" smooth>
          {" "}
          <button style={btnstyle}>IHS</button>
        </Link>
        <Link to="#nightsupread" smooth>
          <button style={btnstyle}>Night Supervision</button>
        </Link>
        <Link to="#personalsupread" smooth>
          {" "}
          <button style={btnstyle}>Personal Support</button>
        </Link>
        <Link to="#silsread" smooth>
          {" "}
          <button style={btnstyle}>SILS</button>
        </Link>
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
