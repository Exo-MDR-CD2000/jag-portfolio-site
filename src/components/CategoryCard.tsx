import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PhotoCategory } from '../model/projects';

interface CategoryCardProps {
  category: PhotoCategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Card className="category-card h-100 shadow-sm hover-lift">
      <Link to={`/gallery/${category.slug}`} className="text-decoration-none">
        <Card.Img 
          variant="top" 
          src={category.coverImageUrl} 
          alt={category.name}
          className="category-cover-image"
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-dark mb-2">{category.name}</Card.Title>
          <Card.Text className="text-muted flex-grow-1">
            {category.description}
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center mt-auto">
            <small className="text-muted">
              {category.photoCount} {category.photoCount === 1 ? 'photo' : 'photos'}
            </small>
            <div className="btn btn-outline-primary btn-sm">
              View Gallery
            </div>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
};

export default CategoryCard;
