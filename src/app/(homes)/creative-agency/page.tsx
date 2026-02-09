import CreativeAgencyMain from '@/views/homes/creative-agency/CreativeAgencyMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Creative Agency Light",
};

const page = () => {
    return (
        <CreativeAgencyMain />
    );
};

export default page;