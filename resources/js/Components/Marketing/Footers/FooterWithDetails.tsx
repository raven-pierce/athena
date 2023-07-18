import { navigation, socialLinks } from '@/content/Marketing/Footers';
import { NavigationLink, SocialLink } from '@/types/marketing';
import { Link } from '@inertiajs/react';

/* TODO: Create about, support, accessibility, and legal pages. */
/* TODO: Implement social media icon library. */

export default function FooterWithDetails() {
    return (
        <footer aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        {/* TODO: Swap out with application logo */}
                        <img
                            className="h-7"
                            src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
                            alt="Company name"
                        />
                        <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                            A SaaS platform that provides a lightweight, modern,
                            and customizable learning management system catered
                            towards distance learning.
                        </p>
                        <div className="flex space-x-6">
                            {socialLinks.map((item: SocialLink) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                                >
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-950 dark:text-white">
                                    Solutions
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.solutions.map(
                                        (item: NavigationLink) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className="text-sm leading-6 text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-950 dark:text-white">
                                    Support
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.support.map(
                                        (item: NavigationLink) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className="text-sm leading-6 text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-gray-950 dark:text-white">
                                    Company
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.company.map(
                                        (item: NavigationLink) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className="text-sm leading-6 text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-gray-950 dark:text-white">
                                    Legal
                                </h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    {navigation.legal.map(
                                        (item: NavigationLink) => (
                                            <li key={item.name}>
                                                <Link
                                                    href={item.href}
                                                    className="text-sm leading-6 text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-950/10 pt-8 dark:border-white/10 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-500 dark:text-gray-400">
                        Copyright &copy; 2023{' '}
                        {import.meta.env.VITE_APP_NAME || 'Laravel'}, LLC. All
                        Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
