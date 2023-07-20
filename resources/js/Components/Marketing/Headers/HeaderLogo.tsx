import { Link } from '@inertiajs/react';

export default function HeaderLogo() {
    return (
        <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">
                {import.meta.env.VITE_APP_NAME || 'Laravel'}
            </span>
            <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
                alt=""
            />
        </Link>
    );
}
