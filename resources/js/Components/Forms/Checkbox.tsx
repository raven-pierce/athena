import { type InputHTMLAttributes } from 'react';

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function Checkbox({
    className = '',
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={classNames(
                'h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600 dark:border-white/10 dark:bg-white/5 dark:text-orange-400 dark:focus:ring-orange-500',
                className
            )}
        />
    );
}
