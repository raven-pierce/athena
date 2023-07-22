import { type Feature } from '@/types/marketing/product';
import { features } from '@/content/product';
import { Link } from '@inertiajs/react';

export default function FeaturesWithLargeIcons() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-4xl">
                        One platform to rule them all.
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                        You&rsquo;ve got enough to worry about. Let us handle
                        the rest. We&rsquo;ve got you covered.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature: Feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-gray-950 dark:text-white">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600 dark:bg-orange-500">
                                        <feature.icon
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 dark:text-gray-300">
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
