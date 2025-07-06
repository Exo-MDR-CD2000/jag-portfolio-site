// Photography Portfolio Interfaces

// Individual photo interface
export interface Photo {
    id: number;
    title: string;
    description?: string;
    imageUrl: string;
    thumbnailUrl?: string; // For optimized loading
    captureDate?: string;
    camera?: string;
    lens?: string;
    settings?: {
        aperture?: string;
        shutterSpeed?: string;
        iso?: number;
        focalLength?: string;
    };
    location?: string;
}

// Photo category interface
export interface PhotoCategory {
    id: number;
    name: string;
    description: string;
    coverImageUrl: string; // Hero image for the category
    slug: string; // URL-friendly name (e.g., "wildlife", "cars", "infrared")
    photoCount: number;
    photos: Photo[];
}

// Root data structure for the photography portfolio
export interface PhotographyPortfolio {
    categories: PhotoCategory[];
    featuredPhotos?: Photo[]; // Optional featured photos for homepage
}