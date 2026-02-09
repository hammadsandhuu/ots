import { TeamMemberDetail } from "@/types/team-d-t";
import team1 from "../../public/assets/img/home-02/team/team-1.jpg";
import team2 from "../../public/assets/img/home-02/team/team-2.jpg";
import team3 from "../../public/assets/img/home-02/team/team-3.jpg";
import team4 from "../../public/assets/img/home-02/team/team-5.jpg";
import teamDetail from "../../public/assets/img/team/team-details.jpg";

export const teamMembers: TeamMemberDetail[] = [
  {
    id: 1,
    name: "Logan Dang",
    slug: "logan-dang",
    position: "CEO & Founder",
    image: team1,
    detailImage: teamDetail,
    link: "/team/logan-dang",
    phone: "+(302) 555-0107",
    email: "logan@otsksa.com",
    bio: "With over 15 years of experience in global logistics, Logan founded OTS with a vision to revolutionize freight management. His expertise in supply chain optimization and strategic partnerships has helped hundreds of businesses streamline their operations.",
    details: {
      location: "Dubai, UAE",
      age: "42",
      qualification: "MBA, Supply Chain Management",
      gender: "Male"
    },
    experience: [
      "Founder & CEO at OTS (2018-Present)",
      "VP Operations at Global Freight Solutions (2012-2018)",
      "Logistics Manager at DHL Express (2008-2012)",
      "Supply Chain Analyst at Maersk (2005-2008)"
    ],
    skills: [
      { name: "Strategic Planning", percentage: 95 },
      { name: "Supply Chain Management", percentage: 90 },
      { name: "Business Development", percentage: 88 },
      { name: "Team Leadership", percentage: 92 }
    ],
    stats: {
      projectsCompleted: 2500,
      achievements: 15,
      yearsExperience: 17,
      happyCustomers: 98
    },
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Sophia Martinez",
    slug: "sophia-martinez",
    position: "Operations Manager",
    image: team2,
    detailImage: teamDetail,
    link: "/team/sophia-martinez",
    phone: "+(302) 555-0208",
    email: "sophia@otsksa.com",
    bio: "Sophia brings exceptional operational expertise to OTS, ensuring seamless coordination across all logistics operations. Her background in process optimization and quality management has significantly improved our service delivery standards.",
    details: {
      location: "Abu Dhabi, UAE",
      age: "36",
      qualification: "MSc, Operations Management",
      gender: "Female"
    },
    experience: [
      "Operations Manager at OTS (2020-Present)",
      "Senior Operations Lead at FedEx (2015-2020)",
      "Operations Coordinator at UPS (2012-2015)",
      "Quality Analyst at Amazon Logistics (2010-2012)"
    ],
    skills: [
      { name: "Operations Management", percentage: 92 },
      { name: "Process Optimization", percentage: 88 },
      { name: "Quality Control", percentage: 90 },
      { name: "Team Coordination", percentage: 85 }
    ],
    stats: {
      projectsCompleted: 1800,
      achievements: 12,
      yearsExperience: 14,
      happyCustomers: 96
    },
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "Daniel Chen",
    slug: "daniel-chen",
    position: "Logistics Coordinator",
    image: team3,
    detailImage: teamDetail,
    link: "/team/daniel-chen",
    phone: "+(302) 555-0309",
    email: "daniel@otsksa.com",
    bio: "Daniel excels at coordinating complex multi-modal shipments across international borders. His expertise in customs regulations and trade compliance ensures smooth cargo movement for our clients' most challenging logistics requirements.",
    details: {
      location: "Dubai, UAE",
      age: "32",
      qualification: "BBA, International Trade",
      gender: "Male"
    },
    experience: [
      "Logistics Coordinator at OTS (2021-Present)",
      "Freight Coordinator at Kuehne + Nagel (2017-2021)",
      "Shipping Agent at DB Schenker (2014-2017)",
      "Customs Specialist at Aramex (2012-2014)"
    ],
    skills: [
      { name: "Freight Coordination", percentage: 90 },
      { name: "Customs Compliance", percentage: 88 },
      { name: "Route Planning", percentage: 85 },
      { name: "Documentation", percentage: 92 }
    ],
    stats: {
      projectsCompleted: 1200,
      achievements: 8,
      yearsExperience: 12,
      happyCustomers: 94
    },
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 4,
    name: "Emily Johnson",
    slug: "emily-johnson",
    position: "Supply Chain Manager",
    image: team4,
    detailImage: teamDetail,
    link: "/team/emily-johnson",
    phone: "+(302) 555-0410",
    email: "emily@otsksa.com",
    bio: "Emily leads our supply chain strategy, leveraging data analytics and technology to optimize inventory management and distribution networks. Her innovative approach has helped clients achieve significant cost savings while improving delivery performance.",
    details: {
      location: "Sharjah, UAE",
      age: "38",
      qualification: "MBA, Supply Chain Analytics",
      gender: "Female"
    },
    experience: [
      "Supply Chain Manager at OTS (2019-Present)",
      "Supply Chain Analyst at CEVA Logistics (2015-2019)",
      "Procurement Specialist at Agility (2011-2015)",
      "Inventory Planner at Emirates Group (2008-2011)"
    ],
    skills: [
      { name: "Supply Chain Strategy", percentage: 94 },
      { name: "Data Analytics", percentage: 90 },
      { name: "Inventory Management", percentage: 88 },
      { name: "Vendor Relations", percentage: 86 }
    ],
    stats: {
      projectsCompleted: 1500,
      achievements: 10,
      yearsExperience: 16,
      happyCustomers: 97
    },
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];

export function getTeamMemberBySlug(slug: string): TeamMemberDetail | undefined {
  return teamMembers.find((member) => member.slug === slug);
}

export function getAllTeamSlugs(): string[] {
  return teamMembers.map((member) => member.slug);
}

export function getOtherTeamMembers(currentSlug: string, count: number = 3): TeamMemberDetail[] {
  return teamMembers.filter((member) => member.slug !== currentSlug).slice(0, count);
}
