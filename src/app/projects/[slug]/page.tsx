import ProjectDetails from '@/views/projects/project-detail/ProjectDetails';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects/Projects';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Only allow statically generated slugs
export const dynamicParams = false;

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    return {
        title: project ? `Agntix - ${project.title}` : "Agntix - Project Details",
    };
}

const ProjectDetailsPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetails project={project} />;
};

export default ProjectDetailsPage;
