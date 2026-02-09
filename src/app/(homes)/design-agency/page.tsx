import DesignAgencyMain from '@/views/homes/design-agency/DesignAgencyMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Design Agency Light",
};

const page = () => {
    return (
        <DesignAgencyMain />
    );
};

export default page;