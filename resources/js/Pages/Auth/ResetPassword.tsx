import { type FormEventHandler, useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import AuthenticationLayout from '@/Layouts/AuthenticationLayout';
import InputLabel from '@/Components/Forms/InputLabel';
import TextInput from '@/Components/Forms/TextInput';
import PrimaryButton from '@/Components/Forms/PrimaryButton';
import Alert from '@/Components/Forms/Alert';

export default function ResetPassword({
    token,
    email,
}: {
    token: string;
    email: string;
}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token,
        email,
        password: '',
        password_confirmation: '',
    });

    useEffect(
        () => () => {
            reset('password', 'password_confirmation');
        },
        []
    );

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.update'));
    };

    return (
        <AuthenticationLayout
            header="Reset Your Password"
            footer={
                <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
                    Changed your mind?{' '}
                    <Link
                        href={route('login')}
                        className="font-semibold leading-6 text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300"
                    >
                        Let&rsquo;s sign you in!
                    </Link>
                </p>
            }
        >
            <Head title="Reset Password" />

            {errors.password && (
                <Alert message={errors.password} type="error" />
            )}

            <form className="space-y-6" onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        name="password"
                        type="password"
                        value={data.password}
                        autoComplete="new-password"
                        required
                        isFocused={true}
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
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        autoComplete="new-password"
                        required
                        className="mt-2"
                        onChange={(e) => {
                            setData('password_confirmation', e.target.value);
                        }}
                    />
                </div>
                <PrimaryButton className="w-full" disabled={processing}>
                    Reset Password
                </PrimaryButton>
            </form>
        </AuthenticationLayout>
    );
}
