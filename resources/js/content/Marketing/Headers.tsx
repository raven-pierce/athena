import {
    ArrowPathIcon,
    CreditCardIcon,
    DocumentChartBarIcon,
    SquaresPlusIcon,
    VideoCameraIcon,
} from '@heroicons/react/24/outline';
import { CompanyLink, Product } from '@/types/marketing';

export let products: Product[] = [
    {
        name: 'Recordings',
        description:
            'Record your lessons and make them available for your students to watch at any time.',
        href: '#',
        icon: VideoCameraIcon,
    },
    {
        name: 'Reports',
        description:
            'Keep track of exactly how your students are performing with detailed reports.',
        href: '#',
        icon: DocumentChartBarIcon,
    },
    {
        name: 'Invoicing',
        description:
            'Take advantage of our hassle-free, built-in invoicing system.',
        href: '#',
        icon: CreditCardIcon,
    },
    {
        name: 'Integrations',
        description: 'Connect with third-party tools',
        href: '#',
        icon: SquaresPlusIcon,
    },
    {
        name: 'Automations',
        description: 'Build strategic funnels that will convert',
        href: '#',
        icon: ArrowPathIcon,
    },
];

export let companyLinks: CompanyLink[] = [
    {
        name: 'Who are we?',
        description:
            'Get to know more about our company and the team behind it.',
        href: '#',
    },
    {
        name: 'Work with us',
        description:
            'See available job opportunities and learn more about our culture.',
        href: '#',
    },
    {
        name: 'Need a hand?',
        description:
            'Check out our support page and get your questions answered.',
        href: '#',
    },
    {
        name: 'Stay in the loop',
        description:
            'Read our blog for articles about our company and product.',
        href: '#',
    },
];
