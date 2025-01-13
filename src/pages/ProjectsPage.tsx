import React from "react";
import PageTitle from "../components/PageTitle";
import ProjectCard from "../components/ProjectCard";
import { ProjectsData } from "../model/projects";
import projectsDB from "../db/projects.json";

const ProjectsPage: React.FC = () => {
    const { projects } = projectsDB as ProjectsData;
    
    return (
        <>
            <PageTitle title="Jose | Projects" />
            <div className="container py-5">
                <div className="row mb-4">
                    <div className="col-12">
                        <h1 className="h3">Projects</h1>
                    </div>
                </div>
                <div className="row">
                    {projects.map((project) => (
                        <div key={project.id} className="col-md-6 mb-4">
                            <ProjectCard project={project} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProjectsPage;