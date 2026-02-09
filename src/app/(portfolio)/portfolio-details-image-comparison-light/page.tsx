import PortfolioImageComparison from '@/views/portfolios/portfolio-details-image-comparison/PortfolioImageComparison';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Portfolio Details Image Comparison",
};

const page = () => {
    return (
        <PortfolioImageComparison />
    );
};

export default page;



