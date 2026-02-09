import PortfolioSlicerElegant from '@/views/portfolios/portfolio-slider-elegant/PortfolioSlicerElegant';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "OTS - Portfolio Slicer elegant Light",
};

const page = () => {
  return (
    <PortfolioSlicerElegant />
  );
};

export default page;