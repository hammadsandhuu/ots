import { SectorData } from "@/types/sector-d-t";

// Hero images
import heroImage from "../../../public/assets/img/home-02/portfolio/portfolio-1.jpg";

// Gallery images
import port1 from "../../../public/assets/img/portfolio/portfolio-details-3/port-1.jpg";
import port2 from "../../../public/assets/img/portfolio/portfolio-details-3/port-2.jpg";
import port3 from "../../../public/assets/img/portfolio/portfolio-details-3/port-3.jpg";
import port4 from "../../../public/assets/img/portfolio/portfolio-details-3/port-4.jpg";

// Portfolio images
import port5 from "../../../public/assets/img/portfolio/portfolio-details-3/port-5.jpg";
import port6 from "../../../public/assets/img/portfolio/portfolio-details-3/port-6.jpg";

// Gallery two images
import port7 from "../../../public/assets/img/portfolio/portfolio-details-3/port-7.jpg";
import port8 from "../../../public/assets/img/portfolio/portfolio-details-3/port-8.jpg";
import port9 from "../../../public/assets/img/portfolio/portfolio-details-3/port-9.jpg";


const sectors: SectorData[] = [
    {
        id: 1,
        title: "Luxury Automotive Logistics",
        slug: "luxury-automotive-logistics",
        link: "/sector/luxury-automotive-logistics",
        categories: ["Automotive", "Premium Transport"],
        year: "2025",
        heroImage: heroImage,
        overview: {
            subtitle: "Premium Vehicle Transport",
            description: "Agntix specializes in premium automotive logistics, providing white-glove transportation services for luxury, classic, and exotic vehicles. Our enclosed carriers and specialized handling ensure every vehicle arrives in pristine condition.",
            info: [
                { label: "Client", value: "Premium Dealerships" },
                { label: "Service", value: "Vehicle Transport" },
                { label: "Coverage", value: "Nationwide" },
                { label: "Established", value: "2020" },
            ],
        },
        galleryImages: [port1, port2, port3, port4],
        challenge: {
            subtitle: "Premium Vehicle Care",
            title: "The Challenge",
            description: "High-value vehicles require specialized handling and transportation to prevent any damage. Standard carriers expose vehicles to weather, debris, and potential scratches during transit.",
            image: port5,
        },
        solution: {
            subtitle: "Enclosed Transport Excellence",
            title: "The Solution",
            description: "Our fleet of enclosed carriers with air-ride suspension and soft-tie restraint systems ensures vehicles are protected from all elements. GPS tracking provides real-time visibility throughout the journey.",
            image: port6,
        },
        galleryImagesTwo: [port7, port8, port9],
        faqs: [
            { question: "How are luxury vehicles protected during transport?", answer: "We use enclosed carriers with air-ride suspension and soft-tie restraint systems. Vehicles are protected from weather, debris, and scratches, with GPS tracking for the full journey.", isOpen: true },
            { question: "Do you transport classic and exotic cars?", answer: "Yes. We specialize in luxury, classic, and exotic vehicles and provide white-glove handling so every vehicle arrives in pristine condition." },
            { question: "What is your coverage area?", answer: "We offer nationwide premium vehicle transport for dealerships and private owners." },
        ],
    },
    {
        id: 2,
        title: "Oil & Gas Logistics",
        slug: "oil-gas-logistics",
        link: "/sector/oil-gas-logistics",
        categories: ["Energy", "Industrial"],
        year: "2025",
        heroImage: heroImage,
        overview: {
            subtitle: "Energy Sector Solutions",
            description: "Comprehensive logistics solutions for the oil and gas industry, including heavy equipment transport, hazardous materials handling, and remote site delivery services across challenging terrains.",
            info: [
                { label: "Client", value: "Energy Companies" },
                { label: "Service", value: "Heavy Logistics" },
                { label: "Coverage", value: "Global" },
                { label: "Established", value: "2018" },
            ],
        },
        galleryImages: [port1, port2, port3, port4],
        challenge: {
            subtitle: "Complex Operations",
            title: "The Challenge",
            description: "Oil and gas operations often require delivery to remote locations with limited infrastructure. Equipment is heavy, oversized, and sometimes hazardous, requiring specialized permits and handling.",
            image: port5,
        },
        solution: {
            subtitle: "Integrated Solutions",
            title: "The Solution",
            description: "Our dedicated energy logistics team coordinates permits, route surveys, and specialized equipment to ensure safe delivery of all materials. We maintain full compliance with safety regulations.",
            image: port6,
        },
        galleryImagesTwo: [port7, port8, port9],
        faqs: [
            { question: "Do you handle hazardous materials for oil and gas?", answer: "Yes. We provide compliant handling and transport for materials used in energy operations, including permits and safety protocols for challenging terrains.", isOpen: true },
            { question: "Can you deliver to remote sites?", answer: "We specialize in delivery to remote locations with limited infrastructure, using route surveys and specialized equipment as needed." },
            { question: "What compliance do you maintain?", answer: "We maintain full compliance with safety and hazardous-materials regulations and work with a dedicated energy logistics team." },
        ],
    },
    {
        id: 3,
        title: "Mega Project Logistics",
        slug: "mega-project-logistics",
        link: "/sector/mega-project-logistics",
        categories: ["Construction", "Infrastructure"],
        year: "2025",
        heroImage: heroImage,
        overview: {
            subtitle: "Large Scale Logistics",
            description: "End-to-end logistics management for mega construction and infrastructure projects. From initial planning to final delivery, we coordinate complex supply chains involving thousands of components.",
            info: [
                { label: "Client", value: "Construction Firms" },
                { label: "Service", value: "Project Logistics" },
                { label: "Coverage", value: "International" },
                { label: "Established", value: "2019" },
            ],
        },
        galleryImages: [port1, port2, port3, port4],
        challenge: {
            subtitle: "Scale & Complexity",
            title: "The Challenge",
            description: "Mega projects involve coordinating deliveries from multiple suppliers across different countries, with strict timelines and sequencing requirements. Any delay cascades through the entire project.",
            image: port5,
        },
        solution: {
            subtitle: "Precision Coordination",
            title: "The Solution",
            description: "Our project management team creates detailed logistics plans with contingency buffers. Real-time tracking and proactive communication keep all stakeholders informed and projects on schedule.",
            image: port6,
        },
        galleryImagesTwo: [port7, port8, port9],
        faqs: [
            { question: "How do you coordinate deliveries from multiple countries?", answer: "We create detailed logistics plans with sequencing and contingency buffers. Real-time tracking and proactive communication keep all stakeholders informed and projects on schedule.", isOpen: true },
            { question: "What happens if a delivery is delayed?", answer: "We plan with buffers and monitor in real time. If delays occur, we communicate immediately and adjust sequencing to minimize impact on the project." },
            { question: "Do you manage supplier coordination?", answer: "Yes. We coordinate with multiple suppliers, timelines, and strict sequencing requirements so mega projects stay on track." },
        ],
    },
    {
        id: 4,
        title: "Materials & Manufacturing",
        slug: "materials-manufacturing",
        link: "/sector/materials-manufacturing",
        categories: ["Manufacturing", "Supply Chain"],
        year: "2025",
        heroImage: heroImage,
        overview: {
            subtitle: "Industrial Supply Chain",
            description: "Streamlined logistics for raw materials and finished goods in the manufacturing sector. Our just-in-time delivery systems minimize inventory costs while ensuring production lines never stop.",
            info: [
                { label: "Client", value: "Manufacturers" },
                { label: "Service", value: "Supply Chain" },
                { label: "Coverage", value: "Regional" },
                { label: "Established", value: "2017" },
            ],
        },
        galleryImages: [port1, port2, port3, port4],
        challenge: {
            subtitle: "Production Continuity",
            title: "The Challenge",
            description: "Manufacturing facilities require precise timing of material deliveries. Stock-outs halt production lines at significant cost, while excess inventory ties up capital and warehouse space.",
            image: port5,
        },
        solution: {
            subtitle: "JIT Excellence",
            title: "The Solution",
            description: "Our integrated warehouse management and transportation systems enable true just-in-time delivery. Predictive analytics help anticipate demand fluctuations and adjust logistics accordingly.",
            image: port6,
        },
        galleryImagesTwo: [port7, port8, port9],
        faqs: [
            { question: "How do you support just-in-time delivery for manufacturing?", answer: "We use integrated warehouse and transport systems to align deliveries with production schedules, minimizing inventory while keeping lines running.", isOpen: true },
            { question: "Do you handle both raw materials and finished goods?", answer: "Yes. We support inbound raw materials and outbound finished goods across regional supply chains." },
            { question: "How do you avoid production line stoppages?", answer: "Predictive analytics and tight scheduling help us anticipate demand and adjust logistics so materials arrive when needed." },
        ],
    },
    {
        id: 5,
        title: "Hospitality Logistics Solutions",
        slug: "hospitality-logistics-solutions",
        link: "/sector/hospitality-logistics-solutions",
        categories: ["Hospitality", "FF&E"],
        year: "2025",
        heroImage: heroImage,
        overview: {
            subtitle: "Hotel & Resort Logistics",
            description: "Specialized logistics for the hospitality industry, including FF&E (Furniture, Fixtures & Equipment) delivery, hotel openings, and renovation projects with minimal disruption to operations.",
            info: [
                { label: "Client", value: "Hotel Chains" },
                { label: "Service", value: "FF&E Logistics" },
                { label: "Coverage", value: "International" },
                { label: "Established", value: "2019" },
            ],
        },
        galleryImages: [port1, port2, port3, port4],
        challenge: {
            subtitle: "Operational Sensitivity",
            title: "The Challenge",
            description: "Hotels require deliveries during specific windows to minimize guest disruption. Items must be delivered to correct floors and rooms in precise sequences to facilitate rapid installation.",
            image: port5,
        },
        solution: {
            subtitle: "White Glove Service",
            title: "The Solution",
            description: "Our hospitality logistics team coordinates with property managers to schedule deliveries during low-occupancy periods. Room-by-room delivery plans ensure efficient installation workflow.",
            image: port6,
        },
        galleryImagesTwo: [port7, port8, port9],
        faqs: [
            { question: "Do you deliver FF&E for hotel openings?", answer: "Yes. We deliver Furniture, Fixtures & Equipment for hotel and resort openings and renovations, with minimal disruption to operations.", isOpen: true },
            { question: "How do you minimize guest disruption?", answer: "We coordinate with property managers to schedule deliveries during low-occupancy windows and use room-by-room plans for efficient installation." },
            { question: "What is included in hospitality logistics?", answer: "FF&E delivery, sequencing for installation, and coordination with your project timeline and property access." },
        ],
    },
    {
        id: 6,
        title: "Furniture & Fixtures Logistics",
        slug: "furniture-fixtures-logistics",
        link: "/sector/furniture-fixtures-logistics",
        categories: ["Furniture", "Interior"],
        year: "2025",
        heroImage: heroImage,
        overview: {
            subtitle: "Premium Furniture Transport",
            description: "Careful handling and delivery of high-value furniture and fixtures for residential and commercial projects. Our white-glove service includes unpacking, placement, and debris removal.",
            info: [
                { label: "Client", value: "Interior Designers" },
                { label: "Service", value: "Furniture Delivery" },
                { label: "Coverage", value: "Nationwide" },
                { label: "Established", value: "2020" },
            ],
        },
        galleryImages: [port1, port2, port3, port4],
        challenge: {
            subtitle: "Delicate Handling",
            title: "The Challenge",
            description: "High-end furniture is often custom-made and irreplaceable. Pieces may be oversized, fragile, or have delicate finishes that require special protection during transport and installation.",
            image: port5,
        },
        solution: {
            subtitle: "Expert Care",
            title: "The Solution",
            description: "Our trained crews use custom blanket wrapping, air-ride vehicles, and specialized lifting equipment. Final placement is done with floor protection and according to designer specifications.",
            image: port6,
        },
        galleryImagesTwo: [port7, port8, port9],
        faqs: [
            { question: "Do you offer white-glove furniture delivery?", answer: "Yes. We provide unpacking, placement, and debris removal. Placement is done with floor protection and according to designer specifications.", isOpen: true },
            { question: "How do you protect high-value furniture in transit?", answer: "We use custom blanket wrapping, air-ride vehicles, and specialized lifting equipment. Crews are trained to handle delicate finishes and oversized pieces." },
            { question: "Do you deliver to residential and commercial projects?", answer: "Yes. We serve interior designers and both residential and commercial projects nationwide." },
        ],
    },
    {
        id: 7,
        title: "Food & Commodities Logistics",
        slug: "food-commodities-logistics",
        link: "/sector/food-commodities-logistics",
        categories: ["Food", "Cold Chain"],
        year: "2025",
        heroImage: heroImage,
        overview: {
            subtitle: "Temperature-Controlled Transport",
            description: "Complete cold chain logistics for food products and perishable commodities. From farm to distribution center, we maintain optimal temperatures and ensure food safety compliance.",
            info: [
                { label: "Client", value: "Food Distributors" },
                { label: "Service", value: "Cold Chain" },
                { label: "Coverage", value: "Regional" },
                { label: "Established", value: "2018" },
            ],
        },
        galleryImages: [port1, port2, port3, port4],
        challenge: {
            subtitle: "Temperature Integrity",
            title: "The Challenge",
            description: "Food products have strict temperature requirements throughout the supply chain. Any break in the cold chain can result in spoilage, safety issues, and regulatory violations.",
            image: port5,
        },
        solution: {
            subtitle: "Continuous Monitoring",
            title: "The Solution",
            description: "Our refrigerated fleet features real-time temperature monitoring with automatic alerts. Digital records provide complete chain of custody documentation for regulatory compliance.",
            image: port6,
        },
        galleryImagesTwo: [port7, port8, port9],
        faqs: [
            { question: "How do you maintain temperature for food and perishables?", answer: "Our refrigerated fleet uses real-time temperature monitoring with automatic alerts. We maintain optimal temperatures and full chain-of-custody documentation for food safety compliance.", isOpen: true },
            { question: "What is your coverage for cold chain?", answer: "We provide cold chain logistics regionally from farm to distribution center, with full compliance documentation." },
            { question: "What happens if temperature goes out of range?", answer: "Automatic alerts allow immediate response. Digital records document the full chain of custody for regulatory and quality purposes." },
        ],
    },
    {
        id: 8,
        title: "Diplomatic Missions Logistics",
        slug: "diplomatic-missions-logistics",
        link: "/sector/diplomatic-missions-logistics",
        categories: ["Government", "Secure"],
        year: "2025",
        heroImage: heroImage,
        overview: {
            subtitle: "Secure Government Logistics",
            description: "Highest-security logistics services for diplomatic missions, embassies, and government agencies. Our protocols meet international security standards for sensitive materials transport.",
            info: [
                { label: "Client", value: "Government Agencies" },
                { label: "Service", value: "Secure Transport" },
                { label: "Coverage", value: "International" },
                { label: "Established", value: "2016" },
            ],
        },
        galleryImages: [port1, port2, port3, port4],
        challenge: {
            subtitle: "Maximum Security",
            title: "The Challenge",
            description: "Diplomatic cargo requires the highest levels of security and discretion. Materials must be protected from tampering, theft, and surveillance throughout international transit.",
            image: port5,
        },
        solution: {
            subtitle: "Diplomatic Protocol",
            title: "The Solution",
            description: "Our security-cleared personnel follow strict protocols including tamper-evident seals, GPS tracking, and escort services. All operations maintain complete confidentiality and chain of custody.",
            image: port6,
        },
        galleryImagesTwo: [port7, port8, port9],
        faqs: [
            { question: "What security level do you provide for diplomatic cargo?", answer: "We provide highest-security logistics for diplomatic missions, embassies, and government agencies, meeting international security standards for sensitive materials.", isOpen: true },
            { question: "How is cargo protected from tampering?", answer: "We use tamper-evident seals, GPS tracking, and escort services. Security-cleared personnel follow strict protocols with full chain of custody and confidentiality." },
            { question: "Do you operate internationally for government clients?", answer: "Yes. We operate internationally with protocols designed for sensitive government and diplomatic requirements." },
        ],
    },
];

export function getSectorBySlug(slug: string): SectorData | undefined {
    return sectors.find((s) => s.slug === slug);
}

export function getAllSectorSlugs(): string[] {
    return sectors.map((s) => s.slug);
}

export function getRelatedSectors(currentSlug: string, count: number = 2): SectorData[] {
    const otherSectors = sectors.filter((s) => s.slug !== currentSlug);
    return otherSectors.slice(0, count);
}

export default sectors;
