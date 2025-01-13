// Create interface for projects cards

export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    imageUrl: string;
    githubUrl?: string; // Optional since some projects might not be on GitHub
    demoUrl?: string;  // Optional since some projects might not have demos
    completedDate?: string;
}

export interface ProjectsData {
    projects: Project[];
}