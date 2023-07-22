import { type Feature, type Plan } from '@/types/marketing/product';
import { frequencies, plans } from '@/content/pricing';
import { type Frequency } from '@/types/marketing/pricing';
import { CheckIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function PricingWithFrequencyToggles() {
    const [frequency, setFrequency] = useState(frequencies[0]);

    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-orange-600 dark:text-orange-400">
                        Scalable Pricing
                    </h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-gray-950 dark:text-white sm:text-5xl">
                        We&rsquo;re light on your wallet.
                    </p>
                </div>
                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-300">
                    A model so simple, you&rsquo;ll wonder why you ever paid for
                    anything else.
                </p>
                <div className="mt-16 flex justify-center">
                    <RadioGroup
                        value={frequency}
                        onChange={setFrequency}
                        className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200 dark:bg-white/5 dark:text-white dark:ring-0"
                    >
                        <RadioGroup.Label className="sr-only">
                            Payment frequency
                        </RadioGroup.Label>
                        {frequencies.map((option: Frequency) => (
                            <RadioGroup.Option
                                key={option.value}
                                value={option}
                                className={({ checked }) =>
                                    classNames(
                                        checked
                                            ? 'bg-orange-600 text-white dark:bg-orange-500'
                                            : 'text-gray-500 dark:text-gray-400',
                                        'cursor-pointer rounded-full px-2.5 py-1'
                                    )
                                }
                            >
                                <span>{option.label}</span>
                            </RadioGroup.Option>
                        ))}
                    </RadioGroup>
                </div>
                <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {plans.map((plan: Plan) => (
                        <div
                            key={plan.id}
                            className={classNames(
                                plan.featured
                                    ? 'ring-2 ring-orange-600 dark:bg-white/5 dark:ring-orange-500'
                                    : 'ring-1 ring-gray-200 dark:ring-white/10',
                                'rounded-3xl p-8 xl:p-10'
                            )}
                        >
                            <div className="flex items-center justify-between gap-x-4">
                                <h3
                                    id={plan.id}
                                    className={classNames(
                                        plan.featured
                                            ? 'text-orange-600 dark:text-white'
                                            : 'text-gray-950 dark:text-white',
                                        'text-lg font-semibold leading-8'
                                    )}
                                >
                                    {plan.name}
                                </h3>
                                {plan.featured ? (
                                    <p className="rounded-full bg-orange-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-orange-600 dark:bg-orange-500 dark:text-white">
                                        Featured
                                    </p>
                                ) : null}
                            </div>
                            <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                {plan.description}
                            </p>
                            <p className="mt-6 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold tracking-tight text-gray-950 dark:text-white">
                                    ${plan.price[frequency.value]}
                                </span>
                                <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">
                                    {frequency.suffix}
                                </span>
                            </p>
                            <Link
                                href={plan.href}
                                aria-describedby={plan.id}
                                className={classNames(
                                    plan.featured
                                        ? 'bg-orange-600 text-white shadow-sm hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus-visible:outline-orange-500'
                                        : 'text-orange-600 ring-1 ring-inset ring-orange-200 hover:ring-orange-300 dark:bg-white/10 dark:text-white dark:ring-0 dark:hover:bg-white/20 dark:focus-visible:outline-white',
                                    'mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600'
                                )}
                            >
                                Buy plan
                            </Link>
                            <ul
                                role="list"
                                className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300 xl:mt-10"
                            >
                                {plan.features.map((feature: Feature) => (
                                    <li
                                        key={feature.name}
                                        className="flex gap-x-3"
                                    >
                                        <CheckIcon
                                            className="h-6 w-5 flex-none text-orange-600 dark:text-white"
                                            aria-hidden="true"
                                        />
                                        {feature.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
