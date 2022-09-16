import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import Plane from "./HomeLinks/Plane";
import Healthinfo101 from "./Healthinfo/Healthinfo101";
import Patientinfo from "./Healthinfo/PatientInfo";
import HomepageHeading from "./HomeLinks/HomepageHeading";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomepageHeading />
      <h1>Hello Home page.</h1>
      <Link to="#Health101" smooth>HealthInfo</Link>
      <Plane />
      <Patientinfo />
      <Healthinfo101 />
    </div>
  );
};

export default Homepage;
