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
    heroDescription?: string;
    heroFunFacts?: SectorHeroFunFact[];
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
    processSteps?: SectorProcessStep[];
    solutionItems?: ServiceSolutionItem[];
    pricingPlans?: PricePlanDT[];
    galleryImages?: StaticImageData[];
    galleryImagesTwo?: StaticImageData[];
}
