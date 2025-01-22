
import React from 'react';
import gameData from '../data/gameData.json';

const Schedule = () => {
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
                  <tr key={index}>
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
    </div>
  );
};

export default Schedule;