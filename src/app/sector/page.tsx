import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import sectors from '@/data/sectors/Sectors';

export const metadata: Metadata = {
    title: "Agntix - Sectors",
};

const SectorsPage = () => {
    // Redirect to the first sector if no slug provided
    const firstSector = sectors[0];
    if (firstSector) {
        redirect(firstSector.link);
    }
    return null;
};

export default SectorsPage;



