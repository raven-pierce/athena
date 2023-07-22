import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticationLayout from '@/Layouts/AuthenticationLayout';
import { type FormEventHandler } from 'react';
import Alert from '@/Components/Forms/Alert';
import PrimaryButton from '@/Components/Forms/PrimaryButton';

export default function VerifyEmail({ status }: { status?: string }) {
    const { post, processing } = useForm({});

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <AuthenticationLayout
            header="Verify Your Email Address"
            footer={
                <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
                    Wrong account?{' '}
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                        className="font-semibold leading-6 text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300"
                    >
                        Let&rsquo;s fix that!
                    </Link>
                </p>
            }
        >
            <Head title="Email Verification" />

            {status === 'verification-link-sent' && (
                <Alert
                    message="A new verification link has been emailed to you!"
                    type="success"
                />
            )}

            <div className="text-sm text-gray-600 dark:text-gray-400">
                Thanks for signing up! You&rsquo;re almost done. Please check
                your email for a verification link.
            </div>
            <form
                className="mt-4 flex items-center justify-between"
                onSubmit={submit}
            >
                <PrimaryButton className="w-fit" disabled={processing}>
                    Resend Verification Email
                </PrimaryButton>
                <Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    className="rounded-md text-sm text-orange-600 hover:text-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:text-orange-500 dark:hover:text-orange-400 dark:focus-visible:outline-orange-500"
                >
                    Log Out
                </Link>
            </form>
        </AuthenticationLayout>
    );
}
