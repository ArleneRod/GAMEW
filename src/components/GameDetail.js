
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import gameData from '../data/gameData.json';

const GameDetail = () => {
  const { id } = useParams();
  const game = gameData.games[id];
  const location = gameData.locations[game?.location];

  if (!game) {
    return <div className="container mt-4">Game not found</div>;
  }

  return (
    <div className="container mt-4">
      <Link to="/games" className="btn btn-secondary mb-3">← Back to Schedule</Link>
      
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Game Details</h2>
          <div className="mb-3">
            <h4>Date & Time</h4>
            <p>{new Date(game.date).toLocaleDateString()} at {game.time}</p>
          </div>
          
          <div className="mb-3">
            <h4>Teams</h4>
            <p>{game.teams.join(" vs ")}</p>
          </div>
          
          <div className="mb-3">
            <h4>Location</h4>
            <p>{location.fullName}</p>
            <p>{location.address}</p>
          </div>
          
          <div className="mt-4">
            <iframe
              src={location.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title={`Map of ${location.fullName}`}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;