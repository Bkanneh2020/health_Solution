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
      className="contactform"
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
        <div
          style={{
            width: "49%",
            margin: "auto",
            textAlign: "start",
          }}
        >
          <p
            style={{
              fontWeight: "bold",
              marginTop: "8px",
              marginLeft: "8px",
            }}
          >
            Individual Intrest:
          </p>
          <label>
            <input type="checkbox" />
            Volunteer
          </label>{" "}
          <br />
          <label>
            <input type="checkbox" />
            Donation
          </label>{" "}
          <br />
          <label>
            <input type="checkbox" />
            career
          </label>
          <p
            style={{
              fontWeight: "bold",
              marginTop: "8px",
              marginLeft: "8px",
            }}
          >
            Services for individuals with disabilities:
          </p>
          <label style={{}}>
            <input type="checkbox" />
            Services inquaries
          </label>
          <br />
          <label>
            <input type="checkbox" />
            Location
          </label>
          <br />
          <label>
            <input type="checkbox" />
            Community Engagment
          </label>
        </div>
        <div style={{ margin: "25px" }}>
          <textarea
            placeholder="Any specific Questions or concerns?"
            rows="10"
            cols="106"
          ></textarea>
        </div>
      </form>

      <button
        style={{
          borderRadius: "20px",
          padding: "12px",
          fontSize: "1.5rem",
          backgroundColor: "#A1C298",
          borderColor: "#fff",
          border: "none",
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
