import ITSolutionMain from '@/views/homes/it-solution/ITSolutionMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - IT Solution Light",
};

const page = () => {
    return (
        <ITSolutionMain />
    );
};

export default page;