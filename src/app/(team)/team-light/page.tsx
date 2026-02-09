import TeamMain from '@/views/team/team-light/TeamMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "OTS - Team Light",
};

const page = () => {
    return (
        <TeamMain />
    );
};

export default page;