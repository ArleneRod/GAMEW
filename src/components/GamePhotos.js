
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useUserState } from '../firebase';

const GamePhotos = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [url, setUrl] = useState(null);
  const { id } = useParams();
  const [user] = useUserState();

  const handleFileSelect = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      console.log("Archivo seleccionado:", file.name);
      console.log("Tipo de archivo:", file.type);
      console.log("Tamaño:", file.size, "bytes");
      setSelectedFile(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      console.log("Iniciando subida...");
      const imageRef = ref(storage, `game-pictures/${id}/${selectedFile.name}`);
      console.log("Referencia creada:", `game-pictures/${id}/${selectedFile.name}`);
      
      const uploadResult = await uploadBytes(imageRef, selectedFile);
      console.log("Archivo subido:", uploadResult);
      
      const downloadUrl = await getDownloadURL(imageRef);
      console.log("URL de descarga:", downloadUrl);
      
      setUrl(downloadUrl);
      setSelectedFile(null);
      
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';
      
    } catch (error) {
      console.error("Error detallado:", error);
    }
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Link to={`/game/${id}`} className="btn btn-secondary">
          ← Back to Game
        </Link>
      </div>

      {user && (
        <div className="card mb-4">
          <div className="card-body">
            <div className="input-group">
              <input
                type="file"
                accept="image/*"
                capture="environment"
                className="form-control"
                onChange={handleFileSelect}
              />
              <button
                className="btn btn-primary"
                onClick={handleUpload}
                disabled={!selectedFile}
              >
                Post Picture
              </button>
            </div>
          </div>
        </div>
      )}

      {url && (
        <div className="card mb-4">
          <div className="card-body">
            <img src={url} alt="Uploaded" className="img-fluid" />
          </div>
        </div>
      )}

      {}
      {selectedFile && (
        <div className="card mb-4">
          <div className="card-body">
            <h5>Archivo seleccionado:</h5>
            <p>Nombre: {selectedFile.name}</p>
            <p>Tipo: {selectedFile.type}</p>
            <p>Tamaño: {selectedFile.size} bytes</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GamePhotos;