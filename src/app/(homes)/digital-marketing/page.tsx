import DigitalMarketingMain from '@/views/homes/digital-marketing/DigitalMarketingMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Digital Marketing Light",
};

const page = () => {
    return (
        <DigitalMarketingMain />
    );
};

export default page;