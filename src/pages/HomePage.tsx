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
        {/* Hero Section with Rotating Collage */}
        {/* <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center mb-4">
            <h1 className="display-4 mb-3">Jose Guillen</h1>
            <p className="lead text-muted">
              Photographer capturing life through different lenses.
            </p>
          </div>
        </div> */}

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