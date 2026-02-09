import PortfolioColFourMain from '@/views/portfolio/PortfolioColFourMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Portfolio Col 4 Light",
};

const page = () => {
    return (
        <PortfolioColFourMain />
    );
};

export default page;