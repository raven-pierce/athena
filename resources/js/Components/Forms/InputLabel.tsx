import { type LabelHTMLAttributes } from 'react';

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

export default function InputLabel({
    value,
    className = '',
    children,
    ...props
}: LabelHTMLAttributes<HTMLLabelElement> & { value?: string }) {
    return (
        <label
            {...props}
            className={classNames(
                'block text-sm font-medium leading-6 text-gray-950 dark:text-white',
                className
            )}
        >
            {value ? value : children}
        </label>
    );
}
