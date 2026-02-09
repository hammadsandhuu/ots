import PortfolioCreativeTextSlider from '@/views/portfolios/portfolio-creative-text-slider/PortfolioCreativeTextSlider';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Portfolio Creative Text Slider",
};

const page = () => {
    return (
        <PortfolioCreativeTextSlider />
    );
};

export default page;