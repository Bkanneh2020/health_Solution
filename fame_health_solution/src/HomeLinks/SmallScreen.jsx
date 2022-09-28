import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const SmallScreen = () => {
  const WhenSmaller = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div style={{ marginLeft:'-25px'}}>
      {WhenSmaller && (
        <ul>
          <li style={{listStyle:'none', fontSize:'.7rem'}}>
            <Link to="HealthcarePage" style={{ textDecoration: "none", color:'#FD841F'}}>
             Healthcare
            </Link>
          </li>
          <li style={{listStyle:'none', fontSize:'.7rem'}}>
            <Link to="HomeHealthPage" style={{ textDecoration: "none", color:'#FD841F'}}>
              Home Healthcare
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SmallScreen;
