import StartupagencyMain from '@/views/homes/startup-agency/StartupagencyMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Startup agency Light",
};


const page = () => {
    return (
        <StartupagencyMain />
    );
};

export default page;