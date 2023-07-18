import {
    CreditCardIcon,
    DocumentChartBarIcon,
    VideoCameraIcon,
} from '@heroicons/react/20/solid';
import { ComparisonSection, Frequency, Plan } from '@/types/marketing';

export let plans: Plan[] = [
    {
        name: 'Essential',
        id: 'plan-essential',
        href: '#',
        price: { monthly: 29, yearly: 290 },
        description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
        features: [
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
        ],
        featured: false,
    },
    {
        name: 'Basic',
        id: 'plan-basic',
        href: '#',
        price: { monthly: 29, yearly: 290 },
        description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
        features: [
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
        ],
        featured: true,
    },
    {
        name: 'Plus',
        id: 'plan-plus',
        href: '#',
        price: { monthly: 29, yearly: 290 },
        description: 'Quis suspendisse ut fermentum neque vivamus non tellus.',
        features: [
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
        ],
        featured: false,
    },
];

export let frequencies: Frequency[] = [
    { value: 'monthly', label: 'Monthly', suffix: '/month' },
    { value: 'yearly', label: 'Yearly', suffix: '/year' },
];

export let features: ComparisonSection[] = [
    {
        name: 'Features',
        features: [
            {
                name: 'Integrations',
                plans: { Basic: true },
            },
        ],
    },
];
