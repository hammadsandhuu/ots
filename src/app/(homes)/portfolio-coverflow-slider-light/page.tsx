import PortfolioCoverflowMain from '@/views/portfolios/portfolio-coverflow/PortfolioCoverflowMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "OTS - Portfolio Coverflow Slider Light",
};

const page = () => {
  return (
    <PortfolioCoverflowMain />
  );
};

export default page;