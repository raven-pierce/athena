import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Product } from '@/types/marketing';
import { Link } from '@inertiajs/react';

let products: Product[] = [
    {
        name: 'Analytics',
        description: 'Get a better understanding of your traffic',
        href: '#',
        icon: ChartPieIcon,
    },
    {
        name: 'Engagement',
        description: 'Speak directly to your customers',
        href: '#',
        icon: CursorArrowRaysIcon,
    },
    {
        name: 'Security',
        description: 'Your customers’ data will be safe and secure',
        href: '#',
        icon: FingerPrintIcon,
    },
    {
        name: 'Integrations',
        description: 'Connect with third-party tools',
        href: '#',
        icon: SquaresPlusIcon,
    },
];

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function HeaderWithWideFlyout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">
                            {import.meta.env.VITE_APP_NAME || 'Laravel'}
                        </span>
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover>
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-950 dark:text-white">
                            Product
                            <ChevronDownIcon
                                className="h-5 w-5 flex-none text-gray-400 dark:text-gray-500"
                                aria-hidden="true"
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 -translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-1"
                        >
                            <Popover.Panel className="absolute inset-x-0 top-0 -z-10 bg-white pt-14 shadow-lg ring-1 ring-gray-950/5 dark:bg-gray-950 dark:ring-white/5">
                                <div className="mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10 lg:px-8 xl:gap-x-8">
                                    {products.map((item: Product) => (
                                        <div
                                            key={item.name}
                                            className="group relative rounded-lg p-6 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-900"
                                        >
                                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-900 dark:group-hover:bg-gray-950">
                                                <item.icon
                                                    className="h-6 w-6 text-gray-600 group-hover:text-orange-600 dark:text-gray-300 dark:group-hover:text-orange-500"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <Link
                                                href={item.href}
                                                className="mt-6 block font-semibold text-gray-950 dark:text-white"
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-gray-600 dark:text-gray-300">
                                                {item.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>
                    <Link
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-950 dark:text-white"
                    >
                        Features
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-950 dark:text-white"
                    >
                        Marketplace
                    </Link>
                    <Link
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-950 dark:text-white"
                    >
                        Company
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Link
                        href={route('login')}
                        className="text-sm font-semibold leading-6 text-gray-950 dark:text-white"
                    >
                        Log In <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </nav>
            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 dark:bg-gray-950 sm:max-w-sm sm:ring-1 sm:ring-gray-950/10 dark:sm:ring-white/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">
                                {import.meta.env.VITE_APP_NAME || 'Laravel'}
                            </span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
                                alt=""
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-400/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div" className="-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-950 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900">
                                                Product
                                                <ChevronDownIcon
                                                    className={classNames(
                                                        open
                                                            ? 'rotate-180'
                                                            : '',
                                                        'h-5 w-5 flex-none text-gray-400 dark:text-gray-400'
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="mt-2 space-y-2">
                                                {products.map(
                                                    (item: Product) => (
                                                        <Disclosure.Button
                                                            key={item.name}
                                                            as="a"
                                                            href={item.href}
                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-950 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
                                                        >
                                                            {item.name}
                                                        </Disclosure.Button>
                                                    )
                                                )}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-950 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
                                >
                                    Features
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-950 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
                                >
                                    Marketplace
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-950 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
                                >
                                    Company
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-950 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
                                >
                                    Log In
                                </Link>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
