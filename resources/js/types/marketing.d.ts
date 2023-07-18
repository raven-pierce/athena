import { ForwardRefExoticComponent, PropsWithoutRef, SVGProps } from 'react';

export interface Navigation {
    [key: string]: NavigationLink[];
}

export interface NavigationLink {
    name: string;
    href: string;
}

export interface SocialLink {
    name: string;
    href: string;
    icon: any;
}

export interface CompanyLink {
    name: string;
    description: string;
    href: string;
}

export interface Product {
    name: string;
    description: string;
    href: string;
    icon: ForwardRefExoticComponent<PropsWithoutRef<SVGProps<SVGSVGElement>>>;
}

export interface Feature {
    name: string;
    description: string;
    href: string;
    icon: ForwardRefExoticComponent<PropsWithoutRef<SVGProps<SVGSVGElement>>>;
}

export interface Plan {
    id: string;
    name: string;
    href: string;
    price: Price;
    description: string;
    features: Feature[];
    featured: boolean;
}

export interface Price {
    [key: string]: number;
}

export interface Frequency {
    value: string;
    label: string;
    suffix: string;
}

export interface ComparisonSection {
    name: string;
    features: ComparisonFeature[];
}

export interface ComparisonFeature {
    name: string;
    plans: ComparisonPlans;
}

export interface ComparisonPlans {
    [key: string]: boolean | string;
}
