import PortfolioShowcaseMain from '@/views/portfolios/portfolio-showcase/PortfolioShowcaseMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Portfolio Showcase Light",
};

const page = () => {
    return (
        <PortfolioShowcaseMain />
    );
};

export default page;