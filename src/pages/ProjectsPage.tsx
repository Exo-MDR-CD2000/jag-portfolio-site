import React from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../components/PageTitle";
import CategoryCard from "../components/CategoryCard";
import PhotoGallery from "../components/PhotoGallery";
import { PhotographyPortfolio } from "../model/projects";
import photographyDB from "../db/photography.json";

const ProjectsPage: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const { categories } = photographyDB as PhotographyPortfolio;
    
    // If no category parameter, show all categories (gallery overview)
    if (!category) {
        return (
            <>
                <PageTitle title="Jose | Photography Galleries" />
                <div className="container py-5">
                    <div className="row mb-4">
                        <div className="col-12 text-center">
                            <h1 className="display-5 mb-3">Photography Galleries</h1>
                            <p className="lead text-muted">
                                Explore my photography collection organized by categories
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        {categories.map((cat) => (
                            <div key={cat.id} className="col-md-6 col-lg-4 mb-4">
                                <CategoryCard category={cat} />
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }

    // Find the specific category
    const selectedCategory = categories.find(cat => cat.slug === category);
    
    // If category not found, show error
    if (!selectedCategory) {
        return (
            <>
                <PageTitle title="Jose | Gallery Not Found" />
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="display-5 mb-3">Gallery Not Found</h1>
                            <p className="lead text-muted">
                                The gallery "{category}" could not be found.
                            </p>
                            <a href="/gallery" className="btn btn-primary">
                                Back to All Galleries
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    // Show individual category gallery
    return (
        <>
            <PageTitle title={`Jose | ${selectedCategory.name} Photography`} />
            <div className="container py-5">
                <div className="row mb-4">
                    <div className="col-12">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="/gallery" className="text-decoration-none">Galleries</a>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {selectedCategory.name}
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>
                
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h1 className="display-5 mb-3">{selectedCategory.name}</h1>
                        <p className="lead text-muted">
                            {selectedCategory.description}
                        </p>
                    </div>
                </div>

                <PhotoGallery 
                    photos={selectedCategory.photos} 
                    categoryName={selectedCategory.name}
                />
            </div>
        </>
    );
};

export default ProjectsPage;