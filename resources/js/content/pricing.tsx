import {
    CheckBadgeIcon,
    CreditCardIcon,
    DocumentChartBarIcon,
    LightBulbIcon,
    VideoCameraIcon,
} from '@heroicons/react/20/solid';
import {
    type ComparisonSection,
    type Frequency,
} from '@/types/marketing/pricing';
import { type Plan } from '@/types/marketing/product';

export const plans: Plan[] = [
    {
        name: 'Essential',
        id: 'plan-essential',
        href: '#',
        price: { monthly: 30, yearly: 270 },
        description:
            'A plan for those just getting started with online lessons.',
        features: [
            {
                name: 'Recording Library',
                description:
                    'Record your lessons and make them available for your students to watch at any time.',
                href: '#',
                icon: VideoCameraIcon,
            },
            {
                name: 'Attendance Tracking',
                description:
                    'Keep track of your students attendance with our built-in attendance tracking system.',
                href: '#',
                icon: CheckBadgeIcon,
            },
            {
                name: 'Assessments',
                description:
                    'Assign homework and quizzes to your students to keep them engaged and learning.',
                href: '#',
                icon: LightBulbIcon,
            },
            {
                name: 'Stripe Invoicing',
                description:
                    'Take advantage of our hassle-free, built-in invoicing system to bill your students for your time.',
                href: '#',
                icon: CreditCardIcon,
            },
            {
                name: 'Detailed Reports',
                description:
                    'Keep track of exactly how your students are performing with detailed reports.',
                href: '#',
                icon: DocumentChartBarIcon,
            },
        ],
        featured: false,
    },
    {
        name: 'Plus',
        id: 'plan-plus',
        href: '#',
        price: { monthly: 50, yearly: 450 },
        description:
            'A plan for established teachers looking to grow their business.',
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
        name: 'Pro',
        id: 'plan-pro',
        href: '#',
        price: { monthly: 100, yearly: 900 },
        description:
            'A plan tailored to educational institutions and large studios.',
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

export const frequencies: Frequency[] = [
    { value: 'monthly', label: 'Monthly', suffix: '/month' },
    { value: 'yearly', label: 'Yearly', suffix: '/year' },
];

export const features: ComparisonSection[] = [
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
