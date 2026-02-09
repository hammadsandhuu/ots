import ProjectsMain from '@/views/projects/ProjectsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Projects",
};

const ProjectsPage = () => {
    return <ProjectsMain />;
};

export default ProjectsPage;