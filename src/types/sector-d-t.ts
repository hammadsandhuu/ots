import { StaticImageData } from "next/image";
import { FaqEntry, PricePlanDT } from "./custom-d-t";
import { ServiceSolutionItem } from "./service-d-t";

export interface SectorHeroFunFact {
    id: number;
    end: number;
    suffix: string;
    text: string | React.ReactNode;
    delay?: string;
}

/** Process step for sector detail page */
export interface SectorProcessStep {
    number: string;
    title: string;
    description: string;
}

export interface SectorData {
    id: number;
    title: string;
    slug: string;
    link: string;
    categories: string[];
    year: string;
    heroImage: StaticImageData;
    /** Hero description (shown on hero image) - different from overview description */
    heroDescription?: string;
    /** Fun facts displayed on hero section */
    heroFunFacts?: SectorHeroFunFact[];
    /** Contact CTA text displayed in hero Contact Us box - different for each sector */
    heroContactText?: string;
    overview: {
        subtitle: string;
        description: string;
        info: { label: string; value: string }[];
    };
    challenge: {
        subtitle: string;
        title: string;
        description: string;
        image: StaticImageData;
    };
    solution: {
        subtitle: string;
        title: string;
        description: string;
        image: StaticImageData;
    };
    faqs?: FaqEntry[];
    /** Process steps for how we deliver this sector's services */
    processSteps?: SectorProcessStep[];
    /** Solution items/services related to this sector */
    solutionItems?: ServiceSolutionItem[];
    /** Pricing plans for this sector */
    pricingPlans?: PricePlanDT[];
    /** Gallery images for portfolio details gallery component */
    galleryImages?: StaticImageData[];
    /** Gallery images for portfolio details gallery two component */
    galleryImagesTwo?: StaticImageData[];
}
