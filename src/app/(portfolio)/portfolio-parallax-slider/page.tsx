import PortfolioParallaxSlider from '@/views/portfolios/portfolio-parallax-slider/PortfolioParallaxSlider';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Portfolio Parallax Slider",
};

const page = () => {
    return (
        <PortfolioParallaxSlider />
    );
};

export default page;