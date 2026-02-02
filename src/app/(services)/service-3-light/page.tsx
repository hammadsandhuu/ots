import ServiceFourMain from '@/pages/services/ServiceFourMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - Service 3 Light",
};

const page = () => {
    return (
        <ServiceFourMain />
    );
};

export default page;