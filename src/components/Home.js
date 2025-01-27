import React from "react";
import "../styles/Home.css";
import gameData from "../data/gameData.json";

const Home = () => {
  return (
    <div>
      <header id="header">
        <h1>Northside Youth Soccer League</h1>
      </header>
      <div id="title-bar">
        <h2>NYSL Game Information</h2>
      </div>
      <img id="logo" src="img/nysl_logo.png" alt="Northside Youth Soccer League Logo" />
      <nav id="nav-bar">
        <a className="inactive-link" href="index.html">Home</a>
        <a className="inactive-link" href="about.html">About <span className="about-variable">NYSL</span></a>
        <a className="inactive-link" href="contact.html">Contact</a>
        <a className="inactive-link" href="rules.html">Rules and Policies</a>
        <a className="active-link">Game Information</a>
        <a className="inactive-link" href="registration.html">Registration Form</a>
      </nav>
      <main id="content">
        <section>
          <h3>Fall Schedule</h3>
          <p id="saturday-warning">* All games take place on Saturday</p>

          <h4>SEPTEMBER</h4>
          <table>
            <thead>
              <tr>
                <th className="first-header">Date</th>
                <th>Teams</th>
                <th>Location</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="first-td">9/01</td>
                <td>U1 and U4</td>
                <td>AJ Katzenmaier</td>
                <td>9:30 a.m.</td>
              </tr>
              <tr>
                <td className="first-td"></td>
                <td>U3 and U2</td>
                <td>Greenbay</td>
                <td>1:00 p.m.</td>
              </tr>
              <tr>
                <td className="first-td">9/08</td>
                <td>U5 and U6</td>
                <td>Howard A Yeager</td>
                <td>9:30 a.m.</td>
              </tr>
              <tr>
                <td className="first-td"></td>
                <td>U6 and U1</td>
                <td>Marjorie P Hart</td>
                <td>1:00 p.m.</td>
              </tr>
              <tr>
                <td className="first-td">9/15</td>
                <td>U2 and U4</td>
                <td>North</td>
                <td>9:30 a.m.</td>
              </tr>
              <tr>
                <td className="first-td"></td>
                <td>U3 and U5</td>
                <td>AJ Katzenmaier</td>
                <td>1:00 p.m.</td>
              </tr>
              <tr>
                <td className="first-td">9/22</td>
                <td>U1 and U3</td>
                <td>South</td>
                <td>9:30 a.m.</td>
              </tr>
              <tr>
                <td className="first-td"></td>
                <td>U2 and U6</td>
                <td>Howard A Yeager</td>
                <td>1:00 p.m.</td>
              </tr>
              <tr>
                <td className="first-td">9/29</td>
                <td>U4 and U5</td>
                <td>Greenbay</td>
                <td>9:30 a.m.</td>
              </tr>
            </tbody>
          </table>

          <h4>OCTOBER</h4>
          <table>
            <thead>
              <tr>
                <th className="first-header">Date</th>
                <th>Teams</th>
                <th>Location</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="first-td">10/06</td>
                <td>U2 and U5</td>
                <td>Marjorie P Hart</td>
                <td>9:30 a.m.</td>
              </tr>
              <tr>
                <td className="first-td"></td>
                <td>U1 and U6</td>
                <td>South</td>
                <td>1:00 p.m.</td>
              </tr>
              <tr>
                <td className="first-td">10/13</td>
                <td>U3 and U4</td>
                <td>Howard A Yeager</td>
                <td>9:30 a.m.</td>
              </tr>
              <tr>
                <td className="first-td"></td>
                <td>U5 and U1</td>
                <td>Greenbay</td>
                <td>1:00 p.m.</td>
              </tr>
              <tr>
                <td className="first-td">10/20</td>
                <td>U6 and U3</td>
                <td>North</td>
                <td>9:30 a.m.</td>
              </tr>
              <tr>
                <td className="first-td"></td>
                <td>U2 and U4</td>
                <td>Marjorie P Hart</td>
                <td>1:00 p.m.</td>
              </tr>
              <tr>
                <td className="first-td">10/27</td>
                <td>U3 and U1</td>
                <td>AJ Katzenmaier</td>
                <td>9:30 a.m.</td>
              </tr>
              <tr>
                <td className="first-td"></td>
                <td>U5 and U6</td>
                <td>Howard A Yeager</td>
                <td>1:00 p.m.</td>
              </tr>
            </tbody>
          </table>
        </section>


        <section className="additional-game-info">
          <p>
            <span className="additional-info-introductions">Facility Type:</span>{" "}
            Outdoor
          </p>
          <p>
            <span className="additional-info-introductions">
              Additional Information:
            </span>{" "}
            If deemed necessary by NYSL, games may be shortened or cancelled
            due to extreme weather conditions.
          </p>
          <p>
            <span className="additional-info-introductions">
              Please direct all questions to:
            </span>{" "}
            Michael Randall, League Coordinator
          </p>
          <div id="contactInfo">
            <div id="phone">
              <span className="additional-info-introductions">Phone:</span>{" "}
              (630) 690-8132
            </div>
            <div id="email">
              <span className="additional-info-introductions">Email:</span>{" "}
              <a href="mailto:michael.randall@chisoccer.org">
                michael.randall@chisoccer.org
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
