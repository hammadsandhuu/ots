
import PortfolioPinterestMain from '@/views/portfolios/portfolio-pinterest/PortfolioPinterestMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Portfolio Pinterest Light",
};

const page = () => {
    return (
        <PortfolioPinterestMain />
    );
};

export default page;