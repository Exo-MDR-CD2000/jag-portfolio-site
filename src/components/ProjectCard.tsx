import React from 'react';
import { Project } from '../model/projects';

interface ProjectCardProps {
    project: Project; // Receive project object as prop
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        /**
         * Single responsibility principle: This component is responsible for rendering a single project card.
         * Uses the project object passed as prop to display project details.
         * Destructures the project object to access its properties.
         */
        <div className="card h-100 border-0 shadow-sm">
            <img src={project.imageUrl} className="card-img-top" alt={project.title} />
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="mb-3">
                    {project.techStack.map((tech, index) => (
                        <span key={index} className="badge bg-secondary me-2 mb-2">{tech}</span>
                    ))}
                </div>
                <div className="d-flex gap-2">
                    {project.githubUrl && (
                        <a href={project.githubUrl} className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                    )}
                    {project.demoUrl && (
                        <a href={project.demoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;