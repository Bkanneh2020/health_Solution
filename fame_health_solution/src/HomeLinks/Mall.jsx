import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import SmallScreen from "./SmallScreen";
import { AiOutlineDown } from "react-icons/ai";

const SmallLinks = () => {
  const SmallerLinks = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [isDisplay, SetIsDisplay] = useState(false);

  const handleClick = (event) => {
    SetIsDisplay((current) => !current);
  };

  return (
    <div style={{ padding: "30px", left: "0" }}>
      {SmallerLinks && (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Work">HealthCare</Link>
            <AiOutlineDown className="arrowdown" onClick={handleClick} />
            {isDisplay && <SmallScreen />}
          </li>
          <li>
            <Link to="/House">HHealthCare</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Help">Help</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SmallLinks;
