
import FashionStudioMain from '@/views/homes/fashion-studio/FashionStudioMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Fashion Studio Light",
};

const page = () => {
    return (
        <FashionStudioMain />
    );
};

export default page;