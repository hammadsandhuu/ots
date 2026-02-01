import { StaticImageData } from "next/image";
import { ProjectDetailData } from "@/types/project-d-t";
import { projects } from "./Projects";
import pdThumb1 from "../../public/assets/img/home-03/project/project-2.jpg";
import pdThumb2 from "../../public/assets/img/home-03/project/project-2.jpg";
import pdThumb3 from "../../public/assets/img/home-03/project/project-2.jpg";
import pdThumb4 from "../../public/assets/img/home-03/project/project-2.jpg";
import pdThumb5 from "../../public/assets/img/home-03/project/project-2.jpg";
import pdThumb6 from "../../public/assets/img/home-03/project/project-2.jpg";
import pdThumb7 from "../../public/assets/img/home-03/project/project-2.jpg";

const clients = ["Global Freight Corp", "Ocean Logistics Ltd", "Port Authority", "Heavy Haul Inc", "Swift Furniture Co", "Diplomatic Cargo", "Auto Transport Pro", "Premium Vehicles", "Express Air Freight"];
const durations = ["Q3 2024", "Q2 2024", "Q4 2024", "Q1 2025", "Q3 2024", "Q2 2025", "Q4 2024", "Q1 2024", "Q2 2024"];

const brandOverviews = [
    {
        paragraphs: [
            "Factory Freight Flow delivers end-to-end logistics for manufacturing operations. We designed a supply chain solution that connects production facilities with distribution centers, ensuring seamless material flow and just-in-time delivery.",
            "The system integrates real-time tracking, inventory management, and carrier coordination into a single platform—eliminating bottlenecks and reducing lead times across the entire factory network.",
        ],
        features: ["Origin-to-destination freight management", "Real-time cargo tracking and visibility", "Integrated customs and documentation"],
    },
    {
        paragraphs: [
            "Fresh Load Protocol handles temperature-controlled cargo for perishable goods. From pharmaceuticals to fresh produce, we built a cold-chain logistics network with certified compliance.",
            "Our solution combines specialized equipment, monitoring systems, and expedited customs clearance to maintain product integrity from pickup through final delivery.",
        ],
        features: ["Temperature-controlled transportation", "Cold-chain compliance and monitoring", "Expedited customs and clearance"],
    },
    {
        paragraphs: [
            "Portside Precision Flow optimizes port operations and terminal logistics. We engineered a solution that reduces dwell time, streamlines container handling, and improves vessel turnaround.",
            "The platform coordinates between shipping lines, terminal operators, and inland transport—creating visibility and efficiency across the entire port ecosystem.",
        ],
        features: ["Port and terminal coordination", "Container tracking and optimization", "Inland transport integration"],
    },
    {
        paragraphs: [
            "Heavy Cargo Move specializes in oversized and heavy-lift logistics. We designed a solution for industrial equipment, machinery, and project cargo—with route surveys, permit management, and specialized equipment coordination.",
            "Every shipment is planned with engineering precision, from load studies to final positioning, ensuring safe and compliant transport of high-value cargo.",
        ],
        features: ["Route surveys and permit management", "Specialized equipment coordination", "Engineered load planning"],
    },
    {
        paragraphs: [
            "Furniture Equipment Loadout provides white-glove logistics for furniture and equipment. We handle pickup, warehousing, and final installation—protecting products and meeting strict delivery windows.",
            "Our team manages everything from packaging and crating to assembly and placement, delivering a seamless experience for commercial and residential projects.",
        ],
        features: ["White-glove delivery and installation", "Packaging and crating services", "Warehouse and staging support"],
    },
    {
        paragraphs: [
            "Diplomatic Grade Seal delivers high-security international shipping for sensitive cargo. We provide chain-of-custody documentation, tamper-evident sealing, and dedicated handling from origin to destination.",
            "The service meets the strictest compliance requirements for government, diplomatic, and high-value shipments—with full audit trails and secure storage.",
        ],
        features: ["Chain-of-custody documentation", "Tamper-evident sealing and tracking", "Secure handling and storage"],
    },
    {
        paragraphs: [
            "Protected Auto Haul specializes in automotive transport—from finished vehicles to parts and components. We provide enclosed carriers, multi-level racking, and damage-free handling.",
            "Our network covers domestic and cross-border routes, with real-time tracking and delivery confirmation for dealers, manufacturers, and private owners.",
        ],
        features: ["Enclosed and open carrier options", "Damage-free handling protocols", "Dealer and manufacturer networks"],
    },
    {
        paragraphs: [
            "Single Car Load offers precision vehicle shipping for individual units. Whether classic cars, luxury vehicles, or specialty machinery, we provide door-to-door service with personalized care.",
            "Each shipment receives a dedicated coordinator, custom routing, and full insurance—ensuring your vehicle arrives exactly as it left.",
        ],
        features: ["Door-to-door vehicle transport", "Dedicated coordinator per shipment", "Full insurance and documentation"],
    },
    {
        paragraphs: [
            "Time Critical Air delivers express air freight for urgent shipments. We secure priority space on commercial and charter flights, with same-day and next-day options across major trade lanes.",
            "Our global network of airport partners ensures your cargo moves fast—with real-time updates from pickup through customs clearance and final delivery.",
        ],
        features: ["Priority air freight and charters", "Same-day and next-day options", "Global airport network access"],
    },
];

export const projectDetailsData: ProjectDetailData[] = projects.map((p, i) => ({
    ...p,
    info: [
        { label: "Client", value: p.client ?? clients[i] ?? `Client ${p.id}` },
        { label: "Role", value: p.categories?.[0] ?? "Logistics" },
        { label: "Duration", value: p.year ?? durations[i] ?? "2024-2025" },
        { label: "Designer", value: "Agntix" },
    ],
    bannerImage: (p.image as StaticImageData) ?? pdThumb1,
    sliderImages: (() => {
        const projImg = p.image as StaticImageData;
        const sets = [
            [projImg, pdThumb2, pdThumb3, pdThumb4],
            [projImg, pdThumb3, pdThumb4, pdThumb5],
            [projImg, pdThumb4, pdThumb5, pdThumb6],
            [projImg, pdThumb5, pdThumb6, pdThumb7],
            [projImg, pdThumb6, pdThumb7, pdThumb2],
            [projImg, pdThumb7, pdThumb2, pdThumb3],
            [projImg, pdThumb2, pdThumb4, pdThumb6],
            [projImg, pdThumb3, pdThumb5, pdThumb7],
            [projImg, pdThumb4, pdThumb6, pdThumb2],
        ];
        return sets[i] ?? [projImg, pdThumb2, pdThumb3];
    })(),
    thumbImages: (() => {
        const projImg = p.image as StaticImageData;
        const sets = [
            [projImg, pdThumb6, pdThumb7],
            [pdThumb5, projImg, pdThumb7],
            [pdThumb6, pdThumb7, projImg],
            [projImg, pdThumb3, pdThumb4],
            [pdThumb3, projImg, pdThumb5],
            [pdThumb4, pdThumb5, projImg],
            [projImg, pdThumb7, pdThumb2],
            [pdThumb6, projImg, pdThumb4],
            [pdThumb7, pdThumb3, projImg],
        ];
        return sets[i] ?? [projImg, pdThumb6, pdThumb7];
    })(),
    brandOverview: brandOverviews[i] ?? {
        paragraphs: [p.description ?? `Overview of ${p.title}.`],
        features: p.categories ?? ["Logistics", "Freight", "Delivery"],
    },
}));

export function getProjectDetailBySlug(slug: string): ProjectDetailData | undefined {
    return projectDetailsData.find((p) => p.slug === slug);
}

export function getAllProjectDetailSlugs(): string[] {
    return projectDetailsData.filter((p) => p.slug).map((p) => p.slug!);
}
