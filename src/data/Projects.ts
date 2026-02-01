import { projectsDT } from '@/types/project-d-t';
import project1 from  "../../public/assets/img/home-03/project/project-2.jpg";
import project2 from  "../../public/assets/img/home-03/project/project-2.jpg";
import project3 from  "../../public/assets/img/home-03/project/project-2.jpg";
import project4 from  "../../public/assets/img/home-03/project/project-2.jpg";
import project5 from  "../../public/assets/img/home-03/project/project-2.jpg";
import project6 from  "../../public/assets/img/home-03/project/project-2.jpg";
import project7 from  "../../public/assets/img/home-03/project/project-2.jpg";
import project8 from  "../../public/assets/img/home-03/project/project-2.jpg";
import project9 from  "../../public/assets/img/home-03/project/project-2.jpg";

export const projects: projectsDT[] = [
    { id: 1, title: "Factory Freight Flow", slug: "factory-freight-flow", image: project1, description: "End-to-end factory logistics", categories: ["Logistics", "Door-to-Door", "Delivery"], link: "/projects/factory-freight-flow" },
    { id: 2, title: "Fresh Load Protocol", slug: "fresh-load-protocol", image: project2, description: "Temperature-controlled cargo", categories: ["FOB Shipping", "Exports", "Sea Freight"], link: "/projects/fresh-load-protocol" },
    { id: 3, title: "Portside Precision Flow", slug: "portside-precision-flow", image: project3, description: "Port operations optimization", categories: ["Ex-Works", "Supply Chain", "Logistics"], link: "/projects/portside-precision-flow" },
    { id: 4, title: "Heavy Cargo Move", slug: "heavy-cargo-move", image: project4, description: "Oversized load handling", categories: ["Freight", "International", "Transportation"], link: "/projects/heavy-cargo-move" },
    { id: 5, title: "Furniture Equipment Loadout", slug: "furniture-equipment-loadout", image: project5, description: "Specialized furniture logistics", categories: ["Air Freight", "Fast Delivery", "Cargo"], link: "/projects/furniture-equipment-loadout" },
    { id: 6, title: "Diplomatic Grade Seal", slug: "diplomatic-grade-seal", image: project6, description: "High-security international shipping", categories: ["Sea Freight", "Containers", "Global Shipping"], link: "/projects/diplomatic-grade-seal" },
    { id: 7, title: "Protected Auto Haul", slug: "protected-auto-haul", image: project7, description: "Automotive transport solutions", categories: ["Road Transport", "Domestic", "Logistics"], link: "/projects/protected-auto-haul" },
    { id: 8, title: "Single Car Load", slug: "single-car-load", image: project8, description: "Precision vehicle shipping", categories: ["Customs", "Compliance", "Documentation"], link: "/projects/single-car-load" },
    { id: 9, title: "Time Critical Air", slug: "time-critical-air", image: project9, description: "Express air freight delivery", categories: ["Warehousing", "Distribution", "Storage"], link: "/projects/time-critical-air" },
];

export function getProjectBySlug(slug: string): projectsDT | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.filter((p) => p.slug).map((p) => p.slug!);
}
