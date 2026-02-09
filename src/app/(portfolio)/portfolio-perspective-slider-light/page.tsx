import PortfolioPerspectiveSlider from '@/views/portfolios/portfolio-perspective-slider/PortfolioPerspectiveSlider';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Portfolio Perspective Slider",
};

const page = () => {
    return (
        <PortfolioPerspectiveSlider />
    );
};

export default page;