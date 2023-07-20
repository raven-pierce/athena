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
