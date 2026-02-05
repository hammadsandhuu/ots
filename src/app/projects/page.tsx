import ProjectsMain from '@/views/projects/ProjectsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - Projects",
};

const ProjectsPage = () => {
    return <ProjectsMain />;
};

export default ProjectsPage;