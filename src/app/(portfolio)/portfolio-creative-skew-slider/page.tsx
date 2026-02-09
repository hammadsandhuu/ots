import PortfolioCreativeSkewSlider from '@/views/portfolios/portfolio-skew-slider/PortfolioCreativeSkewSlider';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Portfolio Creative skew Slider",
};

const page = () => {
    return (
        <PortfolioCreativeSkewSlider />
    );
};

export default page;