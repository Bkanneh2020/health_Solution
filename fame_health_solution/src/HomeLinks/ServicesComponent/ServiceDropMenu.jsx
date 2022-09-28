import React from "react";
import { Link } from "react-router-dom";

const ServiceDropMenu = () => {
  const linkclass = {
    textDecoration: "none",
    listStyle: "none",
    padding: "4px",
    color: "#181818",
  };

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "#F9F9F9",
        paddingTop: "5px",
        borderRadius: "5px",
      }}
    >
      <ul className="firstDropLinks" style={{ paddingLeft: "0" }}>
        <li className="linkclass">
          <Link to="/HealthcarePage" style={linkclass}>
            HealthCare
          </Link>
        </li>
        <li className="linkclass">
          <Link to="/HomeHealthPage" style={linkclass}>
            Home HealthCare
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ServiceDropMenu;
