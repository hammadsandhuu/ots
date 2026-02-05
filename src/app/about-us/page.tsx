import AboutUsLightMain from '@/views/about-us/AboutUsLightMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Agntix - About Us light",
};

const page = () => {
    return (
        <AboutUsLightMain />
    );
};

export default page;