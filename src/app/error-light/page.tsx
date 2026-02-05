import ErrorMain from '@/views/error/ErrorMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - Not Found Page",
};

const page = () => {
    return (
        <ErrorMain />
    );
};

export default page;