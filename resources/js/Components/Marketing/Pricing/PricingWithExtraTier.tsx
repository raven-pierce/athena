import { frequencies, plans } from '@/content/Marketing/Pricings';
import { Feature, Frequency, Plan } from '@/types/marketing';
import { CheckIcon } from '@heroicons/react/20/solid';
import { RadioGroup } from '@headlessui/react';
import { Link } from '@inertiajs/react';
import { useState } from 'react';

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function PricingWithExtraTier() {
    let [frequency, setFrequency] = useState(frequencies[0]);

    return (
        <div className="isolate overflow-hidden bg-gray-950">
            <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <h2 className="text-base font-semibold leading-7 text-orange-400">
                        Pricing
                    </h2>
                    <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                        The right price for you,{' '}
                        <br className="hidden sm:inline lg:hidden" />
                        whoever you are
                    </p>
                </div>
                <div className="relative mt-6">
                    <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Velit numquam eligendi quos odit doloribus
                        molestiae voluptatum.
                    </p>
                    <svg
                        viewBox="0 0 1208 1024"
                        className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
                    >
                        <ellipse
                            cx={604}
                            cy={512}
                            fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
                            rx={604}
                            ry={512}
                        />
                        <defs>
                            <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#E935C1" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
            </div>
            <div className="flow-root bg-white pb-24 dark:bg-gray-950 sm:pb-32">
                <div className="-mt-96">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mt-16 flex justify-center">
                            <RadioGroup
                                value={frequency}
                                onChange={setFrequency}
                                className="grid grid-cols-2 gap-x-1 rounded-full bg-white/5 p-1 text-center text-xs font-semibold leading-5"
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
                                                    : 'text-gray-400',
                                                'cursor-pointer rounded-full px-2.5 py-1'
                                            )
                                        }
                                    >
                                        <span>{option.label}</span>
                                    </RadioGroup.Option>
                                ))}
                            </RadioGroup>
                        </div>
                        <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 lg:mt-16 lg:max-w-4xl lg:grid-cols-2">
                            {plans.map((plan: Plan) => (
                                <div
                                    key={plan.id}
                                    className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-950/10 dark:bg-gray-950 dark:ring-white/10 sm:p-10"
                                >
                                    <div>
                                        <h3
                                            id={plan.id}
                                            className="text-base font-semibold leading-7 text-orange-600 dark:text-orange-400"
                                        >
                                            {plan.name}
                                        </h3>
                                        <div className="mt-4 flex items-baseline gap-x-2">
                                            <span className="text-5xl font-bold tracking-tight text-gray-950 dark:text-white">
                                                ${plan.price[frequency.value]}
                                            </span>
                                            <span className="text-base font-semibold leading-7 text-gray-600 dark:text-gray-300">
                                                {frequency.suffix}
                                            </span>
                                        </div>
                                        <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-300">
                                            {plan.description}
                                        </p>
                                        <ul
                                            role="list"
                                            className="mt-10 space-y-4 text-sm leading-6 text-gray-600 dark:text-gray-300"
                                        >
                                            {plan.features.map(
                                                (feature: Feature) => (
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
                                                )
                                            )}
                                        </ul>
                                    </div>
                                    <Link
                                        href={plan.href}
                                        aria-describedby={plan.id}
                                        className="mt-8 block rounded-md bg-orange-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus-visible:outline-orange-500"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            ))}
                            <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-950/10 dark:ring-white/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                                <div className="lg:min-w-0 lg:flex-1">
                                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-orange-600 dark:text-orange-400">
                                        Enterprise
                                    </h3>
                                    <p className="mt-1 text-base leading-7 text-gray-600 dark:text-gray-300">
                                        We&rsquo;ll work with you to meet your
                                        needs. Shoot us a message and
                                        we&rsquo;ll get back to you within 24
                                        &ndash; 48 hours.
                                    </p>
                                </div>
                                <a
                                    href="#"
                                    className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-orange-600 ring-1 ring-inset ring-orange-200 hover:ring-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-white/10 dark:text-white dark:ring-0 dark:hover:bg-white/20 dark:focus-visible:outline-white"
                                >
                                    Contact Us{' '}
                                    <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
