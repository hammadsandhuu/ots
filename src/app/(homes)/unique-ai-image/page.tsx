import UniqueAIImageMain from '@/views/homes/unique-ai-image/UniqueAIImageMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Unique AI Image Light",
};

const page = () => {
    return (
        <UniqueAIImageMain />
    );
};

export default page;
