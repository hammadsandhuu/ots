import ProjectDetailsGalleryMain from '@/components/project/ProjectDetailsGalleryMain';
import { getProjectDetailBySlug, getAllProjectDetailSlugs } from '@/data/projectDetailsData';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectDetailBySlug(slug);
    if (!project) return { title: "Agntix - Project Not Found" };
    return { title: `Agntix - ${project.title}` };
}

export function generateStaticParams() {
    return getAllProjectDetailSlugs().map((slug) => ({ slug }));
}

const ProjectDetailPage = async ({ params }: Props) => {
    const { slug } = await params;
    const project = getProjectDetailBySlug(slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailsGalleryMain project={project} />;
};

export default ProjectDetailPage;



