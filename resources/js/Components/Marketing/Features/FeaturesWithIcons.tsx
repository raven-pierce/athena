import { Feature } from '@/types/marketing';
import { Link } from '@inertiajs/react';
import { features } from '@/Content/Marketing/Features';

export default function FeaturesWithIcons() {
    return (
        <div className="bg-white py-24 dark:bg-gray-900 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-orange-600 dark:text-orange-400">
                        Learning, Simplified.
                    </h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                        One platform to rule them all.
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        You&rsquo;ve got enough to worry about. Let us handle
                        the rest. We&rsquo;ve got you covered.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature: Feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                    <feature.icon
                                        className="h-5 w-5 flex-none text-orange-600 dark:text-orange-400"
                                        aria-hidden="true"
                                    />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
                                    <p className="flex-auto">
                                        {feature.description}
                                    </p>
                                    <p className="mt-6">
                                        <Link
                                            href={feature.href}
                                            className="text-sm font-semibold leading-6 text-orange-600 dark:text-orange-400"
                                        >
                                            Learn More{' '}
                                            <span aria-hidden="true">
                                                &rarr;
                                            </span>
                                        </Link>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
