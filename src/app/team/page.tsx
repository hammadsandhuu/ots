import { redirect } from 'next/navigation';
import { teamMembers } from '@/data/Team';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "OTS - Team Details",
};

const page = () => {
  const firstMember = teamMembers[0];
  if (firstMember) {
    redirect(firstMember.link);
  }
  return null;
};

export default page;