import React from "react";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <>
      <PageTitle title="Jose | Home" />
      <div className="container py-5">
        {/* Hero Section */}
        <div className="row mb-5">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-4 mb-3">Jose Guillen</h1>
            <p className="lead text-muted">
              Full-stack Web Developer with a passion for Front-End development.
              2+ years of experience building modern web applications.
            </p>
          </div>
        </div>

        {/* About Section */}
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto">
            <p className="text-muted">
              Hello! I am a dedicated Full-stack Web Developer with a strong passion for Front-End building.
              I continuously advance my understanding in this ever-progressing field.
              Operating in the MST time zone, I ensure 6-8 hours of overlapping availability daily.
            </p>
          </div>
        </div>

        {/* Writing Section */}
        <div className="row mb-5">
          <div className="col-lg-8">
            <h2 className="h3 mb-4">Latest Writing</h2>
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-body">
                <small className="text-muted d-block mb-1">January 1st, 2025</small>
                <Link
                  to="/blog/goals-for-the-new-year"
                  className="h5 text-decoration-none text-dark"
                >
                  Goals for the Year
                </Link>
              </div>
            </div>
            <div className="">
              <Link to="/blog" className="btn btn-primary px-4">
                View All Posts
              </Link>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="h3 mb-4">Featured Projects</h2>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="..." className="card-img-top" alt="Project 1" />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text text-muted">Project details here</p>
                <Link to="/projects/project-1" className="btn btn-outline-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="card h-100 border-0 shadow-sm">
              <img src="..." className="card-img-top" alt="Project 2" />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text text-muted">Project details here</p>
                <Link to="/projects/project-2" className="btn btn-outline-primary">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          {/* View All Projects Button */}
          <div className="row">
            <div className="col-12">
              <Link to="/projects" className="btn btn-primary px-4">
                View All Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;