import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import DailyActivities from "./HomeHealthCom/DailyActivities";
import Exercise from "./HomeHealthCom/Exercise";
import HealthEvaluation from "./HomeHealthCom/HealthEvaluation";
import Mindfullness from "./HomeHealthCom/Mindfulness";
import PeaceOfMind from "./HomeHealthCom/PeaceOfMind";
import Therapy from "./HomeHealthCom/Therapy";

const HomeHealth = () => {
  const listyle = {
    padding: "8px",
    margin: "5px",
    fontSize: "1.2em",
    textDecoration: "none",
    color: "#fff",
  };
  return (
    <div style={{ backgroundImage: "url(/Images/together.jpg)" }}>
      <div style={{ textAlign: "center" }}>
        <h1> Home heathcare Solutions</h1>
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#0a0909",
          borderRadius: "15px",
          position: "fixed",
        }}
      >
        <ul style={{ listStyle: "none" }}>
          <li style={listyle}>
            <Link
              to="#exercise"
              smooth
              style={{ textDecoration: "none", color: "#fff" }}
              className="listyle"
            >
              Exercise
            </Link>
          </li>
          <li style={listyle}>
            <Link
              to="#peaceofmind"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
              className="listyle"
            >
              Peace of Mind
            </Link>
          </li>
          <li style={listyle}>
            <Link
              to="#healthevaluation"
              smooth
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
              className="listyle"
            >
              Health Evaluation
            </Link>
          </li>
          <li style={listyle}>
            <Link
              to="#therapy"
              smooth
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
              className="listyle"
            >
              Therapy
            </Link>
          </li>
          <li style={listyle}>
            <Link
              to="#mindfullness"
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
              className="listyle"
            >
              Mindfulness
            </Link>
          </li>
          <li style={listyle}>
            <Link
              to="#dailyactivities"
              smooth
              style={{
                textDecoration: "none",
                color: "#fff",
              }}
              className="listyle"
            >
              Daily Acttivities
            </Link>
          </li>
        </ul>
      </div>
      <Exercise />
      <PeaceOfMind />
      <HealthEvaluation />
      <Therapy />
      <Mindfullness />
      <DailyActivities />
    </div>
  );
};

export default HomeHealth;
