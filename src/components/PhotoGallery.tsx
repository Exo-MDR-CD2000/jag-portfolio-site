import React, { useState, useCallback } from 'react';
import { Container, Row, Col, Modal, Image } from 'react-bootstrap';
import { Photo } from '../model/projects';

interface PhotoGalleryProps {
  photos: Photo[];
  categoryName: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ photos, categoryName }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePhotoClick = (photo: Photo) => {
    const index = photos.findIndex(p => p.id === photo.id);
    setCurrentIndex(index);
    setSelectedPhoto(photo);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPhoto(null);
  };

  const handlePrevious = useCallback(() => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  }, [currentIndex, photos]);

  const handleNext = useCallback(() => {
    const newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  }, [currentIndex, photos]);

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') handlePrevious();
      if (event.key === 'ArrowRight') handleNext();
      if (event.key === 'Escape') handleCloseModal();
    };

    if (showModal) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [showModal, handlePrevious, handleNext]);

  return (
    <Container fluid className="py-4">
      <Row className="mb-4">
        <Col>
          <h2 className="text-center">{categoryName}</h2>
          <p className="text-center text-muted">
            {photos.length} {photos.length === 1 ? 'photo' : 'photos'}
          </p>
        </Col>
      </Row>
      
      <Row className="g-3">
        {photos.map((photo) => (
          <Col key={photo.id} xs={12} sm={6} md={4} lg={3}>
            <div 
              className="photo-thumbnail position-relative overflow-hidden rounded shadow-sm cursor-pointer"
              style={{ aspectRatio: '4/3' }}
              onClick={() => handlePhotoClick(photo)}
            >
              <Image
                src={photo.thumbnailUrl || photo.imageUrl}
                alt={photo.title}
                className="w-100 h-100 object-fit-cover hover-scale"
                style={{ transition: 'transform 0.3s ease' }}
              />
              <div className="photo-overlay position-absolute bottom-0 start-0 end-0 bg-dark bg-opacity-75 text-white p-2 opacity-0 hover-opacity">
                <h6 className="mb-0 small">{photo.title}</h6>
                {photo.location && (
                  <small className="text-light">{photo.location}</small>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>

      {/* Photo Detail Modal */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="xl" 
        centered
        className="photo-modal-enhanced"
      >
        <Modal.Header closeButton className="border-0 bg-white">
          {/* Remove title from header */}
        </Modal.Header>
        <Modal.Body className="p-0 bg-light">
          {selectedPhoto && (
            <Row className="g-0">
              <Col lg={8} className="position-relative bg-white d-flex align-items-center justify-content-center" style={{ minHeight: '60vh' }}>
                {/* Previous Arrow */}
                <button
                  className="btn btn-light position-absolute start-0 top-50 translate-middle-y ms-3 rounded-circle"
                  style={{ zIndex: 10, width: '50px', height: '50px' }}
                  onClick={handlePrevious}
                  disabled={photos.length <= 1}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>

                {/* Photo */}
                <Image
                  src={selectedPhoto.imageUrl}
                  alt={selectedPhoto.title}
                  className="w-100 h-auto"
                  style={{ maxHeight: '70vh', objectFit: 'contain' }}
                />

                {/* Next Arrow */}
                <button
                  className="btn btn-light position-absolute end-0 top-50 translate-middle-y me-3 rounded-circle"
                  style={{ zIndex: 10, width: '50px', height: '50px' }}
                  onClick={handleNext}
                  disabled={photos.length <= 1}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>

                {/* Photo Counter */}
                <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
                  <span className="badge bg-dark bg-opacity-75 px-3 py-2">
                    {currentIndex + 1} of {photos.length}
                  </span>
                </div>
              </Col>
              
              <Col lg={4} className="p-4 bg-white">
                <div className="photo-details">
                  <h4 className="text-dark mb-3 fw-bold">{selectedPhoto.title}</h4>
                  {selectedPhoto.description && (
                    <p className="text-muted mb-4">{selectedPhoto.description}</p>
                  )}
                  
                  <div className="photo-metadata">
                    {selectedPhoto.captureDate && (
                      <div className="mb-3 pb-2 border-bottom">
                        <strong className="text-dark">Date:</strong>
                        <div className="text-muted">{new Date(selectedPhoto.captureDate).toLocaleDateString()}</div>
                      </div>
                    )}
                    {selectedPhoto.location && (
                      <div className="mb-3 pb-2 border-bottom">
                        <strong className="text-dark">Location:</strong>
                        <div className="text-muted">{selectedPhoto.location}</div>
                      </div>
                    )}
                    {selectedPhoto.camera && (
                      <div className="mb-3 pb-2 border-bottom">
                        <strong className="text-dark">Camera:</strong>
                        <div className="text-muted">{selectedPhoto.camera}</div>
                      </div>
                    )}
                    {selectedPhoto.lens && (
                      <div className="mb-3 pb-2 border-bottom">
                        <strong className="text-dark">Lens:</strong>
                        <div className="text-muted">{selectedPhoto.lens}</div>
                      </div>
                    )}
                    {selectedPhoto.settings && (
                      <div className="mb-3 pb-2 border-bottom">
                        <strong className="text-dark">Camera Settings:</strong>
                        <div className="mt-2 text-muted small">
                          {selectedPhoto.settings.aperture && (
                            <div className="d-flex justify-content-between">
                              <span>Aperture:</span>
                              <span>{selectedPhoto.settings.aperture}</span>
                            </div>
                          )}
                          {selectedPhoto.settings.shutterSpeed && (
                            <div className="d-flex justify-content-between">
                              <span>Shutter Speed:</span>
                              <span>{selectedPhoto.settings.shutterSpeed}</span>
                            </div>
                          )}
                          {selectedPhoto.settings.iso && (
                            <div className="d-flex justify-content-between">
                              <span>ISO:</span>
                              <span>{selectedPhoto.settings.iso}</span>
                            </div>
                          )}
                          {selectedPhoto.settings.focalLength && (
                            <div className="d-flex justify-content-between">
                              <span>Focal Length:</span>
                              <span>{selectedPhoto.settings.focalLength}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default PhotoGallery;
