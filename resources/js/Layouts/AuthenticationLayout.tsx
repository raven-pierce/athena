import { type PropsWithChildren, ReactNode } from 'react';

export default function AuthenticationLayout({
    header,
    children,
    footer,
}: PropsWithChildren<{ header?: string; footer?: ReactNode }>) {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-950 dark:text-white">
                    {header ?? 'Welcome!'}
                </h2>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="px-6 py-12 shadow sm:rounded-lg sm:bg-white sm:px-12 dark:sm:bg-gray-900/40">
                    {children}
                </div>
                {footer}
            </div>
        </div>
    );
}
