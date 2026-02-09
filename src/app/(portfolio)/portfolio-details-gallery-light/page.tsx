import { redirect } from 'next/navigation';
import { projects } from '@/data/projects/Projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Portfolio Details Gallery Light",
};

const page = () => {
    // Redirect to the first project
    const firstProject = projects[0];
    if (firstProject) {
        redirect(firstProject.link);
    }
    return null;
};

export default page;



