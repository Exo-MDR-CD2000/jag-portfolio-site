import React from "react";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import { PhotographyPortfolio } from "../model/projects";
import photographyDB from "../db/photography.json";

const HomePage: React.FC = () => {
  const { categories, featuredPhotos } = photographyDB as PhotographyPortfolio;

  return (
    <>
      <PageTitle title="Jose | Photography Portfolio" />
      <div className="container py-5">
        {/* Hero Section */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4 mb-3">Jose Guillen</h1>
            <p className="lead text-muted">
              Photographer capturing life through different lenses.
              Specializing in automotive, wildlife, infrared, and motion photography.
            </p>
          </div>
        </div>

        {/* About Photography Section */}
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto">
            <p className="text-muted">
              Welcome to my photography portfolio! I'm passionate about capturing the world 
              through different perspectives and techniques. From the raw power of automotive 
              beauty to the serene wilderness of nature, each photograph tells a unique story.
              Explore my work across various categories and discover the moments that inspire me.
            </p>
          </div>
        </div>

        {/* Featured Photos Section */}
        {featuredPhotos && featuredPhotos.length > 0 && (
          <div className="row mb-5">
            <div className="col-12">
              <h2 className="h3 mb-4">Featured Work</h2>
            </div>
            {featuredPhotos.map((photo) => (
              <div key={photo.id} className="col-md-6 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <img 
                    src={photo.imageUrl} 
                    alt={photo.title}
                    className="card-img-top"
                    style={{ height: '300px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{photo.title}</h5>
                    <p className="card-text text-muted">{photo.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Photo Categories Section */}
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="h3 mb-4">Photography Categories</h2>
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