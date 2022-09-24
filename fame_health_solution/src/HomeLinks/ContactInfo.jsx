import React from "react";

const ContactInfo = () => {
  const contactstyle = {
    display: "grid",
    gridTemplateColumns: "auto auto",
  };
  return (
    <div
      style={{
        backgroundColor: "#C6EBC5",
        width: "70%",
        margin: "auto",
        borderRadius: "15px",
        fontSize: "1.3em",
        marginTop: "20px",
        marginBottom: "10px",
      }}
    >
      <di style={contactstyle}>
        <div style={{ padding: "30px" }}>
          <span
            style={{
              display: "block",
              fontWeight: "bold",
              fontSize: "1.2em",
            }}
          >
            Address
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
        <div
          style={{
            padding: "30px",
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
            Email
          </span>
          <hr
            style={{
              width: "20%",
              marginLeft: "0",
              height: "10px",
              backgroundColor: "#fff",
            }}
          ></hr>
          <span style={{ display: "block", padding: "3px" }}>
            info@fmaehealth.org
          </span>
        </div>
      </di>
      <div style={contactstyle}>
        <div style={{ padding: "30px", lineHeight: "30px" }}>
          <span
            style={{
              display: "block",
              fontWeight: "bold",
              fontSize: "1.2em",
            }}
          >
            Phone
          </span>
          <hr
            style={{
              width: "20%",
              marginLeft: "0",
              height: "10px",
              backgroundColor: "#fff",
            }}
          ></hr>
          <span style={{ display: "block", padding: "3px" }}>111-222-3333</span>
        </div>
        <div
          style={{ padding: "30px", marginLeft: "120px", lineHeight: "30px" }}
        >
          <span
            style={{
              display: "block",
              fontWeight: "bold",
              fontSize: "1.2em",
            }}
          >
            Office Hours
          </span>
          <hr
            style={{
              width: "20%",
              marginLeft: "0",
              height: "10px",
              backgroundColor: "#fff",
            }}
          ></hr>
          <span style={{ display: "block", padding: "3px" }}>
            8:00AM-4:00PM, Monday-Friday
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
