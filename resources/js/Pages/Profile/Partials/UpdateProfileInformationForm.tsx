import { Link, useForm, usePage } from '@inertiajs/react';
import { type FormEventHandler, useState } from 'react';
import { type PageProps } from '@/types';
import InputLabel from '@/Components/Forms/InputLabel';
import TextInput from '@/Components/Forms/TextInput';
import PrimaryButton from '@/Components/Forms/PrimaryButton';
import Alert from '@/Components/Forms/Alert';
import { Transition } from '@headlessui/react';

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
}: {
    mustVerifyEmail: boolean;
    status?: string;
}) {
    const [editInProgress, setEditInProgress] = useState(false);

    const { user } = usePage<PageProps>().props.auth;

    const {
        data,
        setData,
        patch,
        reset,
        errors,
        processing,
        recentlySuccessful,
    } = useForm({
        name: user.name,
        email: user.email,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('profile.update'), {
            preserveScroll: true,
            errorBag: 'updateProfileInformation',
            onSuccess() {
                setEditInProgress(false);
            },
            onError(errors) {
                if (errors.password) {
                    reset('name');
                }

                if (errors.email) {
                    reset('email');
                }
            },
        });
    };

    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-950 dark:text-white">
                        Profile
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                        This information will be displayed publicly so be
                        careful what you share.
                    </p>
                </div>
                <button
                    type="button"
                    className="rounded-md text-sm font-semibold text-orange-600 hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:text-orange-500 dark:hover:text-orange-400 dark:focus-visible:outline-orange-500"
                    onClick={() => setEditInProgress(!editInProgress)}
                >
                    {editInProgress ? 'Cancel' : 'Edit'}
                </button>
            </div>
            {errors.name && <Alert message={errors.name} type="error" />}
            {errors.email && <Alert message={errors.email} type="error" />}
            <Transition
                show={status === 'verification-link-sent'}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
            >
                <Alert message="A new verification link has been emailed to you!" />
            </Transition>
            <Transition
                show={recentlySuccessful}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
            >
                <Alert message="Your changes have been saved." />
            </Transition>
            <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6 dark:divide-white/5 dark:border-white/10">
                {editInProgress ? (
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div>
                            <InputLabel htmlFor="name" value="Name" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                autoComplete="name"
                                required
                                isFocused={true}
                                className="mt-2"
                                onChange={(e) => {
                                    setData('name', e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                name="email"
                                type="email"
                                value={data.email}
                                autoComplete="email"
                                required
                                className="mt-2"
                                onChange={(e) => {
                                    setData('email', e.target.value);
                                }}
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <PrimaryButton
                                disabled={
                                    processing ||
                                    (data.email === user.email &&
                                        user.name === data.name)
                                }
                            >
                                Save
                            </PrimaryButton>
                        </div>
                    </form>
                ) : (
                    <>
                        <div className="mt-6 sm:flex">
                            <dt className="font-medium text-gray-950 dark:text-white sm:w-64 sm:flex-none sm:pr-6">
                                Your Name
                            </dt>
                            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                <div className="text-gray-950 dark:text-white">
                                    {user.name}
                                </div>
                            </dd>
                        </div>
                        <div className="pt-6 sm:flex">
                            <dt className="font-medium text-gray-950 dark:text-white sm:w-64 sm:flex-none sm:pr-6">
                                Email Address
                            </dt>
                            <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                                <div className="text-gray-950 dark:text-white">
                                    {user.email}
                                </div>
                            </dd>
                            {mustVerifyEmail &&
                                user.email_verified_at === null && (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                        Your email address is unverified.{' '}
                                    <Link
                                        href={route('verification.send')}
                                        method="post"
                                        as="button"
                                        className="rounded-md text-sm font-semibold text-orange-600 hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:text-orange-500 dark:hover:text-orange-400 dark:focus-visible:outline-orange-500"
                                    >
                                            Verify
                                    </Link>
                                </p>
                            )}
                        </div>
                    </>
                )}
            </dl>
        </div>
    );
}
