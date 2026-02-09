
import PortfolioWebglMain from '@/views/portfolios/portfolio-webgl/PortfolioWebglMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Portfolio Webgl Showcase",
};

const page = () => {
    return (
        <PortfolioWebglMain />
    );
};

export default page;