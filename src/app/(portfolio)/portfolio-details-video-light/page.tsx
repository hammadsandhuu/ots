import PortfolioDetailsVideo from '@/views/portfolios/portfolio-details-video/PortfolioDetailsVideo';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Portfolio Details Video Light",
};

const page = () => {
    return (
        <PortfolioDetailsVideo />
    );
};

export default page;



