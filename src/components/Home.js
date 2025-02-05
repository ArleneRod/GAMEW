import React from "react";
import "../styles/Home.css";
import gameData from "../data/gameData.json";

const Home = () => {
  return (
    <div className="container mt-4 text-center">
  <header id="header" className="mb-3">
  <h1 className="fw-bold text-white" style={{ textShadow: '2px 2px 4px #000000' }}>
  Northside Youth Soccer League
   </h1>
  </header>

  <div id="title-bar" className="mb-3">
    <h2 className="text-uppercase">Upcoming Events</h2>
  </div>

  <img 
    id="logo" 
    src="img/nysl_logo.png" 
    alt="Northside Youth Soccer League Logo" 
    className="img-fluid mb-4"
  />  

  <main id="content">
    <section className="row justify-content-center">
      <div className="col-md-6 col-lg-4 mb-3">
        <p className="date fw-bold text-dark">August 4</p>
        <p className="description text-muted">NYSL Fundraiser</p>
      </div>
      <div className="col-md-6 col-lg-4 mb-3">
        <p className="date fw-bold text-dark">August 16</p>
        <p className="description text-muted">Season Kick-off: Meet the Teams</p>
      </div>
      <div className="col-md-6 col-lg-4 mb-3">
        <p className="date fw-bold text-dark">September 1</p>
        <p className="description text-muted">
          First Game of the Season (Check Game Schedule for details)
        </p>
      </div>
    </section>
  </main>
</div>


  );
};

export default Home;
