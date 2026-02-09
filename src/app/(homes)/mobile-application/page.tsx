import MobileApplicationMain from '@/views/homes/mobile-application/MobileApplicationMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Mobile Application Light",
};

const page = () => {
    return (
        <MobileApplicationMain />
    );
};

export default page;