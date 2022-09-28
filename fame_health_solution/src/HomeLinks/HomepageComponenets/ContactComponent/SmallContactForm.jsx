import React from "react";

const SmallContactForm = () => {
  const inputstyle = {
    height: "30px",
    margin:'6px',
    width:'100%'
    
  };

  const inputstyle2 = {
    height: "30px",
   margin:'6px',
   width:'100%'
  };

  const emailtextstyle = {
    height: "30px",
    width:'100%',
    margin:'6px'
  };

  return (
    <div className="smallcontactform">
      <div>
        <div>
          <label>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              style={inputstyle}
            />
          </label>
        </div>
        <div>
          <label>
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              style={inputstyle2}
            />
          </label>
        </div>
      </div>
      <div>
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
        <p
          style={{
            fontWeight: "bold",
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
      <div>
        <textarea style={{width:'100%'}}
          placeholder="Any specific Questions or concerns?"
          rows="10"
         
        ></textarea>
        <div>
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
      </div>
    </div>
  );
};

export default SmallContactForm;
