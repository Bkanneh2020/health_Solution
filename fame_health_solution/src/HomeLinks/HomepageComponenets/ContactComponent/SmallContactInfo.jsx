import React from "react";
import {IoLocation } from "react-icons/io5";


const SmallContactInfo = () => {
 

  return (
    <div className="smallcontactinfo"><>
          <div style={{ padding: "30px" }}>
            <span
              style={{
                display: "block",
                fontWeight: "bold",
                fontSize: "1.2em",
              }}
            >
              <IoLocation style={{ paddingRight: "6px" }} /> Address
            </span>
            <hr
              style={{
                width: "20%",
                marginLeft: "0",
                height: "10px",
                backgroundColor: "#fff",
              }}
            ></hr>
            <address style={{ lineHeight: "30px", padding: "3px" }}>
              Fame Health Solution
              <br />
              1234 Main Street
              <br />
              Minneapolis, MN 5555
              <br />
            </address>
          </div>
          <div>
            
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </>
    </div>
  );
};

export default SmallContactInfo;