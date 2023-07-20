import { NavigationLink, SocialLink } from '@/types/marketing/navigation';
import { simpleNavigation, socialLinks } from '@/content/navigation';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
            <nav
                className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
                aria-label="Footer"
            >
                {simpleNavigation.map((item: NavigationLink) => (
                    <div key={item.name} className="pb-6">
                        <Link
                            href={item.href}
                            className="text-sm leading-6 text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
                        >
                            {item.name}
                        </Link>
                    </div>
                ))}
            </nav>
            <div className="mt-10 flex justify-center space-x-10">
                {socialLinks.map((item: SocialLink) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                    >
                        <span className="sr-only">{item.name}</span>
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                ))}
            </div>
            <p className="mt-10 text-center text-xs leading-5 text-gray-500 dark:text-gray-400">
                Copyright &copy; 2023{' '}
                {import.meta.env.VITE_APP_NAME || 'Laravel'}, LLC. All Rights
                Reserved.
            </p>
        </footer>
    );
}
