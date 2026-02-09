import PortfolioSlicerMain from '@/views/portfolios/portfolio-slicer/PortfolioSlicerMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "OTS - Portfolio Slicer Light",
};

const page = () => {
  return (
    <PortfolioSlicerMain />
  );
};

export default page;