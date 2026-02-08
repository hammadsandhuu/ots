import { ServiceDetailData } from "@/types/service-d-t";

// Service detail images - using existing assets, varied per service
import serviceBanner from "../../public/assets/img/service/service-details/service-details-banner.jpg";
import serviceThumb1 from "../../public/assets/img/service/service-details/service-details-thumb-1.jpg";
import serviceThumb2 from "../../public/assets/img/service/service-details/service-details-thumb-2.jpg";
import serviceThumb3 from "../../public/assets/img/service/service-details/service-details-thumb-3.jpg";
import service5Banner from "../../public/assets/img/service/service-5/service-5-banner.jpg";
import project1 from "../../public/assets/img/home-03/project/1.png";
import project2 from "../../public/assets/img/home-03/project/2.png";
import project3 from "../../public/assets/img/home-03/project/3.png";
import project4 from "../../public/assets/img/home-03/project/4.png";
import project5 from "../../public/assets/img/home-03/project/5.png";
import project6 from "../../public/assets/img/home-03/project/6.png";
import project7 from "../../public/assets/img/home-03/project/7.png";
import overviewImage from "../../public/assets/img/home-03/service/service-detail/3.jpg";

import endToEndFreightManagementBanner from "../../public/assets/img/home-03/service/service-detail/end-to-end-freight-management/banner.png";
import endToEndFreightManagementOverview from "../../public/assets/img/home-03/service/service-detail/end-to-end-freight-management/overview.jpg";


import projectSpecializedLogisticsBanner from "../../public/assets/img/home-03/service/service-detail/project-specialized-logistics/banner.png";
import projectSpecializedLogisticsOverview from "../../public/assets/img/home-03/service/service-detail/project-specialized-logistics/overview.png";



import heavyLiftOutOfGaugeCargoBanner from "../../public/assets/img/home-03/service/service-detail/heavy-lift-out-of-gauge-cargo/banner.png";
import heavyLiftOutOfGaugeCargoOverview from "../../public/assets/img/home-03/service/service-detail/heavy-lift-out-of-gauge-cargo/overview.png";

import commercialFreightSolutionsBanner from "../../public/assets/img/home-03/service/service-detail/commercial-freight-solutions/banner.png";
import commercialFreightSolutionsOverview from "../../public/assets/img/home-03/service/service-detail/commercial-freight-solutions/overview.png";



const serviceDetailsData: ServiceDetailData[] = [
    {
        id: 1,
        title: "End-to-End Freight Management",
        slug: "end-to-end-freight-management",
        description: "We take full ownership of your cargo from origin to final delivery, managing every movement, document, and handover under a single point of accountability. Built for companies that value reliability, visibility, and control over fragmented logistics execution.",
        link: "/service/end-to-end-freight-management",
        bannerImage: endToEndFreightManagementBanner,
        overviewImage: endToEndFreightManagementOverview,
        overviewText: "Our end-to-end freight management integrates every stage of your supply chain—from pickup and customs clearance to final delivery. We provide real-time tracking, consolidated documentation, and a single point of contact so you can focus on your business while we handle the complexity.",
        overviewSubtitle: "Our Approach to Freight Management",
        overviewFeatures: [
            "Origin Coordination – Booking, pickup, and documentation at source.",
            "In-Transit Management – Tracking, customs clearance, and carrier coordination.",
            "Final Delivery – Handover confirmation and proof of delivery.",
            "Ongoing Optimization – Data-driven improvements to reduce cost and transit time.",
        ],
        thumbImages: [project2, project3],
        processSteps: [
            { number: "01", title: "Assessment & Planning", description: "Analyze your supply chain and define scope, lanes, and performance targets." },
            { number: "02", title: "Setup & Integration", description: "Connect systems, establish workflows, and train your team on our platform." },
            { number: "03", title: "Execution & Monitoring", description: "Execute shipments with real-time visibility and proactive exception handling." },
            { number: "04", title: "Review & Optimize", description: "Regular reviews and KPIs to continuously improve cost and reliability." },
        ],
        solutionItems: [
            { title: "Origin & Pickup Management", titleBr: ["Origin & Pickup", "Management"], categories: ["+ Booking & Scheduling", "+ Documentation Prep", "+ Cargo Insurance"], delay: ".3", svgIcon: "BrandingIcon", link: "/service/end-to-end-freight-management" },
            { title: "Customs & Compliance", titleBr: ["Customs &", "Compliance"], categories: ["+ Customs Clearance", "+ Regulatory Compliance", "+ Duty Optimization"], delay: ".5", svgIcon: "UIUXDesignIcon", link: "/service/end-to-end-freight-management" },
            { title: "Delivery & Proof", titleBr: ["Delivery &", "Proof"], categories: ["+ Final Mile Coordination", "+ POD & Status Updates", "+ Exception Resolution"], delay: ".7", svgIcon: "WebDevelopmentIcon", link: "/service/end-to-end-freight-management" },
        ],
        counterData: [
            { value: 99, unit: "%", descriptionBr: ["On-Time", "Delivery"], delay: ".3" },
            { value: 24, unit: "/7", descriptionBr: ["Real-Time", "Visibility"], delay: ".5" },
            { value: 30, unit: "%", descriptionBr: ["Average Cost", "Reduction"], delay: ".7" },
        ],
        pricingPlans: [
            { id: 1, name: "Per Shipment", price: "Quote-based", features: ["Single point of contact", "Full documentation", "Real-time tracking", "Customs support", "Exception handling"], buttonVariant: "black-border", tab: "desktop" },
            { id: 2, name: "Volume Agreement", price: "Contract", isPopular: true, features: ["Dedicated account manager", "Volume discounts", "Priority handling", "Custom reporting", "SLA guarantees"], buttonVariant: "gradient", tab: "desktop" },
            { id: 3, name: "Managed Program", price: "Custom", features: ["Full outsourcing", "Process optimization", "Technology integration", "Analytics & insights", "24/7 support"], buttonVariant: "black-border", tab: "desktop" },
        ],
        faqs: [
            { question: "What is included in end-to-end freight management?", answer: "We handle every stage from origin pickup and booking through customs, in-transit tracking, and final delivery with proof of delivery. You get a single point of contact, consolidated documentation, and real-time visibility.", isOpen: true },
            { question: "How do you ensure on-time delivery?", answer: "We use real-time tracking, proactive exception handling, and carrier coordination. Our process includes regular reviews and KPIs to continuously improve reliability and transit times." },
            { question: "Can you manage customs and compliance for our lanes?", answer: "Yes. Customs clearance, regulatory compliance, and duty optimization are part of our end-to-end service. We handle documentation and work with local authorities to keep shipments moving." },
            { question: "What does the initial assessment involve?", answer: "We analyze your supply chain, define scope and lanes, and set performance targets. From there we provide a price proposal with estimates and a clear path to kick-off." },
        ],
    },
    {
        id: 2,
        title: "Commercial Freight Solutions (Air, Sea, and Land)",
        slug: "commercial-freight-solutions",
        description: "Scalable air, sea, and land freight designed to support ongoing commercial supply chains with consistency and cost discipline. Ideal for businesses that require predictable performance across trade lanes without operational surprises.",
        link: "/service/commercial-freight-solutions",
        bannerImage: commercialFreightSolutionsBanner,
        overviewImage: commercialFreightSolutionsOverview,
        overviewText: "We provide multi-modal freight solutions tailored to your commercial needs. Whether you ship by air for speed, sea for cost efficiency, or road for regional distribution, our network and expertise ensure reliable, scalable service across all modes.",
        overviewSubtitle: "Our Approach to Commercial Freight",
        overviewFeatures: [
            "Mode Selection – Right mode for each lane based on urgency, cost, and cargo type.",
            "Carrier Management – Vetted partners with consistent performance and competitive rates.",
            "Schedule Reliability – Predictable transit times and proactive delay management.",
            "Cost Control – Transparent pricing and volume-based agreements.",
        ],
        thumbImages: [project5, project6],
        processSteps: [
            { number: "01", title: "Lane Analysis", description: "Map your trade lanes and identify optimal routing and mode mix." },
            { number: "02", title: "Rate & Capacity", description: "Secure capacity and competitive rates across air, sea, and road." },
            { number: "03", title: "Execution", description: "Book, track, and deliver with full visibility and documentation." },
            { number: "04", title: "Performance Review", description: "Monitor KPIs and adjust strategy for continuous improvement." },
        ],
        solutionItems: [
            { title: "Air Freight", titleBr: ["Air", "Freight"], categories: ["+ Express & Standard", "+ Charter Options", "+ Temperature Control"], delay: ".3", svgIcon: "BrandingIcon", link: "/service/commercial-freight-solutions" },
            { title: "Ocean Freight", titleBr: ["Ocean", "Freight"], categories: ["+ FCL & LCL", "+ Port-to-Port", "+ Door-to-Door"], delay: ".5", svgIcon: "UIUXDesignIcon", link: "/service/commercial-freight-solutions" },
            { title: "Road Freight", titleBr: ["Road", "Freight"], categories: ["+ Full Truckload", "+ Less Than Truckload", "+ Regional Distribution"], delay: ".7", svgIcon: "WebDevelopmentIcon", link: "/service/commercial-freight-solutions" },
        ],
        counterData: [
            { value: 150, unit: "+", descriptionBr: ["Trade Lanes", "Covered"], delay: ".3" },
            { value: 50, unit: "+", descriptionBr: ["Countries", "Served"], delay: ".5" },
            { value: 98, unit: "%", descriptionBr: ["Schedule", "Adherence"], delay: ".7" },
        ],
        pricingPlans: [
            { id: 4, name: "Air Freight", price: "Per KG", features: ["Express & economy options", "Door-to-door available", "Customs included", "Tracking", "Insurance options"], buttonVariant: "black-border", tab: "desktop" },
            { id: 5, name: "Ocean Freight", price: "Per Container", isPopular: true, features: ["FCL & LCL", "Port-to-port or DDP", "Documentation", "Cargo insurance", "Flexible sailing"], buttonVariant: "gradient", tab: "desktop" },
            { id: 6, name: "Road Freight", price: "Per Shipment", features: ["FTL & LTL", "Regional & cross-border", "Real-time tracking", "Proof of delivery", "Dedicated support"], buttonVariant: "black-border", tab: "desktop" },
        ],
        faqs: [
            { question: "What modes do you offer for commercial freight?", answer: "We provide air freight for speed, ocean freight (FCL and LCL) for cost-effective volume, and road freight (FTL and LTL) for regional and cross-border distribution. We help you choose the right mode per lane." },
            { question: "How do you handle rate and capacity across different modes?", answer: "We work with vetted carriers across 150+ trade lanes. We secure capacity and competitive rates, and offer volume-based agreements for predictable pricing and schedule reliability." },
            { question: "Do you offer door-to-door service?", answer: "Yes. We can arrange port-to-port or full door-to-door for air, ocean, and road. Documentation, customs, and tracking are included as needed for each shipment." },
            { question: "What is your schedule adherence for commercial freight?", answer: "We target high schedule adherence through carrier selection, proactive delay management, and real-time tracking. Performance is reviewed regularly so we can adjust and improve." },
        ],
    },
    {
        id: 3,
        title: "Project & Specialized Logistics",
        slug: "project-specialized-logistics",
        description: "End-to-end planning and execution for complex, non-routine shipments requiring coordination across multiple stakeholders and jurisdictions. Engineered for projects where timing, compliance, and precision are non-negotiable.",
        link: "/service/project-specialized-logistics",
        bannerImage: projectSpecializedLogisticsBanner,
        overviewImage: projectSpecializedLogisticsOverview,
        overviewText: "Project cargo demands expertise beyond standard freight. We design and execute logistics for industrial projects—energy, mining, infrastructure, and manufacturing—where every shipment is critical and timelines are strict.",
        overviewSubtitle: "Our Approach to Project Logistics",
        overviewFeatures: [
            "Feasibility & Routing – Route surveys, permits, and feasibility studies.",
            "Stakeholder Coordination – Align suppliers, ports, carriers, and sites.",
            "Documentation & Compliance – Export licenses, customs, and transit permits.",
            "Execution & Handover – Controlled movement and site delivery confirmation.",
        ],
        thumbImages: [serviceThumb2, serviceThumb3],
        processSteps: [
            { number: "01", title: "Project Scope", description: "Define cargo specs, timelines, and site requirements." },
            { number: "02", title: "Route & Permits", description: "Survey routes, secure permits, and plan equipment needs." },
            { number: "03", title: "Mobilization", description: "Coordinate suppliers, staging, and transport execution." },
            { number: "04", title: "Delivery & Close-Out", description: "Site delivery, documentation, and project handover." },
        ],
        solutionItems: [
            { title: "Engineering Support", titleBr: ["Engineering", "Support"], categories: ["+ Route Surveys", "+ Load Studies", "+ Permit Support"], delay: ".3", svgIcon: "BrandingIcon", link: "/service/project-specialized-logistics" },
            { title: "Equipment & Charter", titleBr: ["Equipment &", "Charter"], categories: ["+ Specialty Equipment", "+ Charter Vessels", "+ Multimodal Coordination"], delay: ".5", svgIcon: "UIUXDesignIcon", link: "/service/project-specialized-logistics" },
            { title: "Site Logistics", titleBr: ["Site", "Logistics"], categories: ["+ Staging & Marshalling", "+ Installation Support", "+ Handover Documentation"], delay: ".7", svgIcon: "WebDevelopmentIcon", link: "/service/project-specialized-logistics" },
        ],
        counterData: [
            { value: 500, unit: "+", descriptionBr: ["Projects", "Completed"], delay: ".3" },
            { value: 40, unit: "+", descriptionBr: ["Years", "Experience"], delay: ".5" },
            { value: 100, unit: "%", descriptionBr: ["Compliance", "Track Record"], delay: ".7" },
        ],
        pricingPlans: [
            { id: 7, name: "Feasibility", price: "Project-based", features: ["Route surveys", "Permit assessment", "Cost estimation", "Timeline planning", "Risk analysis"], buttonVariant: "black-border", tab: "desktop" },
            { id: 8, name: "Full Execution", price: "Turnkey", isPopular: true, features: ["End-to-end management", "Equipment & charter", "Documentation", "Site coordination", "Project reporting"], buttonVariant: "gradient", tab: "desktop" },
            { id: 9, name: "Consulting", price: "Retainer", features: ["Strategic advice", "Vendor selection", "Process design", "Training", "Ongoing support"], buttonVariant: "black-border", tab: "desktop" },
        ],
        faqs: [
            { question: "What types of projects do you handle?", answer: "We manage logistics for industrial projects including energy, mining, infrastructure, and manufacturing. This includes oversized and heavy equipment, multi-modal moves, and coordination across suppliers, ports, and sites." },
            { question: "How do you handle permits and route feasibility?", answer: "We conduct route surveys and feasibility studies, secure export licenses and transit permits, and coordinate with authorities. Engineering support includes load studies and permit strategy." },
            { question: "Do you provide equipment and charter?", answer: "Yes. We coordinate specialty equipment, charter vessels, and multimodal transport. This includes staging, marshalling, and site delivery with full documentation." },
            { question: "What is the typical timeline from scope to delivery?", answer: "Timelines depend on cargo specs, routes, and permits. We define scope and timeline in the planning phase and keep you updated through mobilization, execution, and close-out." },
        ],
    },
    {
        id: 4,
        title: "Heavy Lift & Out-of-Gauge Cargo",
        slug: "heavy-lift-out-of-gauge-cargo",
        description: "Specialized handling of oversized and overweight cargo, including route surveys, permits, equipment coordination, and controlled execution. Trusted for high-risk moves where engineering oversight and operational discipline define success.",
        link: "/service/heavy-lift-out-of-gauge-cargo",
        bannerImage: heavyLiftOutOfGaugeCargoBanner,
        overviewImage: heavyLiftOutOfGaugeCargoOverview,
        overviewText: "Oversized and heavy-lift cargo requires specialized expertise. We manage every aspect—from route surveys and permit acquisition to equipment selection and execution—ensuring your high-value, high-risk cargo reaches its destination safely.",
        overviewSubtitle: "Our Approach to Heavy Lift",
        overviewFeatures: [
            "Route & Engineering – Surveys, clearance checks, and load distribution studies.",
            "Permits & Approvals – Oversize permits, escorts, and regulatory clearances.",
            "Equipment & Execution – Cranes, SPMTs, and specialized transport coordination.",
            "Safety & Insurance – Risk mitigation, insurance, and contingency planning.",
        ],
        thumbImages: [serviceThumb1, project4],
        processSteps: [
            { number: "01", title: "Cargo & Route Study", description: "Assess dimensions, weight, and routing constraints." },
            { number: "02", title: "Permits & Planning", description: "Secure permits, plan equipment, and schedule execution." },
            { number: "03", title: "Mobilization", description: "Position equipment, escorts, and support crews." },
            { number: "04", title: "Lift & Transport", description: "Execute lift, transport, and final positioning." },
        ],
        solutionItems: [
            { title: "Route & Survey", titleBr: ["Route &", "Survey"], categories: ["+ Clearance Surveys", "+ Bridge Analysis", "+ Load Studies"], delay: ".3", svgIcon: "BrandingIcon", link: "/service/heavy-lift-out-of-gauge-cargo" },
            { title: "Heavy Lift Equipment", titleBr: ["Heavy Lift", "Equipment"], categories: ["+ Cranes & SPMTs", "+ Barges & Vessels", "+ Rail & Road"], delay: ".5", svgIcon: "UIUXDesignIcon", link: "/service/heavy-lift-out-of-gauge-cargo" },
            { title: "Permits & Escorts", titleBr: ["Permits &", "Escorts"], categories: ["+ Oversize Permits", "+ Police Escort", "+ Traffic Management"], delay: ".7", svgIcon: "WebDevelopmentIcon", link: "/service/heavy-lift-out-of-gauge-cargo" },
        ],
        counterData: [
            { value: 1000, unit: "+", descriptionBr: ["Tons", "Lifted"], delay: ".3" },
            { value: 200, unit: "+", descriptionBr: ["OOG", "Moves/Year"], delay: ".5" },
            { value: 100, unit: "%", descriptionBr: ["Safety", "Record"], delay: ".7" },
        ],
        pricingPlans: [
            { id: 10, name: "Survey & Quote", price: "Fixed", features: ["Route survey", "Equipment assessment", "Cost quotation", "Timeline estimate", "Risk summary"], buttonVariant: "black-border", tab: "desktop" },
            { id: 11, name: "Full Service", price: "Project", isPopular: true, features: ["End-to-end execution", "Equipment provision", "Permits & escorts", "Insurance", "24/7 site support"], buttonVariant: "gradient", tab: "desktop" },
            { id: 12, name: "Consulting", price: "Hourly", features: ["Engineering support", "Vendor evaluation", "Process design", "Training", "Audit support"], buttonVariant: "black-border", tab: "desktop" },
        ],
        faqs: [
            { question: "What qualifies as heavy lift or out-of-gauge cargo?", answer: "Oversized or overweight cargo that exceeds standard dimensions or weight limits—e.g. large machinery, transformers, industrial modules. We assess dimensions, weight, and routing to plan the move." },
            { question: "How do you handle route surveys and permits?", answer: "We perform clearance surveys, bridge analysis, and load distribution studies. We secure oversize permits, arrange escorts and traffic management, and coordinate with authorities along the route." },
            { question: "What equipment do you use for heavy lift?", answer: "We coordinate cranes, SPMTs, barges, and specialized road and rail transport. Equipment is selected based on cargo specs and route, with full risk mitigation and insurance." },
            { question: "What is your safety record?", answer: "We maintain strict safety and engineering oversight for every move. Our processes include contingency planning and 24/7 site support to ensure cargo and personnel safety." },
        ],
    },
];

export default serviceDetailsData;

/** Get full service detail by slug */
export function getServiceDetailBySlug(slug: string): ServiceDetailData | undefined {
    return serviceDetailsData.find((s) => s.slug === slug);
}

/** Get all service slugs for static generation */
export function getAllServiceDetailSlugs(): string[] {
    return serviceDetailsData.filter((s) => s.slug).map((s) => s.slug!);
}
