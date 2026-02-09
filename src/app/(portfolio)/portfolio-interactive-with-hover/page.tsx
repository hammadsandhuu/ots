import PortfolioInteractiveHover from '@/views/portfolios/Portfolio-Interactive/PortfolioInteractiveHover';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Portfolio Interactive With Hover",
};

const page = () => {
    return (
        <PortfolioInteractiveHover />
    );
};

export default page;