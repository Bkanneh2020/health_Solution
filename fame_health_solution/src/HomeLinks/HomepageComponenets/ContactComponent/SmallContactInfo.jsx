import React from "react";
import { IoLocation } from "react-icons/io5";
import { AiOutlineMail, AiFillClockCircle } from "react-icons/ai";
import { BsTelephoneFill} from "react-icons/bs";

const SmallContactInfo = () => {
  return (
    <div className="smallcontactinfo">
      <>
        <div style={{ padding: "15px" }}>
          <span
            style={{
              display: "block",
              fontWeight: "bold",
              fontSize: "1.2em",
            }}
          >
            <IoLocation style={{ paddingRight: "6px" }} /> Address
          </span>
          <address style={{ lineHeight: "30px", padding: "3px" }}>
            Fame Health Solution
            <br />
            1234 Main Street
            <br />
            Minneapolis, MN 5555
            <br />
          </address>
        </div>
        <div
          style={{
            padding: "15px",
            lineHeight: "30px",
          }}
        >
          <span
            style={{
              display: "block",
              fontWeight: "bold",
              fontSize: "1.2em",
            }}
          >
            <AiOutlineMail style={{ paddingRight: "6px" }} />
            Email
          </span>
          <span style={{ display: "block", padding: "3px" }}>
            info@fmaehealth.org
          </span>
        </div>
      
        <div style={{ padding: "15px", lineHeight: "30px" }}>
          <span
            style={{
              display: "block",
              fontWeight: "bold",
              fontSize: "1.2em",
            }}
          >
             <BsTelephoneFill style={{paddingRight:'6px'}}/>Phone
          </span>
          <span style={{ display: "block", padding: "3px" }}>111-222-3333</span>
        
        </div>
        <div>
        <div
          style={{ padding: "15px", lineHeight: "30px" }}>
          <span
            style={{
              display: "block",
              fontWeight: "bold",
              fontSize: "1.2em",
            }}
          >
            <AiFillClockCircle style={{paddingRight:'6px'}}/> Office Hours
          </span>
          <span style={{ display: "block", padding: "3px" }}>
            8:00AM-4:00PM, Monday-Friday
          </span>
        </div>
        </div>
       
      </>
    </div>
  );
};

export default SmallContactInfo;
