import ContactUsMain from '@/views/contact-us/ContactUsMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Contact Us Light",
};

const page = () => {
    return (
        <ContactUsMain />
    );
};

export default page;