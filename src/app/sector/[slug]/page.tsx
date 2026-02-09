import SectorDetail from '@/views/sector/SectorDetail';
import { getSectorBySlug, getAllSectorSlugs } from '@/data/sectors/Sectors';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Only allow statically generated slugs
export const dynamicParams = false;

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const slugs = getAllSectorSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const sector = getSectorBySlug(slug);
    return {
        title: sector ? `OTS - ${sector.title}` : "OTS - Sector Detail",
    };
}

const SectorDetailPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    const sector = getSectorBySlug(slug);

    if (!sector) {
        notFound();
    }

    return <SectorDetail sector={sector} />;
};

export default SectorDetailPage;
