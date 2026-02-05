import UniqueAIImageMain from '@/views/homes/unique-ai-image/UniqueAIImageMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - Unique AI Image Light",
};

const page = () => {
    return (
        <UniqueAIImageMain />
    );
};

export default page;
