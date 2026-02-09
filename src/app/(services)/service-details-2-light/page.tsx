import ServiceDetailsTwoMain from '@/views/services/service-details/ServiceDetailsTwoMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Service details 2 Light",
};

const page = () => {
    return (
        <ServiceDetailsTwoMain />
    );
};

export default page;