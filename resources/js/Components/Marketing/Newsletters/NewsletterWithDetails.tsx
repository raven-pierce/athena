import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import InputLabel from '@/Components/Forms/InputLabel';
import TextInput from '@/Components/Forms/TextInput';
import PrimaryButton from '@/Components/Forms/PrimaryButton';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import Alert from '@/Components/Forms/Alert';

export default function NewsletterWithDetails() {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        recentlySuccessful,
    } = useForm({
        email: '',
    });

    // TODO: Implement newsletter controller functions
    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('newsletter.subscribe'), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                if (errors.email) {
                    reset('email');
                }
            },
        });
    };

    return (
        <div className="relative py-16 sm:py-24 lg:py-32">
            <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                    <div className="max-w-xl lg:max-w-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Stay in the loop!
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-300">
                            Subscribe to our newsletter and we&rsquo;ll keep you
                            up to date with the latest features and releases.
                        </p>
                        {errors.email && (
                            <Alert message={errors.email} type="error" />
                        )}
                        <form onSubmit={submit} className="mt-6 max-w-md">
                            <InputLabel htmlFor="email" value="Email" />
                            <div className="mt-2 flex gap-x-4">
                                <TextInput
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={data.email}
                                    autoComplete="email"
                                    required
                                    onChange={(e) => {
                                        setData('email', e.target.value);
                                    }}
                                />
                                <PrimaryButton disabled={processing}>
                                    Subscribe
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <CalendarDaysIcon
                                    className="h-6 w-6 text-white"
                                    aria-hidden="true"
                                />
                            </div>
                            <dt className="mt-4 font-semibold text-white">
                                Update Digests
                            </dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                You&rsquo;ll receive an email whenever we
                                release updates to our platform.
                            </dd>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                                <HandRaisedIcon
                                    className="h-6 w-6 text-white"
                                    aria-hidden="true"
                                />
                            </div>
                            <dt className="mt-4 font-semibold text-white">
                                No Spam
                            </dt>
                            <dd className="mt-2 leading-7 text-gray-400">
                                We&rsquo;ll never share your email address and
                                you can opt out at any time.
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 dark:opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    );
}
