import ServiceFourMain from '@/pages/services/ServiceFourMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Our Services",
};

const page = () => {
    return (
        <ServiceFourMain />
    );
};

export default page;