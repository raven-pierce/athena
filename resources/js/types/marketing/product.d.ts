import {
    type ForwardRefExoticComponent,
    type PropsWithoutRef,
    type SVGProps,
} from 'react';
import { type Price } from '@/types/marketing/pricing';

export type Product = {
    name: string;
    description: string;
    href: string;
    icon: ForwardRefExoticComponent<PropsWithoutRef<SVGProps<SVGSVGElement>>>;
};

export type Feature = {
    name: string;
    description: string;
    href: string;
    icon: ForwardRefExoticComponent<PropsWithoutRef<SVGProps<SVGSVGElement>>>;
};

export type Plan = {
    id: string;
    name: string;
    href: string;
    price: Price;
    description: string;
    features: Feature[];
    featured: boolean;
};
