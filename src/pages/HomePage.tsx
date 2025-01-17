import React from "react";
import PageTitle from "../components/PageTitle";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { ProjectsData } from "../model/projects";
import projectsDB from "../db/projects.json";
import SimpleProjectCard from "../components/SimpleProjectCard";

const HomePage: React.FC = () => {
  const { projects } = projectsDB as ProjectsData;
  const featuredProjects = projects.slice(0, 2); // gets the first two projects only

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
        {/* Create new component that will render a project card dedicated to the home page. it will only contain the image, title and description */}
        <div className="row mb-4">
          <div className="col-12">
            <h2 className="h3 mb-4">Featured Projects</h2>
          </div>
          {featuredProjects.map((project) => (
            <div key={project.id} className="col-md-6 mb-4">
              <SimpleProjectCard project={project} />
            </div>
          ))}
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