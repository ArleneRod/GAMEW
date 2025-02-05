import React from 'react';
import { useNavigate } from 'react-router-dom';
import gameData from '../data/gameData.json';

const Schedule = () => {
  const navigate = useNavigate();
  const gamesByMonth = Object.values(gameData.games).reduce((acc, game) => {
    const month = new Date(game.date).getMonth();
    const monthName = new Date(game.date).toLocaleString('default', { month: 'long' });
    if (!acc[month]) {
      acc[month] = {
        name: monthName,
        games: []
      };
    }
    acc[month].games.push(game);
    return acc;
  }, {});

  return (
    <div className="container mt-4">
      <h2>Game Schedule</h2>
      <p className="text-muted">* All games take place on Saturday</p>
      
      {Object.values(gamesByMonth).map((monthData) => (
        <div key={monthData.name} className="mb-4">
          <h3>{monthData.name.toUpperCase()}</h3>
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Teams</th>
                  <th>Location</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {monthData.games.sort((a, b) => new Date(a.date) - new Date(b.date)).map((game, index) => (
                  <tr 
                    key={index} 
                    onClick={() => navigate(`/game/${Object.keys(gameData.games)[index]}`)}
                    style={{ cursor: 'pointer' }}
                    className="hover:bg-gray-100"
                  >
                    <td>{new Date(game.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })}</td>
                    <td>{game.teams.join(" vs ")}</td>
                    <td>{gameData.locations[game.location]?.fullName}</td>
                    <td>{game.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
      
      <section className="container mt-4 p-3 bg-light rounded shadow-sm">
        <p className="fw-bold">
      <span className="text-dark">Facility Type:</span> Outdoor
        </p>
        <p>
       <span className="fw-bold text-dark">Additional Information:</span> If
       deemed necessary by NYSL, games may be shortened or cancelled due to
       extreme weather conditions.
      </p>
      <p>
      <span className="fw-bold text-dark">Please direct all questions to:</span>{" "}
      Michael Randall, League Coordinator
      </p>
      <div className="row mt-3">
      <div className="col-md-6">
      <div id="phone" className="mb-2">
      <span className="fw-bold text-dark">Phone:</span> (630) 690-8132
      </div>
     </div>
     <div className="col-md-6">
      <div id="email">
      <span className="fw-bold text-dark">Email:</span>{" "}
      <a href="mailto:michael.randall@chisoccer.org">
        michael.randall@chisoccer.org
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Schedule;
