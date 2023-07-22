export type Navigation = Record<string, NavigationLink[]>;

export type NavigationLink = {
    name: string;
    href: string;
};

export type SocialLink = {
    name: string;
    href: string;
    icon: any;
};

export type CompanyLink = {
    name: string;
    description: string;
    href: string;
};
