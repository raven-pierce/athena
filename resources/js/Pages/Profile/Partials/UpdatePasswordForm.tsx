import { type FormEventHandler, useState } from 'react';
import { Transition } from '@headlessui/react';
import { useForm } from '@inertiajs/react';
import InputLabel from '@/Components/Forms/InputLabel';
import TextInput from '@/Components/Forms/TextInput';
import PrimaryButton from '@/Components/Forms/PrimaryButton';
import Alert from '@/Components/Forms/Alert';

export default function UpdatePasswordForm() {
    const [editInProgress, setEditInProgress] = useState(false);

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        put(route('user-password.update'), {
            preserveScroll: true,
            errorBag: 'updatePassword',
            onSuccess() {
                setEditInProgress(false);
                reset();
            },
            onError(errors) {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                }

                if (errors.current_password) {
                    reset('current_password');
                }
            },
        });
    };

    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-base font-semibold leading-7 text-gray-950 dark:text-white">
                        Password
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
                        Ensure your account is using a long, random password to
                        stay secure.
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
            {errors.current_password && (
                <Alert message={errors.current_password} type="error" />
            )}
            {errors.password && (
                <Alert message={errors.password} type="error" />
            )}
            <Transition
                show={recentlySuccessful}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 -translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-1"
            >
                <Alert message="Your password has been updated." />
            </Transition>
            <dl className="mt-6 space-y-6 divide-y divide-gray-100 border-t border-gray-200 text-sm leading-6 dark:divide-white/5 dark:border-white/10">
                {editInProgress ? (
                    <form onSubmit={submit} className="mt-6 space-y-6">
                        <div>
                            <InputLabel
                                htmlFor="current_password"
                                value="Current Password"
                            />
                            <TextInput
                                id="current_password"
                                name="current_password"
                                type="password"
                                value={data.current_password}
                                autoComplete="current-password"
                                required
                                className="mt-2"
                                onChange={(e) => {
                                    setData('current_password', e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="password"
                                value="New Password"
                            />
                            <TextInput
                                id="password"
                                name="password"
                                type="password"
                                value={data.password}
                                autoComplete="new-password"
                                required
                                className="mt-2"
                                onChange={(e) => {
                                    setData('password', e.target.value);
                                }}
                            />
                        </div>
                        <div>
                            <InputLabel
                                htmlFor="password_confirmation"
                                value="Confirm Password"
                            />
                            <TextInput
                                id="password_confirmation"
                                name="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                autoComplete="new-password"
                                required
                                className="mt-2"
                                onChange={(e) => {
                                    setData(
                                        'password_confirmation',
                                        e.target.value
                                    );
                                }}
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <PrimaryButton
                                disabled={
                                    processing ||
                                    (data.password === '' &&
                                        data.password_confirmation === '')
                                }
                            >
                                Save
                            </PrimaryButton>
                        </div>
                    </form>
                ) : (
                    <div className="mt-6 sm:flex">
                        <dt className="font-medium text-gray-950 dark:text-white sm:w-64 sm:flex-none sm:pr-6">
                            Your Password
                        </dt>
                        <dd className="mt-1 flex justify-between gap-x-6 sm:mt-0 sm:flex-auto">
                            <div className="text-gray-950 dark:text-white">
                                Test
                            </div>
                        </dd>
                    </div>
                )}
            </dl>
        </div>
    );
}
