import AboutUsLightMain from '@/views/about-us/AboutUsLightMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - About Us light",
};

const page = () => {
    return (
        <AboutUsLightMain />
    );
};

export default page;