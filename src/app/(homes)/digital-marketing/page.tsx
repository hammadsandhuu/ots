import DigitalMarketingMain from '@/views/homes/digital-marketing/DigitalMarketingMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - Digital Marketing Light",
};

const page = () => {
    return (
        <DigitalMarketingMain />
    );
};

export default page;