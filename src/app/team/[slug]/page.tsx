import TeamDetailsMain from '@/views/team/team-details/TeamDetailsMain';
import { getTeamMemberBySlug, getAllTeamSlugs } from '@/data/Team';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// Only allow statically generated slugs
export const dynamicParams = false;

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const slugs = getAllTeamSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const member = getTeamMemberBySlug(slug);
    return {
        title: member ? `Agntix - ${member.name}` : "Agntix - Team Details",
    };
}

const TeamDetailPage = async ({ params }: PageProps) => {
    const { slug } = await params;
    const member = getTeamMemberBySlug(slug);

    if (!member) {
        notFound();
    }

    return <TeamDetailsMain member={member} />;
};

export default TeamDetailPage;
