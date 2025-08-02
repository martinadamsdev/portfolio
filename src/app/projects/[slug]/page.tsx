import { notFound } from "next/navigation";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Calendar, Tag } from "lucide-react";
import { getProjectBySlug, getAllProjects } from "@/lib/projects";
import MDXRenderer from "@/components/mdx-renderer";
import { Button } from "@/components/ui/button";
import { CreativeWorkSchema, BreadcrumbSchema } from "@/components/structured-data";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all projects
export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") || "https://martinadams.dev";
  const projectImage = project.image ? (
    project.image.startsWith("http") ? project.image : `${siteUrl}${project.image}`
  ) : `${siteUrl}/opengraph-image`;

  return {
    title: `${project.title} - Martin`,
    description: project.description,
    keywords: project.tags || [],
    authors: [{ name: "Martin", url: siteUrl }],
    creator: "Martin",
    publisher: "Martin",
    openGraph: {
      title: project.title,
      description: project.description,
      url: `/projects/${params.slug}`,
      siteName: "Martin Portfolio",
      images: [
        {
          url: projectImage,
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      title: project.title,
      description: project.description,
      images: [projectImage],
      card: "summary_large_image",
      creator: "@martinadamsdev",
    },
    alternates: {
      canonical: `/projects/${params.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Projects", url: "/projects" },
    { name: project.title, url: `/projects/${params.slug}` }
  ];

  return (
    <>
      <CreativeWorkSchema
        title={project.title}
        description={project.description}
        url={project.liveUrl || project.link}
        slug={params.slug}
        technologies={project.tags || []}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <div className="min-h-screen py-12">
      <div className="container max-w-4xl mx-auto px-6">
        {/* Navigation */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/projects">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
          
          {/* Live URL Link */}
          {(project.liveUrl || project.link) && (
            <Link 
              href={project.liveUrl || project.link || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-auto"
            >
              <Button variant="outline" size="sm" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Visit Live Site
              </Button>
            </Link>
          )}
        </div>

        {/* Project Header */}
        <div className="mb-8">
          {/* Featured Badge */}
          {project.featured && (
            <div className="mb-4">
              <span className="px-3 py-1 text-sm font-medium bg-primary text-primary-foreground rounded-full">
                Featured Project
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {project.title}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Project Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            {project.date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(project.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            )}
            
            {project.category && (
              <div className="flex items-center gap-1">
                <Tag className="w-4 h-4" />
                {project.category}
              </div>
            )}
          </div>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Project Image */}
        {project.image && (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 bg-muted">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
              priority
            />
          </div>
        )}

        {/* Project Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <MDXRenderer source={project.content || ''} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-border">
          {(project.liveUrl || project.link) && (
            <Link 
              href={project.liveUrl || project.link || "#"} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Visit Live Site
              </Button>
            </Link>
          )}
          
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </Button>
            </Link>
          )}
          
          <Link href="/projects">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}