import React from "react";
import { useMediaQuery } from "react-responsive";

const Plane = () => {
  const whenBigger = useMediaQuery({
    query: "(min-width: 768px)",
  });

  const Whensmaller = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div>
      {whenBigger && <h1 style={{ color: "blue" }}>Plane Page</h1>}
      {Whensmaller && <h2 style={{ color: "red" }}>Hello plane page</h2>}
    </div>
  );
};

export default Plane;
