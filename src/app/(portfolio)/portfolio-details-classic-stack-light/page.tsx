import PortfolioDetailsClassic from '@/views/portfolios/portfolio-details-classic-stack/PortfolioDetailsClassic';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - Portfolio details classic Light",
};

const page = () => {
    return (
        <PortfolioDetailsClassic />
    );
};

export default page;