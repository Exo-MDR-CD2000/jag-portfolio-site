import React, { useState, useEffect } from 'react';
import { Photo } from '../model/projects';

interface RotatingCollageProps {
  photos: Photo[];
}

const RotatingCollage: React.FC<RotatingCollageProps> = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [displayedPhotos, setDisplayedPhotos] = useState<Photo[]>([]);

  // Select a diverse set of photos from the collection
  useEffect(() => {
    if (photos.length > 0) {
      let selectedPhotos: Photo[];
      
      if (photos.length <= 8) {
        // Use all photos if 8 or fewer
        selectedPhotos = photos;
      } else {
        // Randomly select 8 photos from the collection
        const shuffled = [...photos].sort(() => Math.random() - 0.5);
        selectedPhotos = shuffled.slice(0, 8);
      }
      
      setDisplayedPhotos(selectedPhotos);
    }
  }, [photos]);

  // Auto-rotate through photos
  useEffect(() => {
    if (displayedPhotos.length > 0) {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prevIndex) => 
          (prevIndex + 1) % displayedPhotos.length
        );
      }, 3000); // Change photo every 3 seconds

      return () => clearInterval(interval);
    }
  }, [displayedPhotos]);

  if (displayedPhotos.length === 0) {
    return null;
  }

  const currentPhoto = displayedPhotos[currentPhotoIndex];

  return (
    <div className="rotating-collage-container">
      {/* Main Hero Image */}
      <div className="hero-image-container">
        <img 
          src={currentPhoto.imageUrl} 
          alt={currentPhoto.title}
          className="hero-image"
        />
        <div className="image-overlay">
          <div className="image-info">
            <h3 className="image-title">{currentPhoto.title}</h3>
            <p className="image-location">{currentPhoto.location}</p>
          </div>
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="thumbnail-grid">
        {displayedPhotos.map((photo, index) => (
          <div 
            key={photo.id} 
            className={`thumbnail-item ${index === currentPhotoIndex ? 'active' : ''}`}
            onClick={() => setCurrentPhotoIndex(index)}
          >
            <img 
              src={photo.thumbnailUrl} 
              alt={photo.title}
              className="thumbnail-image"
            />
          </div>
        ))}
      </div>

      {/* Progress Indicators */}
      <div className="progress-indicators">
        {displayedPhotos.map((_, index) => (
          <button
            key={index}
            className={`progress-dot ${index === currentPhotoIndex ? 'active' : ''}`}
            onClick={() => setCurrentPhotoIndex(index)}
            aria-label={`View photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingCollage;
