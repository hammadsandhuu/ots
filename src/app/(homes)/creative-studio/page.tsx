
import CreativeStudioMain from '@/views/homes/creative-studio/CreativeStudioMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Creative Studio Light",
};

const page = () => {
    return (
        <CreativeStudioMain />
    );
};

export default page;