import ServiceFourMain from '@/views/services/ServiceFourMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Service 4 Light",
};

const page = () => {
    return (
        <ServiceFourMain />
    );
};

export default page;