import PersonalPortfolioMain from '@/views/homes/personal-portfolio/PersonalPortfolioMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Personal Portfolio Light",
};

const page = () => {
    return (
        <PersonalPortfolioMain />
    );
};

export default page;