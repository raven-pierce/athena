import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticationLayout from '@/Layouts/AuthenticationLayout';
import { type FormEventHandler } from 'react';
import Alert from '@/Components/Forms/Alert';
import TextInput from '@/Components/Forms/TextInput';
import PrimaryButton from '@/Components/Forms/PrimaryButton';
import InputLabel from '@/Components/Forms/InputLabel';

export default function ForgotPassword({ status }: { status?: string }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <AuthenticationLayout
            header="Forgot Your Password?"
            footer={
                <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
                    Got your memory back?{' '}
                    <Link
                        href={route('login')}
                        className="font-semibold leading-6 text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300"
                    >
                        Let&rsquo;s sign you in!
                    </Link>
                </p>
            }
        >
            <Head title="Forgot Password" />

            {status && <Alert message={status} type="success" />}
            {errors.email && <Alert message={errors.email} type="error" />}

            <div className="text-sm text-gray-600 dark:text-gray-400">
                No worries. Just let us know your email address and we will
                email you a password reset link!
            </div>

            <form className="mt-4 space-y-6" onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        required
                        isFocused={true}
                        className="mt-2"
                        onChange={(e) => {
                            setData('email', e.target.value);
                        }}
                    />
                </div>
                <PrimaryButton className="w-full" disabled={processing}>
                    Send Password Reset Link
                </PrimaryButton>
            </form>
        </AuthenticationLayout>
    );
}
