import {
    CheckCircleIcon,
    ExclamationCircleIcon,
    ExclamationTriangleIcon,
    InformationCircleIcon,
} from '@heroicons/react/20/solid';

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(' ');
}

function determineIcon(type: string, iconClassName: string) {
    switch (type) {
    case 'success':
        return (
            <CheckCircleIcon
                className={classNames(
                    'h-5 w-5 text-emerald-600 dark:text-emerald-400',
                    iconClassName
                )}
                aria-hidden="true"
            />
        );
    case 'warning':
        return (
            <ExclamationTriangleIcon
                className={classNames(
                    'h-5 w-5 text-amber-600 dark:text-amber-400',
                    iconClassName
                )}
                aria-hidden="true"
            />
        );
    case 'error':
        return (
            <ExclamationCircleIcon
                className={classNames(
                    'h-5 w-5 text-rose-600 dark:text-rose-400',
                    iconClassName
                )}
                aria-hidden="true"
            />
        );
    default:
        return (
            <InformationCircleIcon
                className={classNames(
                    'h-5 w-5 text-indigo-600 dark:text-indigo-400',
                    iconClassName
                )}
                aria-hidden="true"
            />
        );
    }
}

export default function Alert({
    message,
    type = 'success',
    containerClassName = '',
    iconClassName = '',
    messageClassName = '',
}: {
    type?: string;
    message: string;
    containerClassName?: string;
    iconClassName?: string;
    messageClassName?: string;
}) {
    return message ? (
        <>
            <div
                className={classNames(
                    'mb-8 flex rounded-md p-4',
                    type === 'info' ? 'bg-indigo-500/10' : '',
                    type === 'success' ? 'bg-emerald-500/10' : '',
                    type === 'warning' ? 'bg-amber-500/10' : '',
                    type === 'error' ? 'bg-rose-500/10' : '',
                    containerClassName
                )}
            >
                <div className="flex-shrink-0">
                    {determineIcon(type, iconClassName)}
                </div>
                <p
                    className={classNames(
                        'ml-3 text-sm text-gray-600 dark:text-gray-300',
                        messageClassName
                    )}
                >
                    {message}
                </p>
            </div>
        </>
    ) : null;
}
