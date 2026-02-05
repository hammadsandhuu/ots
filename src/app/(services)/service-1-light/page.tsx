import ServiceFourMain from '@/views/services/ServiceFourMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - Service 1 Light",
};

const page = () => {
    return (
        <ServiceFourMain />
    );
};

export default page;