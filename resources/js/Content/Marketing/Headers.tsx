import { CompanyLink, Product } from '@/types/marketing';
import {
    ArrowPathIcon,
    CreditCardIcon,
    DocumentChartBarIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
} from '@heroicons/react/24/outline';

export let products: Product[] = [
    {
        name: 'Invoicing',
        description: 'Get a better understanding of your traffic',
        href: '#',
        icon: CreditCardIcon,
    },
    {
        name: 'Reports',
        description: 'Speak directly to your customers',
        href: '#',
        icon: DocumentChartBarIcon,
    },
    {
        name: 'Security',
        description: 'Your customers’ data will be safe and secure',
        href: '#',
        icon: FingerPrintIcon,
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
        name: "Here's what we're up to",
        description:
            'Read our blog for articles about our company and product.',
        href: '#',
    },
];
