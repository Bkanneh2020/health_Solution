import React from "react";
import AboutUs from "./HomeLinks/HomepageComponenets/AboutUs";
import MissionStatment from "./HomeLinks/HomepageComponenets/MissionStatment";
import Services from "./HomeLinks/HomepageComponenets/Services";
import HomepageHeading from "./HomeLinks/HomepageHeading";
import Founders from "./HomeLinks/HomepageComponenets/Founders";

const Homepage = () => {
  return (
    <div className="homepage">
      <HomepageHeading />
      <Services />
      <AboutUs />
      <MissionStatment />
      <Founders />
    </div>
  );
};

export default Homepage;
