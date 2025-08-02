import { getFeaturedProjects } from "@/lib/projects";
import FeaturedProjectsClient from "./featured-projects-client";

export default async function FeaturedProjectsServer() {
  try {
    const projects = getFeaturedProjects();
    return <FeaturedProjectsClient projects={projects} />;
  } catch (error) {
    console.error("Error loading featured projects:", error);
    
    // Fallback to empty array if file reading fails
    return <FeaturedProjectsClient projects={[]} />;
  }
}