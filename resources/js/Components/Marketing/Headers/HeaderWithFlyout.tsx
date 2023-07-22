import HeaderLogo from '@/Components/Marketing/Headers/HeaderLogo';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { companyLinks, products } from '@/content/navigation';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { type CompanyLink } from '@/types/marketing/navigation';
import { type Product } from '@/types/marketing/product';
import { Fragment, useState } from 'react';
import { Link } from '@inertiajs/react';

export default function HeaderWithFlyout() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <HeaderLogo />
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
                        onClick={() => {
                            setMobileMenuOpen(true);
                        }}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
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
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-950/5 dark:bg-gray-950 dark:ring-white/5">
                                {products.map((item: Product) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 dark:hover:bg-gray-900"
                                    >
                                        <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-900 dark:group-hover:bg-gray-950">
                                            <item.icon
                                                className="h-6 w-6 text-gray-600 group-hover:text-orange-600 dark:text-gray-300 dark:group-hover:text-orange-500"
                                                aria-hidden="true"
                                            />
                                        </div>
                                        <div className="flex-auto">
                                            <Link
                                                href={item.href}
                                                className="block font-semibold text-gray-950 dark:text-white"
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </Link>
                                            <p className="mt-1 text-gray-600 dark:text-gray-300">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
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
                    <Popover className="relative">
                        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-950 dark:text-white">
                            Company
                            <ChevronDownIcon
                                className="h-5 w-5 flex-none text-gray-400 dark:text-gray-500"
                                aria-hidden="true"
                            />
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                        >
                            <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-950/5 dark:bg-gray-950 dark:ring-white/5">
                                {companyLinks.map((item: CompanyLink) => (
                                    <div
                                        key={item.name}
                                        className="relative rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-900"
                                    >
                                        <Link
                                            href={item.href}
                                            className="block text-sm font-semibold leading-6 text-gray-950 dark:text-white"
                                        >
                                            {item.name}
                                            <span className="absolute inset-0" />
                                        </Link>

                                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </Popover.Panel>
                        </Transition>
                    </Popover>
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
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white dark:bg-gray-950 sm:max-w-sm sm:ring-1 sm:ring-gray-950/10 dark:sm:ring-white/10">
                    <div className="p-6">
                        <div className="flex items-center justify-between">
                            <HeaderLogo />
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                }}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-400/10">
                                <div className="space-y-2 py-6">
                                    {products.map((item: Product) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-950 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
                                        >
                                            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white dark:bg-gray-900 dark:group-hover:bg-gray-950">
                                                <item.icon
                                                    className="h-6 w-6 text-gray-600 group-hover:text-orange-600 dark:text-gray-300 dark:group-hover:text-orange-500"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="space-y-2 py-6">
                                    <Link
                                        href="#"
                                        className="dark:hover -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-950 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
                                    >
                                        Features
                                    </Link>
                                    <Link
                                        href="#"
                                        className="dark:hover -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-950 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
                                    >
                                        Marketplace
                                    </Link>
                                    {companyLinks.map((item: CompanyLink) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-950 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Link
                                        href={route('login')}
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-950 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-900"
                                    >
                                        Log In
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
