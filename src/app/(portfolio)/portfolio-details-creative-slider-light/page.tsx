import { redirect } from 'next/navigation';
import { Metadata } from 'next';
import sectors from '@/data/sectors/Sectors';

export const metadata: Metadata = {
    title: "Agntix - Portfolio Details Creative Slider Light",
};

const page = () => {
    // Redirect to the first sector
    const firstSector = sectors[0];
    if (firstSector) {
        redirect(firstSector.link);
    }
    return null;
};

export default page;



