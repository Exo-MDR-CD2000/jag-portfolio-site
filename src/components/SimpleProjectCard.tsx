import React from 'react';
import { Project } from '../model/projects';

// use this component to create a simple project card for the home page

const SimpleProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div className="card h-100 border-0 shadow-sm">
            <img src={project.imageUrl} className="card-img-top" alt={project.title} />
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
            </div>
        </div>
    );
};

export default SimpleProjectCard;