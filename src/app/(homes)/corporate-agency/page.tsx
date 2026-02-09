import CorporateAgencyMain from '@/views/homes/corporate-agency/CorporateAgencyMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Corporate Agency Light",
};

const page = () => {
    return (
        <CorporateAgencyMain />
    );
};

export default page;