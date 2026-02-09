import ServiceFourMain from '@/views/services/ServiceFourMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Service 1 Light",
};

const page = () => {
    return (
        <ServiceFourMain />
    );
};

export default page;