import { Fragment, PropsWithChildren, ReactNode, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/20/solid';
import {
    BellIcon,
    XMarkIcon as XMarkIconOutline,
} from '@heroicons/react/24/outline';
import { NavigationLink } from '@/types/marketing/navigation';
import { Link } from '@inertiajs/react';

const navigation: NavigationLink[] = [
    { name: 'Dashboard', href: route('dashboard') },
    { name: 'Invoices', href: '#' },
    { name: 'Clients', href: '#' },
    { name: 'Expenses', href: '#' },
];

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function AppLayout({
    heading,
    subHeading,
    headerIcon,
    children,
}: PropsWithChildren<{
    heading?: ReactNode | string;
    subHeading?: ReactNode | string;
    headerIcon?: ReactNode;
}>) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <header className="absolute inset-x-0 top-0 z-50 flex h-16 border-b border-gray-900/10 dark:border-white/10">
                <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-1 items-center gap-x-6">
                        <button
                            type="button"
                            className="-m-3 p-3 text-gray-700 dark:text-gray-400 md:hidden"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
                            alt="Your Company"
                        />
                    </div>
                    <nav className="hidden gap-x-12 md:flex">
                        {navigation.map(
                            (item: NavigationLink, itemIdx: number) => (
                                <Link
                                    key={itemIdx}
                                    href={item.href}
                                    className={classNames(
                                        item.href === window.location.href
                                            ? 'font-semibold text-gray-950 dark:text-white'
                                            : 'font-medium text-gray-700 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white',
                                        'text-sm leading-6'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            )
                        )}
                    </nav>
                    <div className="flex flex-1 items-center justify-end gap-x-8">
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 dark:hover:text-white dark:focus:ring-orange-500"
                        >
                            <span className="sr-only">View notifications</span>
                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 dark:focus:ring-orange-500">
                                    <span className="sr-only">
                                        Open user menu
                                    </span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-950 dark:ring-white/5">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                href={route('profile.edit')}
                                                className={classNames(
                                                    active
                                                        ? 'bg-gray-100 dark:bg-gray-900/40'
                                                        : '',
                                                    'block px-4 py-2 text-sm text-gray-700 dark:text-gray-400'
                                                )}
                                            >
                                                Settings
                                            </Link>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                                className={classNames(
                                                    active
                                                        ? 'bg-gray-100 dark:bg-gray-900/40'
                                                        : '',
                                                    'inline-flex w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-400'
                                                )}
                                            >
                                                Sign out
                                            </Link>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
                <Dialog
                    as="div"
                    className="lg:hidden"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 left-0 z-50 w-full overflow-y-auto bg-white px-4 pb-6 dark:bg-gray-950 sm:max-w-sm sm:px-6 sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-white/10">
                        <div className="-ml-0.5 flex h-16 items-center gap-x-6">
                            <button
                                type="button"
                                className="-m-2.5 p-2.5 text-gray-700 dark:text-gray-400"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIconOutline
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                />
                            </button>
                            <div className="-ml-0.5">
                                <Link href="#" className="-m-1.5 block p-1.5">
                                    <span className="sr-only">
                                        Your Company
                                    </span>
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="mt-2 space-y-2">
                            {navigation.map((item: NavigationLink) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={classNames(
                                        item.href === window.location.href
                                            ? 'bg-gray-50 font-semibold text-gray-950 dark:bg-gray-900 dark:text-white'
                                            : 'font-medium text-gray-950 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white',
                                        '-mx-3 block rounded-lg px-3 py-2 leading-7 hover:bg-gray-50 dark:hover:bg-gray-900'
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
            <main className="relative">
                <header className="relative isolate pt-16">
                    <div
                        className="absolute inset-0 -z-10 overflow-hidden"
                        aria-hidden="true"
                    >
                        <div className="absolute left-16 top-full -mt-16 transform-gpu opacity-50 blur-3xl xl:left-1/2 xl:-ml-80">
                            <div
                                className="aspect-[1154/678] w-[72.125rem] bg-gradient-to-br from-[#FF80B5] to-[#9089FC]"
                                style={{
                                    clipPath:
                                        'polygon(100% 38.5%, 82.6% 100%, 60.2% 37.7%, 52.4% 32.1%, 47.5% 41.8%, 45.2% 65.6%, 27.5% 23.4%, 0.1% 35.3%, 17.9% 0%, 27.7% 23.4%, 76.2% 2.5%, 74.2% 56%, 100% 38.5%)',
                                }}
                            />
                        </div>
                        <div className="absolute inset-x-0 bottom-0 h-px bg-gray-950/5 dark:bg-white/5" />
                    </div>
                    {(heading || subHeading) && (
                        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                            <div className="mx-auto flex max-w-2xl items-center justify-between gap-x-8 lg:mx-0 lg:max-w-none">
                                <div className="flex items-center gap-x-6">
                                    {headerIcon}
                                    <h1>
                                        {heading && (
                                            <div className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                                                {heading}
                                            </div>
                                        )}
                                        {subHeading && (
                                            <div className="mt-1 text-base font-semibold leading-6 text-gray-950 dark:text-white">
                                                {subHeading}
                                            </div>
                                        )}
                                    </h1>
                                </div>
                            </div>
                        </div>
                    )}
                </header>
                <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:gap-x-16 lg:px-8">
                    {children}
                </div>
            </main>
        </>
    );
}
