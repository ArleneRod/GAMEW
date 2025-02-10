
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useUserState } from '../firebase';

const GamePhotos = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const { id } = useParams();
  const [user] = useUserState();

  const handleFileSelect = (e) => {
    setError(null);
    if (e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setError("File size too large. Please select an image under 5MB");
        return;
      }
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile || !user || isUploading) return;

    try {
      setIsUploading(true);
      setError(null);

      const extension = selectedFile.name.split('.').pop();
      const fileName = `${Date.now()}.${extension}`;
      const imageRef = ref(storage, `game-${id}/${fileName}`);

      await uploadBytes(imageRef, selectedFile);
      const downloadUrl = await getDownloadURL(imageRef);

      setUrl(downloadUrl);
      setSelectedFile(null);

      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';

    } catch (error) {
      console.error("Upload error:", error);
      setError("Error uploading image. Please try again");
    } finally {
      setIsUploading(false);
    }
  };

  if (!user) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning">
          Please sign in to upload pictures
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to={`/game/${id}`} className="btn btn-secondary">
          ← Back to Game
        </Link>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <div className="mb-3">
            <input
              type="file"
              accept="image/*"
              capture="environment"
              className="form-control"
              onChange={handleFileSelect}
              disabled={isUploading}
            />
            <small className="text-muted d-block mt-1">
              Maximum file size: 5MB
            </small>
          </div>

          {error && (
            <div className="alert alert-danger mb-3">
              {error}
            </div>
          )}

          <button
            className="btn btn-primary w-100"
            onClick={handleUpload}
            disabled={!selectedFile || isUploading}
          >
            {isUploading ? 'Uploading...' : 'Post Picture'}
          </button>
        </div>
      </div>

      {url && (
        <div className="card mb-4">
          <div className="card-body">
            <img
              src={url}
              alt="Uploaded"
              className="img-fluid rounded"
            />
          </div>
        </div>
      )}

      {selectedFile && (
        <div className="card mb-4">
          <div className="card-body">
            <h5>Selected file:</h5>
            <p>Name: {selectedFile.name}</p>
            <p>Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePhotos;