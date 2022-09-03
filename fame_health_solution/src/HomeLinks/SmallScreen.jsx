import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const SmallScreen = () => {
  const WhenSmaller = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div style={{ backgroundColor: "yellow" }}>
      {WhenSmaller && (
        <ul>
          <li>
            <Link to="" style={{ textDecoration: "none" }}>
              Nuring
            </Link>
          </li>
          <li>
            <Link to="" style={{ textDecoration: "none" }}>
              Therapy
            </Link>
          </li>
          <li>
            <Link to="" style={{ textDecoration: "none" }}>
              Mindfulness
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
    </div>
  );
};

export default SmallScreen;
