import React from "react";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import RotatingCollage from "../components/RotatingCollage";
import { PhotographyPortfolio, Photo } from "../model/projects";
import photographyDB from "../db/photography.json";

const HomePage: React.FC = () => {
  const { categories } = photographyDB as PhotographyPortfolio;

  // Gather all photos from all categories for the rotating collage
  const allPhotos: Photo[] = categories.reduce((acc, category) => {
    return acc.concat(category.photos);
  }, [] as Photo[]);

  return (
    <>
      <PageTitle title="Jose | Photography Portfolio" />
      <div className="container py-5">
        {/* Hero Header Section */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <div className="hero-header py-4">
              {/* Option 1: Text-based Logo with Initials */}
              <div className="logo-container mb-3">
                <h1 className="display-3 fw-bold text-dark mb-2 initials-logo">JG</h1>
              </div>
              
              {/* Option 2: Full Name Logo (uncomment to use instead) */}
              {/* 
              <div className="logo-container mb-3">
                <h1 className="display-4 fw-light text-dark mb-2">Jose Guillen</h1>
                <div className="logo-underline mx-auto"></div>
              </div>
              */}
              
              {/* Option 3: Image Logo (uncomment and add your logo file) */}
              {/* 
              <div className="logo-container mb-3">
                <img src="/path-to-your-logo.png" alt="Jose Guillen Photography" className="logo-image" />
              </div>
              */}
              
              <h2 className="h4 text-muted fw-light">Photography Portfolio</h2>
            </div>
          </div>
        </div>

        {/* Rotating Image Collage */}
        {allPhotos.length > 0 && (
          <div className="row mb-5">
            <div className="col-12">
              <RotatingCollage photos={allPhotos} />
            </div>
          </div>
        )}

        {/* Photo Categories Section */}
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="h3 mb-4 text-center">Explore Photography Categories</h2>
          </div>
          {categories.map((category) => (
            <div key={category.id} className="col-md-6 col-lg-3 mb-4">
              <CategoryCard category={category} />
            </div>
          ))}
          
          {/* View All Galleries Button */}
          <div className="row mt-4">
            <div className="col-12 text-center">
              <Link to="/gallery" className="btn btn-primary px-4">
                View All Galleries
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;