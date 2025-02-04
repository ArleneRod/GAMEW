import React from 'react';
import { useParams, Link } from 'react-router-dom';
import gameData from '../data/gameData.json';
import { useUserState } from '../firebase';

const GameDetail = () => {
  const { id } = useParams();
  const [user] = useUserState();
  const game = gameData.games[id];
  const location = gameData.locations[game?.location];

  if (!game) {
    return <div className="container mt-4">Game not found</div>;
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to="/games" className="btn btn-secondary">
          <i className="bi bi-arrow-left me-1"></i> Back to Schedule
        </Link>
        {user && (
          <div>
            <Link to={`/game/${id}/chat`} className="btn btn-primary me-2">
              <i className="bi bi-chat-fill me-1"></i> Game Chat
            </Link>
            <Link to={`/game/${id}/photos`} className="btn btn-primary">
              <i className="bi bi-camera-fill me-1"></i> Game Photos
            </Link>
          </div>
        )}
      </div>
      
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Game Details</h2>
          <div className="mb-3">
            <h4>Date & Time</h4>
            <p className="d-flex align-items-center">
              <i className="bi bi-calendar me-2"></i>
              {new Date(game.date).toLocaleDateString()} at {game.time}
            </p>
          </div>
          
          <div className="mb-3">
            <h4>Teams</h4>
            <p className="d-flex align-items-center">
              <i className="bi bi-people me-2"></i>
              {game.teams.join(" vs ")}
            </p>
          </div>
          
          <div className="mb-3">
            <h4>Location</h4>
            <p className="d-flex align-items-center">
              <i className="bi bi-geo-alt me-2"></i>
              {location.fullName}
            </p>
            <p className="ps-4">{location.address}</p>
          </div>
          
          <div className="mt-4">
            <iframe
              src={location.mapEmbedUrl}
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
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