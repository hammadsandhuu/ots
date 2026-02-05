import ServiceDetailsTwoMain from '@/views/services/service-details/ServiceDetailsTwoMain';
import { getServiceDetailBySlug, getAllServiceDetailSlugs } from '@/data/serviceDetailsData';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceDetailBySlug(slug);
    if (!service) return { title: "Agntix - Service Not Found" };
    return { title: `Agntix - ${service.title}` };
}

export function generateStaticParams() {
    return getAllServiceDetailSlugs().map((slug) => ({ slug }));
}

const ServiceDetailPage = async ({ params }: Props) => {
    const { slug } = await params;
    const service = getServiceDetailBySlug(slug);

    if (!service) {
        notFound();
    }

    return <ServiceDetailsTwoMain service={service} />;
};

export default ServiceDetailPage;