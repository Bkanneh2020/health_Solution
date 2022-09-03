import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const SmallScreen = () => {
  const WhenSmaller = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div style={{ backgroundColor: "#73777B", marginLeft:'-25px' }}>
      {WhenSmaller && (
        <ul>
          <li style={{listStyle:'none', fontSize:'.9rem'}}>
            <Link to="" style={{ textDecoration: "none", color:'#fff', marginLeft:'-13px'}}>
              Nuring
            </Link>
          </li>
          <li style={{listStyle:'none', fontSize:'.9rem'}}>
            <Link to="" style={{ textDecoration: "none", color:'#fff', marginLeft:'-13px' }}>
              Therapy
            </Link>
          </li>
          <li style={{listStyle:'none', fontSize:'.9rem'}}>
            <Link to="" style={{ textDecoration: "none", color:'#fff', marginLeft:'-13px' }}>
              Mindfulness
            </Link>
          </li>
          <li style={{listStyle:'none', fontSize:'.9rem'}}>
            <Link to="" style={{ textDecoration: "none", color:'#fff', marginLeft:'-13px' }}>
              Peace of Mind
            </Link>
          </li>
          <li style={{listStyle:'none', fontSize:'.9rem'}}>
            <Link to="" style={{ textDecoration: "none", color:'#fff', marginLeft:'-13px' }}>
              Exercise
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default SmallScreen;
