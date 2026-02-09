import DesignStudioMain from '@/views/homes/design-studio/DesignStudioMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Design Studio Light",
};

const page = () => {
    return (
        <DesignStudioMain />
    );
};

export default page;