import PortfolioDetailsModern from '@/views/portfolios/portfolio-details-modern/PortfolioDetailsModern';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Portfolio Details Modern Light",
};

const page = () => {
    return (
        <PortfolioDetailsModern />
    );
};

export default page;



