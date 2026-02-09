import ArchitectureHubMain from '@/views/homes/architecture-hub/ArchitectureHubMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Architecture hub light",
};

const page = () => {
    return (
        <ArchitectureHubMain />
    );
};

export default page;