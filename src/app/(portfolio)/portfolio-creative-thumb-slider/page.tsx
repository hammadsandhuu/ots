import PortfolioCreativeThumbSlider from '@/views/portfolios/portfolio-creative/PortfolioCreativeThumbSlider';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Portfolio Creative Thumb Slider",
};

const page = () => {
    return (
        <PortfolioCreativeThumbSlider />
    );
};

export default page;