import { TeamMember } from "@/types/team-d-t";
import team1 from "../../public/assets/img/home-02/team/team-1.jpg";
import team2 from "../../public/assets/img/home-02/team/team-2.jpg";
import team3 from "../../public/assets/img/home-02/team/team-3.jpg";
import team4 from "../../public/assets/img/home-02/team/team-5.jpg";

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Logan Dang",
    position: "CEO & Founder",
    image: team1,
    link: "/team-details-light",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 2,
    name: "Sophia Martinez",
    position: "Operations Manager",
    image: team2,
    link: "/team-details-light",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 3,
    name: "Daniel Chen",
    position: "Logistics Coordinator",
    image: team3,
    link: "/team-details-light",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    id: 4,
    name: "Emily Johnson",
    position: "Supply Chain Manager",
    image: team4,
    link: "/team-details-light",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];
