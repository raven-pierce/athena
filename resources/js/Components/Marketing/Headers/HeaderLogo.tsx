import { Link } from '@inertiajs/react';

export default function HeaderLogo() {
    return (
        <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">
                {import.meta.env.VITE_APP_NAME || 'Laravel'}
            </span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-auto fill-current text-orange-500"
                viewBox="0 0 720 2048"
            >
                <path d="m190.3,692.47c14.05,58.59,33.2,107.58,51.19,145.81,0,0,9.73-190.37,63.2-435.12C353.42,180.13,460.23,0,460.23,0c-21.21,108.13-47.25,293.28-21.19,497.83,23.75,186.46,87.7,364.79,107.09,418.11h0s0,0,0,0c10.4,23.4,72.83,164.38,110.3,273.44,23.08,67.19,47.84,139.24,58.94,224.4,29.54,226.61-91.78,445.35-91.78,445.35-2.54-17.92-8.06-44.71-21.6-74.27-39.56-86.37-111.65-117.82-182.5-169.37-19.56-14.23-117.4-90.09-193.28-211.05-72.08-114.91-92.55-227.11-104.91-297.9-13.73-78.66-14.03-138.7-14.1-186.14-.28-177.7,62.8-375.2,62.8-375.2,1.58,40.95,6.86,91.2,20.3,147.26Z" />
                <path d="m589.63,2048c1.57-12.13,2.66-29.64-.44-50.11-8.66-57.16-44.62-101.8-107.02-154.62-70.78-59.91-96.82-63.68-160.58-109.97-114.54-83.15-179.47-179.13-207.9-221.96-30.3-45.63-68.97-113.08-99.92-201.99-14.79,66.95-15.08,123.06-12.6,161.35,2.82,43.63,12.58,168.9,100.86,286.67,33.87,45.18,68.56,74.9,87.96,90.17,60.58,47.69,161.57,103.33,258.88,124.3,16.84,3.63,58.53,11.6,101.44,41.67,17.96,12.59,31,25.45,39.32,34.5Z" />
            </svg>
        </Link>
    );
}