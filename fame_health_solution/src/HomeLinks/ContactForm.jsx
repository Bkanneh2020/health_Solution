import React from "react";

const ContactForm = () => {
  const inputstyle = {
    height: "40px",
    marginRight: "17px",
    width: "23%",
  };
  const inputstyle2 = {
    height: "40px",
    marginLeft: "17px",
    width: "23%",
  };
  const emailtextstyle = {
    height: "40px",

    width: "50%",
  };
  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center",
        marginBottom: "50px",
      }}
    >
      <form>
        <div>
          <label>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              style={inputstyle}
            />
          </label>

          <label>
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              style={inputstyle2}
            />
          </label>
        </div>
        <div style={{ margin: "25px" }}>
          <label>
            <input
              email="email"
              type="text"
              placeholder="Email"
              name="email"
              style={emailtextstyle}
            />
          </label>
        </div>
        <div>
          
        </div>
        <div style={{ margin: "25px" }}>
          <textarea
            placeholder="Any specific Questions or concerns?"
            rows="10"
            cols="106"
          ></textarea>
        </div>
      </form>

      <button style={{
        borderRadius:'20px', padding:'12px', fontSize:'1.5rem', backgroundColor:'#A1C298', color:'#fff', borderColor:'#fff'
      }}>Submit</button>
    </div>
  );
};

export default ContactForm;
