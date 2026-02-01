import PortfolioDetailsGallery from '@/pages/portfolio/portfolio-details/PortfolioDetailsGallery';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Details Gallery Light",
};

const page = () => {
    return (
        <PortfolioDetailsGallery />
    );
};

export default page;



