import React from 'react';
import './styles/Home.css'; // Ajusta la ruta según tu estructura de proyecto
import { Link } from "react-router-dom";
const Rules = () => {
  return (
    <div>
      <div id="header">
        <h1>Northside Youth Soccer League</h1>
      </div>
      <div id="title-bar">
        <h2>Rules of Play & Policies</h2>
      </div>
      <img id="logo" src="/img/nysl_logo.png" alt="Northside Youth Soccer League Logo" />
      <nav id="nav-bar">
        <Link className="inactive-link" to="#">
          Home
        </Link>
        <Link className="inactive-link" to="#">
          About <span className="about-variable">NYSL</span>
        </Link>
        <Link className="inactive-link" to="#">
          Contact
        </Link>
        <Link className="inactive-link" to="/rules">
          Rules and Policies
        </Link>
        <Link className="active-link" to="/home">
          Game Information
        </Link>
        <Link className="inactive-link" to="#">
          Registration Form
        </Link>
      </nav>
      <div id="content">
        <p>FIFA rules shall govern NYSL play except as modified herein.</p>
        <h3 className="rules-header rule-introduction">SPORTSMANSHIP</h3>
        <ul>
          <li>
            The common interest that members of the Association share is to inspire
            youth to practice the ideals of sportsmanship and fair play. Any player,
            coach, team, parent, spectator, administrator or referee whose behavior
            detracts from this purpose is subject to disciplinary action regardless of
            technical soccer background, expertise, accomplishments or standing.
          </li>
        </ul>
        <h3 className="rules-header rule-introduction">FIFA FIELD REGULATIONS</h3>
        <ol>
          <li>
            <span className="rule-introduction">DIMENSIONS.</span> FIFA Law 1 provides for flexible 
            external field dimensions within a given maximum and minimum width and 
            length. These dimensions should be adhered to for all fields used by 
            teams under 12 and older.
          </li>
          <li>
            <span className="rule-introduction">COMPETITION FIELDS.</span> Fields used within the competition program must
            be a minimum of 100 x 60 yards. Leagues, districts or associations
            participating in the state competition program that are unable to provide a
            field that meets these minimum requirements must advise the State
            Competition Board which will assign its Fields Committee to inspect the
            field and recommend to the Board whether or not a waiver of the minimum
            dimensions should be granted. Teams from leagues, districts or
            associations that are unable to provide an acceptable field may be
            required to play all their games away.
          </li>
          <li>
            <span className="rule-introduction">FIELDS USED BY YOUNG AGE GROUPS.</span>
            <ol type="a">
              <li>
                U-6 play on a field approximately 20 X 40 yards with no penalty
                areas. Fields for older age groups should be progressively larger. 
              </li>
              <li>U-8 plays on a field 40-50 yards in length and 20-30 yards width.</li>
              <li>U-10 play on a field 70-80 yards in length and 40-50 yards in width.</li>
              <li>
                In addition, fields used by young age groups may have their internal
                dimensions and size of goal similarly modified.
              </li>
            </ol>
          </li>
        </ol>
        {/* Continúa con el resto del contenido */}
      </div>
    </div>
  );
};

export default Rules;

