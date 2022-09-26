import React from "react";
import { useMediaQuery } from "react-responsive";
import { AiOutlineMedicineBox } from "react-icons/ai";

const Compname = () => {
  const headingForSmall = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const headingForBig = useMediaQuery({
    query: "(min-width: 768px)",
  });
  return (
    <div className="compnamestyle">
      {headingForBig && (
        <h3
          style={{
            color: "#fff",
            fontSize: "1.4rem",
            display: "inline",
            paddingLeft: "2px",
          }}
        >
          Fame Health Solutions{" "}
          <button
            style={{
              borderRadius: "50%",
              backgroundColor: "#3B9AE1",
              padding: "5px",
              border:'none'
            }}
          >
            <span style={{ color: "#fff", fontSize: "1.5rem" }}>
              <AiOutlineMedicineBox />
            </span>
          </button>
        </h3>
      )}

      {headingForSmall && (
        <div
          style={{
            marginTop: "-20px",
            backgroundColor: "black",
            color: "#fff",
            marginLeft: "-5px",
            paddingRight: "80px",
          }}
        >
          <h3>
            <button style={{ borderRadius: "50%", backgroundColor: "#3B9AE1" }}>
              <span
                style={{ marginTop: "3px", color: "#fff", fontSize: "1.3rem" }}
              >
                <AiOutlineMedicineBox />
              </span>
            </button>{" "}
            Fame Health Solutions
          </h3>
        </div>
      )}
    </div>
  );
};

export default Compname;
