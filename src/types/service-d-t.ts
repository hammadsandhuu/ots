import { StaticImageData } from "next/image";
import { PricePlanDT } from "./custom-d-t";

export interface servicesDT {
    id: number;
    title: string;
    image?: StaticImageData;
    description?: string;
    categories?: string[];
    isExpanded?: boolean;
    slug?: string;
    number?: string,
    icon?: StaticImageData;
    svgIcon?: React.ElementType;
    delay?: string
    colorClass?: string;
    link:string;
    images?:StaticImageData[],
    text?:string[];
    titleBr?:string[];
    spacingCls?:string;
}

/** Process step for service detail page */
export interface ServiceProcessStep {
    number: string;
    title: string;
    description: string;
}

/** Solution/related item for service detail page */
export interface ServiceSolutionItem {
    title: string;
    titleBr?: [string, string];
    categories: string[];
    delay?: string;
    svgIcon?: string; // Icon key e.g. "BrandingIcon", "UIUXDesignIcon", "WebDevelopmentIcon"
    link: string;
}

/** Counter item for service detail page */
export interface ServiceCounterItem {
    value: number;
    unit: string;
    descriptionBr: [string, string];
    delay: string;
}

/** Full service detail - extends base with page-specific content */
export interface ServiceDetailData extends servicesDT {
    bannerImage?: StaticImageData;
    overviewImage?: StaticImageData;
    overviewText?: string;
    overviewSubtitle?: string;
    overviewFeatures?: string[];
    thumbImages?: [StaticImageData, StaticImageData];
    processSteps?: ServiceProcessStep[];
    solutionItems?: ServiceSolutionItem[];
    counterData?: ServiceCounterItem[];
    pricingPlans?: PricePlanDT[];
}