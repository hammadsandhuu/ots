import FaqMain from '@/views/faq/FaqMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Faq Light",
};

const page = () => {
    return (
        <FaqMain />
    );
};

export default page;