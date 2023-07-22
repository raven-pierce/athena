import type ziggyRoute from 'ziggy-js';
import { type Config as ZiggyConfig } from 'ziggy-js';
import { type AxiosInstance } from 'axios';

declare global {
    interface Window {
        axios: AxiosInstance;
    }

    const route: typeof ziggyRoute;
    const Ziggy: ZiggyConfig;
}
