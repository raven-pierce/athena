import {
    CreditCardIcon,
    DocumentChartBarIcon,
    VideoCameraIcon,
} from '@heroicons/react/20/solid';
import { Feature } from '@/types/marketing/product';

export let features: Feature[] = [
    {
        name: 'Recording Library',
        description:
            'Record your lessons and make them available for your students to watch at any time.',
        href: '#',
        icon: VideoCameraIcon,
    },
    {
        name: 'Detailed Reports',
        description:
            'Keep track of exactly how your students are performing with detailed reports.',
        href: '#',
        icon: DocumentChartBarIcon,
    },
    {
        name: 'Stripe Invoicing',
        description:
            'Take advantage of our hassle-free, built-in invoicing system to bill your students for your time.',
        href: '#',
        icon: CreditCardIcon,
    },
];
