import { type FormEventHandler, useEffect } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AuthenticationLayout from '@/Layouts/AuthenticationLayout';
import InputLabel from '@/Components/Forms/InputLabel';
import TextInput from '@/Components/Forms/TextInput';
import PrimaryButton from '@/Components/Forms/PrimaryButton';
import Alert from '@/Components/Forms/Alert';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(
        () => () => {
            reset('password');
        },
        []
    );

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <AuthenticationLayout header="Confirm Your Password">
            <Head title="Confirm Password" />

            {errors.password && (
                <Alert message={errors.password} type="error" />
            )}

            <div className="text-sm text-gray-600 dark:text-gray-400">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </div>

            <form className="mt-4 space-y-6" onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="password" value="Password" />
                    <TextInput
                        id="password"
                        name="password"
                        type="password"
                        value={data.password}
                        autoComplete="current-password"
                        required
                        isFocused={true}
                        className="mt-2"
                        onChange={(e) => {
                            setData('password', e.target.value);
                        }}
                    />
                </div>

                <PrimaryButton className="w-full" disabled={processing}>
                    Confirm Password
                </PrimaryButton>
            </form>
        </AuthenticationLayout>
    );
}
