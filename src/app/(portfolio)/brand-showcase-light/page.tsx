import BrandShowcaseMain from '@/views/portfolios/brand-showcase/BrandShowcaseMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - Brand Showcase Light",
};

const page = () => {
    return (
        <BrandShowcaseMain />
    );
};

export default page;