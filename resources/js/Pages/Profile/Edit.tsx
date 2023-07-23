import { Head } from '@inertiajs/react';
import { type PageProps } from '@/types';
import AppLayout from '@/Layouts/AppLayout';
import { FingerPrintIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import UpdateProfileInformation from '@/Pages/Profile/Partials/UpdateProfileInformationForm';
import { Tab as TabType } from '@/types/marketing/navigation';
import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm';

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function Edit({
    auth,
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    const tabs: TabType[] = [
        {
            name: 'General',
            icon: UserCircleIcon,
            content: (
                <UpdateProfileInformation
                    mustVerifyEmail={mustVerifyEmail}
                    status={status}
                />
            ),
        },
        {
            name: 'Security',
            icon: FingerPrintIcon,
            content: <UpdatePasswordForm />,
        },
    ];

    return (
        <AppLayout
            heading="Your Profile"
            subHeading={auth.user.name}
            headerIcon={
                <img
                    src="https://tailwindui.com/img/logos/48x48/tuple.svg"
                    alt=""
                    className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-950/10 dark:ring-white/10"
                />
            }
        >
            <Head title="Profile" />

            <Tab.Group as={Fragment} vertical>
                <Tab.List
                    as="aside"
                    className="-mt-16 flex overflow-x-auto border-b border-gray-950/5 py-4 dark:border-white/5 lg:-mt-20 lg:block lg:w-64 lg:flex-none lg:border-0 lg:py-20"
                >
                    <nav className="mx-auto flex gap-x-3 gap-y-1 whitespace-nowrap px-4 sm:px-6 lg:flex-col lg:px-0">
                        {tabs.map((tab) => (
                            <Tab
                                key={tab.name}
                                className={({ selected }) =>
                                    classNames(
                                        selected
                                            ? 'bg-gray-50 text-orange-600 dark:bg-white/5 dark:text-orange-500'
                                            : 'text-gray-500 hover:bg-gray-50 hover:text-orange-600 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-orange-500',
                                        'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm font-semibold leading-6'
                                    )
                                }
                            >
                                {({ selected }) => (
                                    <>
                                        <tab.icon
                                            className={classNames(
                                                selected
                                                    ? 'text-orange-600 dark:text-orange-500'
                                                    : 'text-gray-400 group-hover:text-orange-600 dark:text-gray-300 dark:group-hover:text-orange-500',
                                                'h-6 w-6 shrink-0'
                                            )}
                                            aria-hidden="true"
                                        />
                                        {tab.name}
                                    </>
                                )}
                            </Tab>
                        ))}
                    </nav>
                </Tab.List>
                <Tab.Panels
                    as="main"
                    className="-mt-4 px-4 py-16 sm:px-6 lg:-mt-20 lg:flex-auto lg:px-0 lg:py-20"
                >
                    {tabs.map((tab: TabType) => (
                        <Tab.Panel
                            key={tab.name}
                            className="mx-auto max-w-2xl space-y-16 sm:space-y-20 lg:mx-0 lg:max-w-none"
                        >
                            {tab.content}
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </AppLayout>
    );
}
