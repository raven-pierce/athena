import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <AppLayout
            heading="Dashboard"
            subHeading="Good Morning!"
            headerIcon={
                <img
                    src="https://tailwindui.com/img/logos/48x48/tuple.svg"
                    alt=""
                    className="h-16 w-16 flex-none rounded-full ring-1 ring-gray-950/10 dark:ring-white/10"
                />
            }
        >
            <Head title="Dashboard" />
        </AppLayout>
    );
}
