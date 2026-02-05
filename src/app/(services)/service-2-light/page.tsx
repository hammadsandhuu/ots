
import ServiceFourMain from '@/views/services/ServiceFourMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - Service 2 Light",
};

const page = () => {
    return (
        <ServiceFourMain />
    );
};

export default page;