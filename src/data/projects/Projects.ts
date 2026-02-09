import { ProjectDetailData } from '@/types/project-d-t';
import project1 from "../../../public/assets/img/home-03/projects/1.png";
import project2 from "../../../public/assets/img/home-03/projects/2.png";
import project3 from "../../../public/assets/img/home-03/projects/3.png";
import project4 from "../../../public/assets/img/home-03/projects/4.png";
import project5 from "../../../public/assets/img/home-03/projects/5.png";
import project6 from "../../../public/assets/img/home-03/projects/6.png";
import project7 from "../../../public/assets/img/home-03/projects/7.png";
import project8 from "../../../public/assets/img/home-03/projects/8.png";
import project9 from "../../../public/assets/img/home-03/projects/9.png";

// Banner and gallery images
import bannerImage from "../../../public/assets/img/portfolio/portfolio-details-2/portfolio-details-thumb-1.jpg";
import sliderImg1 from "../../../public/assets/img/portfolio/portfolio-details-2/portfolio-details-thumb-2.jpg";
import sliderImg2 from "../../../public/assets/img/portfolio/portfolio-details-2/portfolio-details-thumb-3.jpg";
import sliderImg3 from "../../../public/assets/img/portfolio/portfolio-details-2/portfolio-details-thumb-4.jpg";
import thumbImg1 from "../../../public/assets/img/portfolio/portfolio-details-2/portfolio-details-thumb-5.jpg";
import thumbImg2 from "../../../public/assets/img/portfolio/portfolio-details-2/portfolio-details-thumb-6.jpg";
import thumbImg3 from "../../../public/assets/img/portfolio/portfolio-details-2/portfolio-details-thumb-7.jpg";

export const projects: ProjectDetailData[] = [
    {
        id: 1,
        title: "Factory Freight Flow",
        slug: "factory-freight-flow",
        image: project1,
        description: "End-to-end factory logistics",
        categories: ["Logistics", "Door-to-Door", "Delivery"],
        link: "/projects/factory-freight-flow",
        info: [
            { label: 'Client', value: 'Global Manufacturing Inc.' },
            { label: 'Role', value: 'Logistics Planning' },
            { label: 'Duration', value: '6 Months' },
            { label: 'Team', value: 'OTS Solutions' },
        ],
        bannerImage: bannerImage,
        brandOverview: {
            paragraphs: [
                "Factory Freight Flow is a comprehensive logistics solution designed to streamline the entire supply chain from factory floor to final destination. Our approach focuses on efficiency, cost reduction, and timely delivery.",
                "We implemented real-time tracking systems and optimized routing algorithms to reduce transit times by 35%. The solution integrates seamlessly with existing warehouse management systems.",
            ],
            features: [
                "End-to-end supply chain management",
                "Real-time tracking and monitoring",
                "Automated inventory management",
            ],
        },
        overviewSteps: [
            { title: 'Planning', description: 'Comprehensive analysis of logistics requirements and route optimization for maximum efficiency.' },
            { title: 'Implementation', description: 'Deployment of tracking systems and integration with existing warehouse infrastructure.' },
            { title: 'Optimization', description: 'Continuous monitoring and improvement of delivery routes and timing.' },
        ],
        sliderImages: [sliderImg1, sliderImg2, sliderImg3, sliderImg1, sliderImg2],
        thumbImages: [thumbImg1, thumbImg2, thumbImg3],
    },
    {
        id: 2,
        title: "Fresh Load Protocol",
        slug: "fresh-load-protocol",
        image: project2,
        description: "Temperature-controlled cargo",
        categories: ["FOB Shipping", "Exports", "Sea Freight"],
        link: "/projects/fresh-load-protocol",
        info: [
            { label: 'Client', value: 'Fresh Foods Co.' },
            { label: 'Role', value: 'Cold Chain Logistics' },
            { label: 'Duration', value: '4 Months' },
            { label: 'Team', value: 'OTS Cold Chain' },
        ],
        bannerImage: bannerImage,
        brandOverview: {
            paragraphs: [
                "Fresh Load Protocol ensures that temperature-sensitive goods maintain their quality throughout the entire shipping process. Our specialized cold chain solutions guarantee product integrity from origin to destination.",
                "Using advanced refrigeration technology and IoT sensors, we monitor and maintain optimal temperatures 24/7, ensuring compliance with food safety regulations.",
            ],
            features: [
                "Temperature monitoring systems",
                "Cold chain compliance tracking",
                "Quality assurance protocols",
            ],
        },
        overviewSteps: [
            { title: 'Assessment', description: 'Evaluating product requirements and establishing temperature parameters for safe transport.' },
            { title: 'Infrastructure', description: 'Setting up refrigerated containers and monitoring equipment throughout the route.' },
            { title: 'Monitoring', description: 'Real-time temperature tracking and immediate response to any deviations.' },
        ],
        sliderImages: [sliderImg1, sliderImg2, sliderImg3, sliderImg1, sliderImg2],
        thumbImages: [thumbImg1, thumbImg2, thumbImg3],
    },
    {
        id: 3,
        title: "Portside Precision Flow",
        slug: "portside-precision-flow",
        image: project3,
        description: "Port operations optimization",
        categories: ["Ex-Works", "Supply Chain", "Logistics"],
        link: "/projects/portside-precision-flow",
        info: [
            { label: 'Client', value: 'Harbor Industries' },
            { label: 'Role', value: 'Port Operations' },
            { label: 'Duration', value: '8 Months' },
            { label: 'Team', value: 'OTS Maritime' },
        ],
        bannerImage: bannerImage,
        brandOverview: {
            paragraphs: [
                "Portside Precision Flow revolutionizes port operations through smart automation and efficient cargo handling. Our solution reduces vessel turnaround time and maximizes throughput capacity.",
                "By implementing predictive analytics and automated scheduling, we help ports handle more cargo with fewer delays and reduced operational costs.",
            ],
            features: [
                "Automated cargo handling systems",
                "Predictive vessel scheduling",
                "Real-time port analytics dashboard",
            ],
        },
        overviewSteps: [
            { title: 'Analysis', description: 'Comprehensive study of port operations and identification of bottlenecks.' },
            { title: 'Automation', description: 'Implementing automated systems for cargo handling and vessel scheduling.' },
            { title: 'Integration', description: 'Connecting all port systems for seamless information flow and decision making.' },
        ],
        sliderImages: [sliderImg1, sliderImg2, sliderImg3, sliderImg1, sliderImg2],
        thumbImages: [thumbImg1, thumbImg2, thumbImg3],
    },
    {
        id: 4,
        title: "Heavy Cargo Move",
        slug: "heavy-cargo-move",
        image: project4,
        description: "Oversized load handling",
        categories: ["Freight", "International", "Transportation"],
        link: "/projects/heavy-cargo-move",
        info: [
            { label: 'Client', value: 'Heavy Industries Corp.' },
            { label: 'Role', value: 'Specialized Transport' },
            { label: 'Duration', value: '3 Months' },
            { label: 'Team', value: 'OTS Heavy Lift' },
        ],
        bannerImage: bannerImage,
        brandOverview: {
            paragraphs: [
                "Heavy Cargo Move specializes in transporting oversized and heavy equipment that requires specialized handling. Our expertise ensures safe delivery of machinery, industrial equipment, and large-scale infrastructure components.",
                "We coordinate with authorities for permits, plan routes carefully, and use specialized equipment to handle loads that standard carriers cannot transport.",
            ],
            features: [
                "Specialized heavy-lift equipment",
                "Route planning and permits",
                "Project cargo management",
            ],
        },
        overviewSteps: [
            { title: 'Survey', description: 'Detailed assessment of cargo dimensions, weight, and transport requirements.' },
            { title: 'Permits', description: 'Obtaining all necessary permits and coordinating with local authorities.' },
            { title: 'Execution', description: 'Safe transport with specialized equipment and trained personnel.' },
        ],
        sliderImages: [sliderImg1, sliderImg2, sliderImg3, sliderImg1, sliderImg2],
        thumbImages: [thumbImg1, thumbImg2, thumbImg3],
    },
    {
        id: 5,
        title: "Furniture Equipment Loadout",
        slug: "furniture-equipment-loadout",
        image: project5,
        description: "Specialized furniture logistics",
        categories: ["Air Freight", "Fast Delivery", "Cargo"],
        link: "/projects/furniture-equipment-loadout",
        info: [
            { label: 'Client', value: 'Luxury Interiors Ltd.' },
            { label: 'Role', value: 'White Glove Service' },
            { label: 'Duration', value: '2 Months' },
            { label: 'Team', value: 'OTS Premium' },
        ],
        bannerImage: bannerImage,
        brandOverview: {
            paragraphs: [
                "Furniture Equipment Loadout provides premium white-glove service for high-value furniture and delicate equipment. Every piece is handled with extreme care, from packaging to final placement.",
                "Our specialized team is trained in handling antiques, art pieces, and designer furniture, ensuring they arrive in perfect condition.",
            ],
            features: [
                "White glove handling service",
                "Custom packaging solutions",
                "Installation and placement",
            ],
        },
        overviewSteps: [
            { title: 'Packaging', description: 'Custom crating and protective packaging for each unique piece.' },
            { title: 'Transport', description: 'Climate-controlled vehicles with air-ride suspension for smooth transit.' },
            { title: 'Placement', description: 'Professional unpacking and precise placement at the destination.' },
        ],
        sliderImages: [sliderImg1, sliderImg2, sliderImg3, sliderImg1, sliderImg2],
        thumbImages: [thumbImg1, thumbImg2, thumbImg3],
    },
    {
        id: 6,
        title: "Diplomatic Grade Seal",
        slug: "diplomatic-grade-seal",
        image: project6,
        description: "High-security international shipping",
        categories: ["Sea Freight", "Containers", "Global Shipping"],
        link: "/projects/diplomatic-grade-seal",
        info: [
            { label: 'Client', value: 'Confidential' },
            { label: 'Role', value: 'Secure Logistics' },
            { label: 'Duration', value: '12 Months' },
            { label: 'Team', value: 'OTS Secure' },
        ],
        bannerImage: bannerImage,
        brandOverview: {
            paragraphs: [
                "Diplomatic Grade Seal provides the highest level of security for sensitive shipments. Our protocols meet and exceed international standards for secure cargo handling.",
                "From tamper-proof seals to armed escorts and real-time monitoring, we ensure complete chain of custody for valuable and sensitive materials.",
            ],
            features: [
                "Tamper-proof security seals",
                "Armed escort services",
                "Complete chain of custody",
            ],
        },
        overviewSteps: [
            { title: 'Security Assessment', description: 'Comprehensive risk analysis and security protocol development.' },
            { title: 'Secure Handling', description: 'Implementation of multi-layer security measures throughout transport.' },
            { title: 'Verification', description: 'End-to-end tracking and verification of seal integrity.' },
        ],
        sliderImages: [sliderImg1, sliderImg2, sliderImg3, sliderImg1, sliderImg2],
        thumbImages: [thumbImg1, thumbImg2, thumbImg3],
    },
    {
        id: 7,
        title: "Protected Auto Haul",
        slug: "protected-auto-haul",
        image: project7,
        description: "Automotive transport solutions",
        categories: ["Road Transport", "Domestic", "Logistics"],
        link: "/projects/protected-auto-haul",
        info: [
            { label: 'Client', value: 'Premium Motors' },
            { label: 'Role', value: 'Vehicle Transport' },
            { label: 'Duration', value: '5 Months' },
            { label: 'Team', value: 'OTS Auto' },
        ],
        bannerImage: bannerImage,
        brandOverview: {
            paragraphs: [
                "Protected Auto Haul offers premium vehicle transport services for dealerships, collectors, and individuals. Our enclosed carriers protect vehicles from weather, debris, and road hazards.",
                "We specialize in transporting luxury, classic, and exotic vehicles with the care and attention they deserve.",
            ],
            features: [
                "Enclosed transport carriers",
                "GPS tracking for every vehicle",
                "Comprehensive insurance coverage",
            ],
        },
        overviewSteps: [
            { title: 'Inspection', description: 'Detailed pre-transport inspection and documentation of vehicle condition.' },
            { title: 'Secure Loading', description: 'Careful loading using soft straps and wheel nets to prevent damage.' },
            { title: 'Delivery', description: 'Safe delivery with final inspection and condition verification.' },
        ],
        sliderImages: [sliderImg1, sliderImg2, sliderImg3, sliderImg1, sliderImg2],
        thumbImages: [thumbImg1, thumbImg2, thumbImg3],
    },
    {
        id: 8,
        title: "Single Car Load",
        slug: "single-car-load",
        image: project8,
        description: "Precision vehicle shipping",
        categories: ["Customs", "Compliance", "Documentation"],
        link: "/projects/single-car-load",
        info: [
            { label: 'Client', value: 'Individual Collectors' },
            { label: 'Role', value: 'Personal Auto Transport' },
            { label: 'Duration', value: '1 Month' },
            { label: 'Team', value: 'OTS Personal' },
        ],
        bannerImage: bannerImage,
        brandOverview: {
            paragraphs: [
                "Single Car Load provides dedicated transport for individual vehicles, ensuring personal attention and direct delivery without multiple stops or handling.",
                "Perfect for collectors, relocations, or purchasing vehicles from distant locations, our single-car service offers flexibility and peace of mind.",
            ],
            features: [
                "Dedicated single-vehicle transport",
                "Door-to-door service",
                "Flexible scheduling options",
            ],
        },
        overviewSteps: [
            { title: 'Scheduling', description: 'Flexible pickup and delivery times to match your schedule.' },
            { title: 'Direct Transport', description: 'Single vehicle focus means no waiting at terminals or hubs.' },
            { title: 'Handover', description: 'Personal delivery with walk-around inspection at destination.' },
        ],
        sliderImages: [sliderImg1, sliderImg2, sliderImg3, sliderImg1, sliderImg2],
        thumbImages: [thumbImg1, thumbImg2, thumbImg3],
    },
    {
        id: 9,
        title: "Time Critical Air",
        slug: "time-critical-air",
        image: project9,
        description: "Express air freight delivery",
        categories: ["Warehousing", "Distribution", "Storage"],
        link: "/projects/time-critical-air",
        info: [
            { label: 'Client', value: 'Tech Industries' },
            { label: 'Role', value: 'Express Air Freight' },
            { label: 'Duration', value: '24-48 Hours' },
            { label: 'Team', value: 'OTS Express' },
        ],
        bannerImage: bannerImage,
        brandOverview: {
            paragraphs: [
                "Time Critical Air delivers when every minute counts. Our express air freight service ensures urgent shipments reach their destination in the shortest possible time.",
                "From medical supplies to emergency parts, we coordinate with airlines and customs to expedite delivery and eliminate delays.",
            ],
            features: [
                "Same-day and next-day delivery",
                "Priority customs clearance",
                "Real-time flight tracking",
            ],
        },
        overviewSteps: [
            { title: 'Rapid Response', description: 'Immediate pickup and preparation for the fastest available flight.' },
            { title: 'Priority Handling', description: 'Expedited security screening and priority loading.' },
            { title: 'Express Delivery', description: 'Direct transfer from aircraft to final destination.' },
        ],
        sliderImages: [sliderImg1, sliderImg2, sliderImg3, sliderImg1, sliderImg2],
        thumbImages: [thumbImg1, thumbImg2, thumbImg3],
    },
];

export function getProjectBySlug(slug: string): ProjectDetailData | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
    return projects.filter((p) => p.slug).map((p) => p.slug!);
}
