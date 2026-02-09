import PortfolioInteractiveScroll from '@/views/portfolios/portfolio-interactive-scroll/PortfolioInteractiveScroll';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Portfolio Interactive With Scroll",
};

const page = () => {
    return (
        <PortfolioInteractiveScroll />
    );
};

export default page;