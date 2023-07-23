import FeaturesWithScreenshotPanel from '@/Components/Marketing/Features/FeaturesWithScreenshotPanel';
import PricingWithFrequencyToggles from '@/Components/Marketing/Pricing/PricingWithFrequencyToggles';
import HeroSplitWithScreenshot from '@/Components/Marketing/Heroes/HeroSplitWithScreenshot';
import Footer from '@/Components/Marketing/Footers/Footer';
import { type PageProps } from '@/types';
import NewsletterWithDetails from '@/Components/Marketing/Newsletters/NewsletterWithDetails';
import HeaderWithFlyout from '@/Components/Marketing/Headers/HeaderWithFlyout';

export default function Index({
    auth,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <>
            <HeaderWithFlyout auth={auth} />

            <HeroSplitWithScreenshot />

            <FeaturesWithScreenshotPanel />

            <PricingWithFrequencyToggles />

            <NewsletterWithDetails />

            <Footer />
        </>
    );
}
