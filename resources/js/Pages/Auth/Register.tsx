import { Head, Link, useForm } from '@inertiajs/react';
import { type FormEventHandler, useEffect } from 'react';
import AuthenticationLayout from '@/Layouts/AuthenticationLayout';
import InputLabel from '@/Components/Forms/InputLabel';
import TextInput from '@/Components/Forms/TextInput';
import PrimaryButton from '@/Components/Forms/PrimaryButton';
import Alert from '@/Components/Forms/Alert';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
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

        post(route('register'));
    };

    return (
        <AuthenticationLayout
            header="Get Started"
            footer={
                <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
                    Got an account?{' '}
                    <Link
                        href={route('login')}
                        className="font-semibold leading-6 text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300"
                    >
                        Let&rsquo;s sign you in!
                    </Link>
                </p>
            }
        >
            <Head title="Register" />

            {errors.name && <Alert type="error" message={errors.name} />}
            {errors.email && <Alert type="error" message={errors.email} />}
            {errors.password && (
                <Alert type="error" message={errors.password} />
            )}

            <form className="space-y-6" onSubmit={submit}>
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
                        autoComplete="username"
                        required
                        className="mt-2"
                        onChange={(e) => {
                            setData('email', e.target.value);
                        }}
                    />
                </div>
                <div>
                    <InputLabel htmlFor="password" value="Password" />
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
                            setData('password_confirmation', e.target.value);
                        }}
                    />
                </div>
                <PrimaryButton
                    className="w-full"
                    type="submit"
                    disabled={processing}
                >
                    Sign Up
                </PrimaryButton>
            </form>
        </AuthenticationLayout>
    );
}
