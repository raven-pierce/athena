import { ForwardRefExoticComponent, PropsWithoutRef, SVGProps } from 'react';
import { Price } from '@/types/marketing/pricing';

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
