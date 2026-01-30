import ServiceDetailsTwoMain from '@/pages/services/service-details-2/ServiceDetailsTwoMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - Our Service",
};

const page = () => {
    return (
        <ServiceDetailsTwoMain />
    );
};

export default page;