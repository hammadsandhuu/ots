import { SectorData } from "@/types/sector-d-t";

// Hero images
import heroImage from "../../../public/assets/img/home-02/portfolio/portfolio-1.jpg";

// Portfolio images
import port5 from "../../../public/assets/img/portfolio/portfolio-details-3/port-5.jpg";
import port6 from "../../../public/assets/img/portfolio/portfolio-details-3/port-6.jpg";

// Luxury Automotive Logistics Hero Image
import luxuryAutomotiveHeroImage from "../../../public/assets/img/home-03/sectors/luxury-automotive-logistics/luxury-automotive-logistics-hero.png";
import luxuryAutomotiveChallengeImage from "../../../public/assets/img/home-03/sectors/luxury-automotive-logistics/luxury-automotive-logistics-challenge.png";
import luxuryAutomotiveSolutionImage from "../../../public/assets/img/home-03/sectors/luxury-automotive-logistics/luxury-automotive-logistics-solution.png";

// Oil & Gas Logistics Hero Image
import oilGasHeroImage from "../../../public/assets/img/home-03/sectors/oil-gas-logistics/oil-gas-logistics-hero.png";
import oilGasChallengeImage from "../../../public/assets/img/home-03/sectors/oil-gas-logistics/oil-gas-logistics-challenge.png";
import oilGasSolutionImage from "../../../public/assets/img/home-03/sectors/oil-gas-logistics/oil-gas-logistics-challenge.png";

// Mega Project Logistics Hero Image
import megaProjectHeroImage from "../../../public/assets/img/home-03/sectors/mega-project-logistics/mega-project-logistics-hero.png";
import megaProjectChallengeImage from "../../../public/assets/img/home-03/sectors/mega-project-logistics/mega-project-logistics-challenge.png";
import megaProjectSolutionImage from "../../../public/assets/img/home-03/sectors/mega-project-logistics/mega-project-logistics-challenge.png";

// Materials & Manufacturing Hero Image
import materialsManufacturingHeroImage from "../../../public/assets/img/home-03/sectors/materials-manufacturing/materials-manufacturing-hero.png";
import materialsManufacturingChallengeImage from "../../../public/assets/img/home-03/sectors/materials-manufacturing/materials-manufacturing-challenge.png";
import materialsManufacturingSolutionImage from "../../../public/assets/img/home-03/sectors/materials-manufacturing/materials-manufacturing-challenge.png";

// Hospitality Logistics Solutions Hero Image
import hospitalityHeroImage from "../../../public/assets/img/home-03/sectors/hospitality-logistics-solutions/hospitality-logistics-solutions-hero.png";
import hospitalityChallengeImage from "../../../public/assets/img/home-03/sectors/hospitality-logistics-solutions/hospitality-logistics-solutions-challenge.png";
import hospitalitySolutionImage from "../../../public/assets/img/home-03/sectors/hospitality-logistics-solutions/hospitality-logistics-solutions-challenge.png";

// Furniture & Fixtures Logistics Hero Image
import furnitureFixturesHeroImage from "../../../public/assets/img/home-03/sectors/furniture-fixtures-logistics/furniture-fixtures-logistics-hero.png";
import furnitureFixturesChallengeImage from "../../../public/assets/img/home-03/sectors/furniture-fixtures-logistics/furniture-fixtures-logistics-challenge.png";
import furnitureFixturesSolutionImage from "../../../public/assets/img/home-03/sectors/furniture-fixtures-logistics/furniture-fixtures-logistics-challenge.png";

// Food & Commodities Logistics Hero Image
import foodCommoditiesHeroImage from "../../../public/assets/img/home-03/sectors/food-commodities-logistics/food-commodities-logistics-hero.png";
import foodCommoditiesChallengeImage from "../../../public/assets/img/home-03/sectors/food-commodities-logistics/food-commodities-logistics-challenge.png";
import foodCommoditiesSolutionImage from "../../../public/assets/img/home-03/sectors/food-commodities-logistics/food-commodities-logistics-challenge.png";

// Diplomatic Missions Logistics Hero Image
import diplomaticMissionsHeroImage from "../../../public/assets/img/home-03/sectors/diplomatic-missions-logistics/diplomatic-missions-logistics-hero.png";
import diplomaticMissionsChallengeImage from "../../../public/assets/img/home-03/sectors/diplomatic-missions-logistics/diplomatic-missions-logistics-challenge.png";
import diplomaticMissionsSolutionImage from "../../../public/assets/img/home-03/sectors/diplomatic-missions-logistics/diplomatic-missions-logistics-challenge.png";

const sectors: SectorData[] = [
    {
        id: 1,
        title: "Luxury Automotive Logistics",
        slug: "luxury-automotive-logistics",
        link: "/sector/luxury-automotive-logistics",
        categories: ["Automotive", "Premium Transport"],
        year: "2025",
        heroImage: luxuryAutomotiveHeroImage,
        heroDescription: "Experience the pinnacle of automotive transport excellence. We deliver luxury, classic, and exotic vehicles with unmatched care, ensuring every detail is protected from pickup to delivery.",
        heroContactText: "Start Your Premium Vehicle Transport",
        heroFunFacts: [
            {
                id: 1,
                end: 99,
                suffix: "%",
                text: "Vehicles Delivered <br /> Damage-Free",
                delay: ".7",
            },
            {
                id: 2,
                end: 5000,
                suffix: "+",
                text: "Luxury Vehicles <br /> Transported Annually",
                delay: ".9",
            },
        ],
        processSteps: [
            { number: "01", title: "Vehicle Inspection", description: "Comprehensive pre-transport inspection and documentation of vehicle condition." },
            { number: "02", title: "Secure Loading", description: "Professional loading into enclosed carriers with soft-tie restraint systems." },
            { number: "03", title: "GPS Tracking", description: "Real-time tracking and monitoring throughout the entire journey." },
            { number: "04", title: "Safe Delivery", description: "Final inspection and handover to ensure vehicle arrives in pristine condition." },
        ],
        pricingPlans: [
            { id: 1, name: "Standard Transport", price: "Quote-based", features: ["Enclosed carrier", "GPS tracking", "Insurance coverage", "Standard delivery window"], buttonVariant: "black-border", tab: "desktop" },
            { id: 2, name: "Premium Service", price: "Custom", isPopular: true, features: ["White-glove handling", "Expedited delivery", "Dedicated coordinator", "Priority scheduling", "Full insurance"], buttonVariant: "gradient", tab: "desktop" },
            { id: 3, name: "Collection Service", price: "Quote-based", features: ["Pickup coordination", "Multi-vehicle transport", "Custom scheduling", "Volume discounts"], buttonVariant: "black-border", tab: "desktop" },
        ],
        overview: {
            subtitle: "Premium Vehicle Transport",
            description: "OTS specializes in premium automotive logistics, providing white-glove transportation services for luxury, classic, and exotic vehicles. Our enclosed carriers and specialized handling ensure every vehicle arrives in pristine condition.",
            info: [
                { label: "Client", value: "Premium Dealerships" },
                { label: "Service", value: "Vehicle Transport" },
                { label: "Coverage", value: "Nationwide" },
                { label: "Established", value: "2020" },
            ],
        },
        solutionItems: [
            { title: "Enclosed Transport", titleBr: ["Enclosed", "Transport"], categories: ["+ Weather Protection", "+ Damage Prevention", "+ Secure Loading"], delay: ".3", svgIcon: "BrandingIcon", link: "/service/end-to-end-freight-management" },
            { title: "GPS Tracking", titleBr: ["GPS", "Tracking"], categories: ["+ Real-Time Visibility", "+ Route Monitoring", "+ Delivery Updates"], delay: ".5", svgIcon: "UIUXDesignIcon", link: "/service/end-to-end-freight-management" },
            { title: "White-Glove Service", titleBr: ["White-Glove", "Service"], categories: ["+ Professional Handling", "+ Inspection Services", "+ Insurance Coverage"], delay: ".7", svgIcon: "WebDevelopmentIcon", link: "/service/end-to-end-freight-management" },
        ],
        challenge: {
            subtitle: "Premium Vehicle Care",
            title: "The Challenge",
            description: "High-value vehicles require specialized handling and transportation to prevent any damage. Standard carriers expose vehicles to weather, debris, and potential scratches during transit.",
            image: luxuryAutomotiveChallengeImage,
        },
        solution: {
            subtitle: "Enclosed Transport Excellence",
            title: "The Solution",
            description: "Our fleet of enclosed carriers with air-ride suspension and soft-tie restraint systems ensures vehicles are protected from all elements. GPS tracking provides real-time visibility throughout the journey.",
            image: luxuryAutomotiveSolutionImage,
        },
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
        heroImage: oilGasHeroImage,
        heroContactText: "Get Energy Logistics Solutions",
        heroDescription: "Powering energy operations with reliable logistics solutions. We handle heavy equipment, hazardous materials, and remote site deliveries with precision and compliance.",
        heroFunFacts: [
            {
                id: 1,
                end: 150,
                suffix: "+",
                text: "Remote Sites <br /> Served Annually",
                delay: ".7",
            },
            {
                id: 2,
                end: 100,
                suffix: "%",
                text: "Safety Compliance <br /> Record",
                delay: ".9",
            },
        ],
        processSteps: [
            { number: "01", title: "Site Assessment", description: "Route surveys and site evaluation to determine optimal delivery approach." },
            { number: "02", title: "Permit Coordination", description: "Obtain all necessary permits and regulatory approvals for transport." },
            { number: "03", title: "Specialized Transport", description: "Deploy appropriate equipment and trained personnel for safe delivery." },
            { number: "04", title: "Compliance Documentation", description: "Complete chain of custody and regulatory compliance documentation." },
        ],
        pricingPlans: [
            { id: 1, name: "Standard Delivery", price: "Quote-based", features: ["Heavy equipment transport", "Permit coordination", "Standard delivery window", "Basic tracking"], buttonVariant: "black-border", tab: "desktop" },
            { id: 2, name: "Hazardous Materials", price: "Custom", isPopular: true, features: ["Hazmat certified", "Full compliance", "Dedicated team", "Priority handling", "24/7 support"], buttonVariant: "gradient", tab: "desktop" },
            { id: 3, name: "Remote Site Service", price: "Quote-based", features: ["Route surveys", "Specialized equipment", "Extended delivery", "Site coordination"], buttonVariant: "black-border", tab: "desktop" },
        ],
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
        solutionItems: [
            { title: "Heavy Equipment Transport", titleBr: ["Heavy Equipment", "Transport"], categories: ["+ Specialized Vehicles", "+ Route Planning", "+ Permit Coordination"], delay: ".3", svgIcon: "BrandingIcon", link: "/service/end-to-end-freight-management" },
            { title: "Hazardous Materials", titleBr: ["Hazardous", "Materials"], categories: ["+ Safety Compliance", "+ Regulatory Handling", "+ Certified Personnel"], delay: ".5", svgIcon: "UIUXDesignIcon", link: "/service/end-to-end-freight-management" },
            { title: "Remote Site Delivery", titleBr: ["Remote Site", "Delivery"], categories: ["+ Site Surveys", "+ Specialized Equipment", "+ Extended Logistics"], delay: ".7", svgIcon: "WebDevelopmentIcon", link: "/service/end-to-end-freight-management" },
        ],
        challenge: {
            subtitle: "Complex Operations",
            title: "The Challenge",
            description: "Oil and gas operations often require delivery to remote locations with limited infrastructure. Equipment is heavy, oversized, and sometimes hazardous, requiring specialized permits and handling.",
            image: oilGasChallengeImage,
        },
        solution: {
            subtitle: "Integrated Solutions",
            title: "The Solution",
            description: "Our dedicated energy logistics team coordinates permits, route surveys, and specialized equipment to ensure safe delivery of all materials. We maintain full compliance with safety regulations.",
            image: oilGasSolutionImage,
        },
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
        heroImage: megaProjectHeroImage,
        heroDescription: "Transforming mega projects into reality through seamless logistics coordination. We manage complex supply chains across borders, ensuring every component arrives on time and in perfect condition.",
        heroContactText: "Plan Your Mega Project Logistics",
        heroFunFacts: [
            {
                id: 1,
                end: 50,
                suffix: "+",
                text: "Mega Projects <br /> Completed",
                delay: ".7",
            },
            {
                id: 2,
                end: 98,
                suffix: "%",
                text: "On-Time Delivery <br /> Rate",
                delay: ".9",
            },
        ],
        processSteps: [
            { number: "01", title: "Project Planning", description: "Comprehensive logistics planning with sequencing and contingency buffers." },
            { number: "02", title: "Supplier Coordination", description: "Coordinate with multiple suppliers across different countries and timelines." },
            { number: "03", title: "Real-Time Tracking", description: "Monitor all shipments with real-time visibility and proactive communication." },
            { number: "04", title: "Delivery & Installation", description: "Sequenced delivery and coordination with installation teams on-site." },
        ],
        pricingPlans: [
            { id: 1, name: "Project Planning", price: "Quote-based", features: ["Logistics planning", "Supplier coordination", "Timeline management", "Basic tracking"], buttonVariant: "black-border", tab: "desktop" },
            { id: 2, name: "Full Project Management", price: "Custom", isPopular: true, features: ["End-to-end management", "Dedicated team", "Real-time tracking", "Risk management", "24/7 support"], buttonVariant: "gradient", tab: "desktop" },
            { id: 3, name: "International Coordination", price: "Quote-based", features: ["Cross-border logistics", "Customs handling", "Multi-country coordination", "Compliance management"], buttonVariant: "black-border", tab: "desktop" },
        ],
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
        solutionItems: [
            { title: "Project Planning", titleBr: ["Project", "Planning"], categories: ["+ Logistics Strategy", "+ Timeline Management", "+ Resource Allocation"], delay: ".3", svgIcon: "BrandingIcon", link: "/service/end-to-end-freight-management" },
            { title: "Supplier Coordination", titleBr: ["Supplier", "Coordination"], categories: ["+ Multi-Vendor Management", "+ Cross-Border Logistics", "+ Sequencing"], delay: ".5", svgIcon: "UIUXDesignIcon", link: "/service/end-to-end-freight-management" },
            { title: "Real-Time Tracking", titleBr: ["Real-Time", "Tracking"], categories: ["+ Shipment Visibility", "+ Proactive Alerts", "+ Stakeholder Updates"], delay: ".7", svgIcon: "WebDevelopmentIcon", link: "/service/end-to-end-freight-management" },
        ],
        challenge: {
            subtitle: "Scale & Complexity",
            title: "The Challenge",
            description: "Mega projects involve coordinating deliveries from multiple suppliers across different countries, with strict timelines and sequencing requirements. Any delay cascades through the entire project.",
            image: megaProjectChallengeImage,
        },
        solution: {
            subtitle: "Precision Coordination",
            title: "The Solution",
            description: "Our project management team creates detailed logistics plans with contingency buffers. Real-time tracking and proactive communication keep all stakeholders informed and projects on schedule.",
            image: megaProjectChallengeImage,
        },
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
        heroImage: materialsManufacturingHeroImage,
        heroDescription: "Streamlining manufacturing operations with precision logistics. Our just-in-time delivery systems keep production lines running smoothly while minimizing inventory costs.",
        heroContactText: "Optimize Your Supply Chain",
        heroFunFacts: [
            {
                id: 1,
                end: 99,
                suffix: "%",
                text: "Production Uptime <br /> Maintained",
                delay: ".7",
            },
            {
                id: 2,
                end: 35,
                suffix: "%",
                text: "Inventory Cost <br /> Reduction",
                delay: ".9",
            },
        ],
        processSteps: [
            { number: "01", title: "Demand Analysis", description: "Analyze production schedules and material requirements using predictive analytics." },
            { number: "02", title: "JIT Scheduling", description: "Coordinate precise delivery timing aligned with production schedules." },
            { number: "03", title: "Warehouse Integration", description: "Seamless integration with warehouse management systems for real-time visibility." },
            { number: "04", title: "Continuous Optimization", description: "Monitor performance and adjust logistics to improve efficiency continuously." },
        ],
        pricingPlans: [
            { id: 1, name: "Standard JIT", price: "Quote-based", features: ["Just-in-time delivery", "Basic tracking", "Standard scheduling", "Inventory management"], buttonVariant: "black-border", tab: "desktop" },
            { id: 2, name: "Optimized Supply Chain", price: "Custom", isPopular: true, features: ["Advanced analytics", "Dedicated coordinator", "Priority scheduling", "Cost optimization", "24/7 support"], buttonVariant: "gradient", tab: "desktop" },
            { id: 3, name: "Full Integration", price: "Quote-based", features: ["System integration", "Predictive analytics", "Custom reporting", "Multi-site coordination"], buttonVariant: "black-border", tab: "desktop" },
        ],
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
        solutionItems: [
            { title: "Just-In-Time Delivery", titleBr: ["Just-In-Time", "Delivery"], categories: ["+ Production Alignment", "+ Inventory Reduction", "+ Cost Optimization"], delay: ".3", svgIcon: "BrandingIcon", link: "/service/end-to-end-freight-management" },
            { title: "Warehouse Integration", titleBr: ["Warehouse", "Integration"], categories: ["+ System Connectivity", "+ Real-Time Data", "+ Automated Processes"], delay: ".5", svgIcon: "UIUXDesignIcon", link: "/service/end-to-end-freight-management" },
            { title: "Predictive Analytics", titleBr: ["Predictive", "Analytics"], categories: ["+ Demand Forecasting", "+ Route Optimization", "+ Performance Insights"], delay: ".7", svgIcon: "WebDevelopmentIcon", link: "/service/end-to-end-freight-management" },
        ],
        challenge: {
            subtitle: "Production Continuity",
            title: "The Challenge",
            description: "Manufacturing facilities require precise timing of material deliveries. Stock-outs halt production lines at significant cost, while excess inventory ties up capital and warehouse space.",
            image: materialsManufacturingChallengeImage,
        },
        solution: {
            subtitle: "JIT Excellence",
            title: "The Solution",
            description: "Our integrated warehouse management and transportation systems enable true just-in-time delivery. Predictive analytics help anticipate demand fluctuations and adjust logistics accordingly.",
            image: materialsManufacturingSolutionImage,
        },
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
        heroImage: hospitalityHeroImage,
        heroDescription: "Elevating hospitality experiences through seamless logistics. We deliver FF&E for hotel openings and renovations with precision timing, ensuring minimal disruption to your guests and operations.",
        heroContactText: "Schedule Your FF&E Delivery",
        heroFunFacts: [
            {
                id: 1,
                end: 200,
                suffix: "+",
                text: "Hotel Projects <br /> Completed",
                delay: ".7",
            },
            {
                id: 2,
                end: 95,
                suffix: "%",
                text: "On-Time Delivery <br /> Rate",
                delay: ".9",
            },
        ],
        processSteps: [
            { number: "01", title: "Project Coordination", description: "Coordinate with property managers to schedule deliveries during low-occupancy periods." },
            { number: "02", title: "Room Sequencing", description: "Create detailed room-by-room delivery plans for efficient installation workflow." },
            { number: "03", title: "FF&E Delivery", description: "Deliver Furniture, Fixtures & Equipment with minimal guest disruption." },
            { number: "04", title: "Installation Support", description: "Coordinate with installation teams and ensure proper placement and setup." },
        ],
        pricingPlans: [
            { id: 1, name: "Standard FF&E", price: "Quote-based", features: ["FF&E delivery", "Basic scheduling", "Standard handling", "Delivery confirmation"], buttonVariant: "black-border", tab: "desktop" },
            { id: 2, name: "Premium Service", price: "Custom", isPopular: true, features: ["White-glove service", "Room sequencing", "Installation support", "Dedicated coordinator", "Priority scheduling"], buttonVariant: "gradient", tab: "desktop" },
            { id: 3, name: "Full Project Management", price: "Quote-based", features: ["End-to-end management", "Multi-phase coordination", "Custom scheduling", "Project oversight"], buttonVariant: "black-border", tab: "desktop" },
        ],
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
        solutionItems: [
            { title: "FF&E Delivery", titleBr: ["FF&E", "Delivery"], categories: ["+ Furniture & Fixtures", "+ Equipment Transport", "+ Installation Support"], delay: ".3", svgIcon: "BrandingIcon", link: "/service/end-to-end-freight-management" },
            { title: "Room Sequencing", titleBr: ["Room", "Sequencing"], categories: ["+ Floor-by-Floor Plans", "+ Efficient Workflow", "+ Minimal Disruption"], delay: ".5", svgIcon: "UIUXDesignIcon", link: "/service/end-to-end-freight-management" },
            { title: "Project Coordination", titleBr: ["Project", "Coordination"], categories: ["+ Timeline Management", "+ Property Access", "+ Guest Impact"], delay: ".7", svgIcon: "WebDevelopmentIcon", link: "/service/end-to-end-freight-management" },
        ],
        challenge: {
            subtitle: "Operational Sensitivity",
            title: "The Challenge",
            description: "Hotels require deliveries during specific windows to minimize guest disruption. Items must be delivered to correct floors and rooms in precise sequences to facilitate rapid installation.",
            image: hospitalityChallengeImage,
        },
        solution: {
            subtitle: "White Glove Service",
            title: "The Solution",
            description: "Our hospitality logistics team coordinates with property managers to schedule deliveries during low-occupancy periods. Room-by-room delivery plans ensure efficient installation workflow.",
            image: hospitalityChallengeImage,
        },
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
        heroImage: furnitureFixturesHeroImage,
        heroDescription: "Protecting your most valuable pieces with expert care. Our white-glove furniture delivery service ensures every custom piece arrives safely, unpacked, and perfectly placed according to your vision.",
        heroContactText: "Book White-Glove Delivery",
        heroFunFacts: [
            {
                id: 1,
                end: 100,
                suffix: "%",
                text: "Damage-Free <br /> Delivery Rate",
                delay: ".7",
            },
            {
                id: 2,
                end: 10000,
                suffix: "+",
                text: "Pieces Delivered <br /> Annually",
                delay: ".9",
            },
        ],
        processSteps: [
            { number: "01", title: "Pre-Delivery Planning", description: "Review furniture specifications and delivery requirements with designers." },
            { number: "02", title: "Custom Protection", description: "Apply custom blanket wrapping and protective materials for safe transport." },
            { number: "03", title: "Careful Transport", description: "Use air-ride vehicles and specialized lifting equipment for delicate pieces." },
            { number: "04", title: "White-Glove Placement", description: "Unpack, place, and position furniture according to designer specifications." },
        ],
        pricingPlans: [
            { id: 1, name: "Standard Delivery", price: "Quote-based", features: ["Basic handling", "Standard delivery", "Delivery confirmation", "Basic protection"], buttonVariant: "black-border", tab: "desktop" },
            { id: 2, name: "White-Glove Service", price: "Custom", isPopular: true, features: ["Full unpacking", "Placement service", "Floor protection", "Debris removal", "Designer coordination"], buttonVariant: "gradient", tab: "desktop" },
            { id: 3, name: "Premium Care", price: "Quote-based", features: ["Custom wrapping", "Specialized equipment", "Oversized handling", "Installation support"], buttonVariant: "black-border", tab: "desktop" },
        ],
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
        solutionItems: [
            { title: "Custom Protection", titleBr: ["Custom", "Protection"], categories: ["+ Blanket Wrapping", "+ Specialized Packaging", "+ Damage Prevention"], delay: ".3", svgIcon: "BrandingIcon", link: "/service/end-to-end-freight-management" },
            { title: "White-Glove Placement", titleBr: ["White-Glove", "Placement"], categories: ["+ Unpacking Service", "+ Designer Coordination", "+ Floor Protection"], delay: ".5", svgIcon: "UIUXDesignIcon", link: "/service/end-to-end-freight-management" },
            { title: "Specialized Equipment", titleBr: ["Specialized", "Equipment"], categories: ["+ Air-Ride Vehicles", "+ Lifting Equipment", "+ Oversized Handling"], delay: ".7", svgIcon: "WebDevelopmentIcon", link: "/service/end-to-end-freight-management" },
        ],
        challenge: {
            subtitle: "Delicate Handling",
            title: "The Challenge",
            description: "High-end furniture is often custom-made and irreplaceable. Pieces may be oversized, fragile, or have delicate finishes that require special protection during transport and installation.",
            image: furnitureFixturesChallengeImage,
        },
        solution: {
            subtitle: "Expert Care",
            title: "The Solution",
            description: "Our trained crews use custom blanket wrapping, air-ride vehicles, and specialized lifting equipment. Final placement is done with floor protection and according to designer specifications.",
            image: furnitureFixturesSolutionImage,
        },
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
        heroImage: foodCommoditiesHeroImage,
        heroDescription: "Maintaining perfect conditions from farm to table. Our advanced cold chain logistics ensure food products stay fresh and safe throughout the entire journey, meeting the highest quality standards.",
        heroContactText: "Secure Cold Chain Transport",
        heroFunFacts: [
            {
                id: 1,
                end: 100,
                suffix: "%",
                text: "Temperature <br /> Compliance Rate",
                delay: ".7",
            },
            {
                id: 2,
                end: 50000,
                suffix: "+",
                text: "Tons Transported <br /> Annually",
                delay: ".9",
            },
        ],
        processSteps: [
            { number: "01", title: "Temperature Setup", description: "Pre-cool vehicles to required temperature before loading perishable products." },
            { number: "02", title: "Continuous Monitoring", description: "Real-time temperature monitoring with automatic alerts throughout transport." },
            { number: "03", title: "Chain of Custody", description: "Complete digital documentation of temperature records and handling procedures." },
            { number: "04", title: "Quality Delivery", description: "Verify temperature compliance and product quality upon final delivery." },
        ],
        pricingPlans: [
            { id: 1, name: "Standard Cold Chain", price: "Quote-based", features: ["Temperature-controlled transport", "Basic monitoring", "Standard delivery", "Basic documentation"], buttonVariant: "black-border", tab: "desktop" },
            { id: 2, name: "Premium Cold Chain", price: "Custom", isPopular: true, features: ["Real-time monitoring", "Automatic alerts", "Full documentation", "Dedicated coordinator", "24/7 support"], buttonVariant: "gradient", tab: "desktop" },
            { id: 3, name: "Compliance Plus", price: "Quote-based", features: ["Full compliance", "Digital records", "Quality verification", "Regulatory support"], buttonVariant: "black-border", tab: "desktop" },
        ],
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
        solutionItems: [
            { title: "Temperature Control", titleBr: ["Temperature", "Control"], categories: ["+ Refrigerated Fleet", "+ Pre-Cooling", "+ Temperature Setup"], delay: ".3", svgIcon: "BrandingIcon", link: "/service/end-to-end-freight-management" },
            { title: "Real-Time Monitoring", titleBr: ["Real-Time", "Monitoring"], categories: ["+ Continuous Tracking", "+ Automatic Alerts", "+ Digital Records"], delay: ".5", svgIcon: "UIUXDesignIcon", link: "/service/end-to-end-freight-management" },
            { title: "Compliance Documentation", titleBr: ["Compliance", "Documentation"], categories: ["+ Chain of Custody", "+ Regulatory Records", "+ Quality Verification"], delay: ".7", svgIcon: "WebDevelopmentIcon", link: "/service/end-to-end-freight-management" },
        ],
        challenge: {
            subtitle: "Temperature Integrity",
            title: "The Challenge",
            description: "Food products have strict temperature requirements throughout the supply chain. Any break in the cold chain can result in spoilage, safety issues, and regulatory violations.",
            image: foodCommoditiesChallengeImage,
        },
        solution: {
            subtitle: "Continuous Monitoring",
            title: "The Solution",
            description: "Our refrigerated fleet features real-time temperature monitoring with automatic alerts. Digital records provide complete chain of custody documentation for regulatory compliance.",
            image: foodCommoditiesSolutionImage,
        },
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
        heroImage: diplomaticMissionsHeroImage,
        heroDescription: "Protecting sensitive cargo with uncompromising security. Our diplomatic logistics services meet the highest international standards, ensuring complete confidentiality and chain of custody for government missions worldwide.",
        heroContactText: "Request Secure Transport",
        heroFunFacts: [
            {
                id: 1,
                end: 100,
                suffix: "%",
                text: "Security Compliance <br /> Rate",
                delay: ".7",
            },
            {
                id: 2,
                end: 500,
                suffix: "+",
                text: "Secure Missions <br /> Completed",
                delay: ".9",
            },
        ],
        processSteps: [
            { number: "01", title: "Security Assessment", description: "Comprehensive security evaluation and protocol establishment for sensitive cargo." },
            { number: "02", title: "Secure Packaging", description: "Apply tamper-evident seals and security measures to protect cargo integrity." },
            { number: "03", title: "Escorted Transport", description: "Security-cleared personnel and escort services for maximum protection." },
            { number: "04", title: "Chain of Custody", description: "Complete documentation and verification of secure handover procedures." },
        ],
        pricingPlans: [
            { id: 1, name: "Standard Secure", price: "Quote-based", features: ["Basic security", "GPS tracking", "Standard protocols", "Basic documentation"], buttonVariant: "black-border", tab: "desktop" },
            { id: 2, name: "Diplomatic Service", price: "Custom", isPopular: true, features: ["Highest security", "Security-cleared personnel", "Escort services", "Full confidentiality", "24/7 monitoring"], buttonVariant: "gradient", tab: "desktop" },
            { id: 3, name: "Government Protocol", price: "Quote-based", features: ["International standards", "Complete documentation", "Regulatory compliance", "Multi-country coordination"], buttonVariant: "black-border", tab: "desktop" },
        ],
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
        solutionItems: [
            { title: "Security Assessment", titleBr: ["Security", "Assessment"], categories: ["+ Protocol Establishment", "+ Risk Evaluation", "+ Security Planning"], delay: ".3", svgIcon: "BrandingIcon", link: "/service/end-to-end-freight-management" },
            { title: "Escorted Transport", titleBr: ["Escorted", "Transport"], categories: ["+ Security-Cleared Personnel", "+ Escort Services", "+ 24/7 Monitoring"], delay: ".5", svgIcon: "UIUXDesignIcon", link: "/service/end-to-end-freight-management" },
            { title: "Chain of Custody", titleBr: ["Chain of", "Custody"], categories: ["+ Tamper-Evident Seals", "+ Complete Documentation", "+ Confidentiality"], delay: ".7", svgIcon: "WebDevelopmentIcon", link: "/service/end-to-end-freight-management" },
        ],
        challenge: {
            subtitle: "Maximum Security",
            title: "The Challenge",
            description: "Diplomatic cargo requires the highest levels of security and discretion. Materials must be protected from tampering, theft, and surveillance throughout international transit.",
            image: diplomaticMissionsChallengeImage,
        },
        solution: {
            subtitle: "Diplomatic Protocol",
            title: "The Solution",
            description: "Our security-cleared personnel follow strict protocols including tamper-evident seals, GPS tracking, and escort services. All operations maintain complete confidentiality and chain of custody.",
            image: diplomaticMissionsSolutionImage,
        },
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
