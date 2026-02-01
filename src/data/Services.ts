import { servicesDT } from "@/types/service-d-t";

const Services: servicesDT[] = [
    {
        id: 1,
        title: "End-to-End Freight Management",
        slug: "end-to-end-freight-management",
        description:
            "We take full ownership of your cargo from origin to final delivery, managing every movement, document, and handover under a single point of accountability. Built for companies that value reliability, visibility, and control over fragmented logistics execution.",
        link: "/service/end-to-end-freight-management",
    },
    {
        id: 2,
        title: "Commercial Freight Solutions (Air, Sea, and Land)",
        slug: "commercial-freight-solutions",
        description:
            "Scalable air, sea, and land freight designed to support ongoing commercial supply chains with consistency and cost discipline. Ideal for businesses that require predictable performance across trade lanes without operational surprises.",
        link: "/service/commercial-freight-solutions",
    },
    {
        id: 3,
        title: "Project & Specialized Logistics",
        slug: "project-specialized-logistics",
        description:
            "End-to-end planning and execution for complex, non-routine shipments requiring coordination across multiple stakeholders and jurisdictions. Engineered for projects where timing, compliance, and precision are non-negotiable.",
        link: "/service/project-specialized-logistics",
    },
    {
        id: 4,
        title: "Heavy Lift & Out-of-Gauge Cargo",
        slug: "heavy-lift-out-of-gauge-cargo",
        description:
            "Specialized handling of oversized and overweight cargo, including route surveys, permits, equipment coordination, and controlled execution. Trusted for high-risk moves where engineering oversight and operational discipline define success.",
        link: "/service/heavy-lift-out-of-gauge-cargo",
    },
];

export default Services;

/** Get service by slug - returns undefined if not found */
export function getServiceBySlug(slug: string): servicesDT | undefined {
    return Services.find((s) => s.slug === slug);
}

/** Get all service slugs for static generation */
export function getAllServiceSlugs(): string[] {
    return Services.filter((s) => s.slug).map((s) => s.slug!);
}
