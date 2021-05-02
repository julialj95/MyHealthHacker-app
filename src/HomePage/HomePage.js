import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import wellness_graphic from "../images/wellness_graphic.png";
import barGraph from "../images/bar_graph.png";

function HomePage() {
  return (
    <main className="about">
      <h1 className="home_header">MyHealthHacker</h1>
      <section className="home_container">
        <h2 className="home_title">Why Track Your Health Habits?</h2>
        <div className="background_wrapper">
          <div className="img_text_block">
            <p className="home_p">
              The first step towards improving your habits is to become aware of
              them. MyHealthHacker will help you to increase your awareness of
              your health habits and track how different behaviors make you feel
              mentally and physically!{" "}
            </p>
            <img src={wellness_graphic} alt="wellness" className="home_img" />
          </div>
        </div>
        <h2 className="home_title">What You Will Notice</h2>
        <div className="background_wrapper">
          <div className="img_text_block">
            <p className="home_p">
              Each day, you can track your sleep patterns, your physical
              activity, and mental health. Over time, you will begin to notice
              patterns and correlations between what you did and how you felt.
              This will allow you to adjust your habits to help you feel your
              best!
            </p>
            <img src={barGraph} alt="graph" className="home_img" />
          </div>
        </div>
        <h2 className="home_title">How To Use MyHealthHacker</h2>
        <div className="background_wrapper">
          <p className="home_p">
            <Link to="/signup" className="link">
              Create an account
            </Link>{" "}
            or{" "}
            <Link to="/login" className="link">
              login
            </Link>{" "}
            with a demo account to submit your first log. You can log in to
            check, submit and edit your logs any time!
          </p>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
