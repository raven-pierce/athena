import { type ButtonHTMLAttributes } from 'react';

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function PrimaryButton({
    type = 'submit',
    className = '',
    disabled,
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            {...props}
            type={type}
            className={classNames(
                'flex justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 dark:bg-orange-500 dark:hover:bg-orange-400 dark:focus-visible:outline-orange-500',
                disabled ? 'opacity-25' : '',
                className
            )}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
