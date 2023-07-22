import {
    type ComparisonFeature,
    type ComparisonSection,
    type Frequency,
} from '@/types/marketing/pricing';
import { CheckIcon, MinusIcon } from '@heroicons/react/20/solid';
import { features, frequencies, plans } from '@/content/pricing';
import { type Plan } from '@/types/marketing/product';
import { RadioGroup } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { Link } from '@inertiajs/react';

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function PricingWithComparisonTable() {
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
                {/* xs to lg */}
                <div className="mx-auto mt-12 max-w-md space-y-8 sm:mt-16 lg:hidden">
                    {plans.map((plan: Plan) => (
                        <section
                            key={plan.id}
                            className={classNames(
                                plan.featured
                                    ? 'rounded-xl bg-gray-400/5 ring-1 ring-inset ring-gray-200 dark:bg-white/5 dark:ring-white/10'
                                    : '',
                                'p-8'
                            )}
                        >
                            <h3
                                id={plan.id}
                                className="text-sm font-semibold leading-6 text-gray-950 dark:text-white"
                            >
                                {plan.name}
                            </h3>
                            <p className="mt-2 flex items-baseline gap-x-1">
                                <span className="text-4xl font-bold text-gray-950 dark:text-white">
                                    ${plan.price[frequency.value]}
                                </span>
                                <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                                    {frequency.suffix}
                                </span>
                            </p>
                            <Link
                                href={plan.href}
                                aria-describedby={plan.id}
                                className={classNames(
                                    plan.featured
                                        ? 'bg-orange-600 text-white hover:bg-orange-500 focus-visible:outline-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400'
                                        : 'text-orange-600 ring-1 ring-inset ring-orange-200 hover:ring-orange-300 dark:bg-white/10 dark:text-white dark:ring-0 dark:hover:bg-white/20',
                                    'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:focus-visible:outline-white'
                                )}
                            >
                                Buy plan
                            </Link>
                            <ul
                                role="list"
                                className="mt-10 space-y-4 text-sm leading-6 text-gray-950 dark:text-white"
                            >
                                {features.map((section: ComparisonSection) => (
                                    <li key={section.name}>
                                        <ul role="list" className="space-y-4">
                                            {section.features.map(
                                                (feature: ComparisonFeature) =>
                                                    feature.plans[plan.name] ? (
                                                        <li
                                                            key={feature.name}
                                                            className="flex gap-x-3"
                                                        >
                                                            <CheckIcon
                                                                className="h-6 w-5 flex-none text-orange-600 dark:text-orange-400"
                                                                aria-hidden="true"
                                                            />
                                                            <span>
                                                                {feature.name}{' '}
                                                                {typeof feature
                                                                    .plans[
                                                                        plan.name
                                                                    ] ===
                                                                'string' ? (
                                                                        <span className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                                                                        (
                                                                            {
                                                                                feature
                                                                                    .plans[
                                                                                        plan
                                                                                            .name
                                                                                    ]
                                                                            }
                                                                        )
                                                                        </span>
                                                                    ) : null}
                                                            </span>
                                                        </li>
                                                    ) : null
                                            )}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </div>
                {/* lg+ */}
                <div className="isolate mt-16 hidden lg:block">
                    <div className="relative -mx-8">
                        {plans.some((plan: Plan) => plan.featured) ? (
                            <div className="absolute inset-x-4 inset-y-0 -z-10 flex">
                                <div
                                    className="flex w-1/4 px-4"
                                    aria-hidden="true"
                                    style={{
                                        marginLeft: `${
                                            (plans.findIndex(
                                                (plan: Plan) => plan.featured
                                            ) +
                                                1) *
                                            25
                                        }%`,
                                    }}
                                >
                                    <div className="w-full rounded-t-xl border-x border-t border-gray-950/10 bg-gray-400/5 dark:border-white/10 dark:bg-white/5" />
                                </div>
                            </div>
                        ) : null}
                        <table className="w-full table-fixed border-separate border-spacing-x-8 text-left">
                            <caption className="sr-only">
                                Pricing plan comparison
                            </caption>
                            <colgroup>
                                <col className="w-1/4" />
                                <col className="w-1/4" />
                                <col className="w-1/4" />
                                <col className="w-1/4" />
                            </colgroup>
                            <thead>
                                <tr>
                                    <td />
                                    {plans.map((plan: Plan) => (
                                        <th
                                            key={plan.id}
                                            scope="col"
                                            className="px-6 pt-6 xl:px-8 xl:pt-8"
                                        >
                                            <div className="text-sm font-semibold leading-7 text-gray-950 dark:text-white">
                                                {plan.name}
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <span className="sr-only">Price</span>
                                    </th>
                                    {plans.map((plan: Plan) => (
                                        <td
                                            key={plan.id}
                                            className="px-6 pt-2 xl:px-8"
                                        >
                                            <div className="flex items-baseline gap-x-1 text-gray-950 dark:text-white">
                                                <span className="text-4xl font-bold">
                                                    $
                                                    {
                                                        plan.price[
                                                            frequency.value
                                                        ]
                                                    }
                                                </span>
                                                <span className="text-sm font-semibold leading-6">
                                                    {frequency.suffix}
                                                </span>
                                            </div>
                                            <Link
                                                href={plan.href}
                                                className={classNames(
                                                    plan.featured
                                                        ? 'bg-orange-600 text-white hover:bg-orange-500 dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus-visible:outline-orange-600'
                                                        : 'text-orange-600 ring-1 ring-inset ring-orange-200 hover:ring-orange-300 dark:bg-white/10 dark:text-white dark:ring-0 dark:hover:bg-white/20 dark:focus-visible:outline-white',
                                                    'mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                                                )}
                                            >
                                                Buy plan
                                            </Link>
                                        </td>
                                    ))}
                                </tr>
                                {features.map(
                                    (
                                        section: ComparisonSection,
                                        sectionIdx: number
                                    ) => (
                                        <Fragment key={section.name}>
                                            <tr>
                                                <th
                                                    scope="colgroup"
                                                    colSpan={4}
                                                    className={classNames(
                                                        sectionIdx === 0
                                                            ? 'pt-8'
                                                            : 'pt-16',
                                                        'pb-4 text-sm font-semibold leading-6 text-gray-950 dark:text-white'
                                                    )}
                                                >
                                                    {section.name}
                                                    <div className="absolute inset-x-8 mt-4 h-px bg-gray-950/10 dark:bg-white/10" />
                                                </th>
                                            </tr>
                                            {section.features.map(
                                                (
                                                    feature: ComparisonFeature
                                                ) => (
                                                    <tr key={feature.name}>
                                                        <th
                                                            scope="row"
                                                            className="py-4 text-sm font-normal leading-6 text-gray-950 dark:text-white"
                                                        >
                                                            {feature.name}
                                                            <div className="absolute inset-x-8 mt-4 h-px bg-gray-950/5 dark:bg-white/5" />
                                                        </th>
                                                        {plans.map(
                                                            (plan: Plan) => (
                                                                <td
                                                                    key={
                                                                        plan.id
                                                                    }
                                                                    className="px-6 py-4 xl:px-8"
                                                                >
                                                                    {typeof feature
                                                                        .plans[
                                                                            plan
                                                                                .name
                                                                        ] ===
                                                                    'string' ? (
                                                                            <div className="text-center text-sm leading-6 text-gray-500 dark:text-gray-300">
                                                                                {
                                                                                    feature
                                                                                        .plans[
                                                                                            plan
                                                                                                .name
                                                                                        ]
                                                                                }
                                                                            </div>
                                                                        ) : (
                                                                            <>
                                                                                {feature
                                                                                    .plans[
                                                                                        plan
                                                                                            .name
                                                                                    ] ===
                                                                            true ? (
                                                                                        <CheckIcon
                                                                                            className="mx-auto h-5 w-5 text-orange-600 dark:text-orange-400"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    ) : (
                                                                                        <MinusIcon
                                                                                            className="mx-auto h-5 w-5 text-gray-400 dark:text-gray-500"
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    )}

                                                                                <span className="sr-only">
                                                                                    {feature
                                                                                        .plans[
                                                                                            plan
                                                                                                .name
                                                                                        ] ===
                                                                                true
                                                                                        ? 'Included'
                                                                                        : 'Not included'}{' '}
                                                                                in{' '}
                                                                                    {
                                                                                        plan.name
                                                                                    }
                                                                                </span>
                                                                            </>
                                                                        )}
                                                                </td>
                                                            )
                                                        )}
                                                    </tr>
                                                )
                                            )}
                                        </Fragment>
                                    )
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
