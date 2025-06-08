import HeroSection from '@/components/sections/home/HeroSection';
import WelcomeSection from '@/components/sections/home/WelcomeSection';
import OurRoomsSection from '@/components/sections/home/OurRoomsSection';
import GalleryPreviewSection from '@/components/sections/home/GalleryPreviewSection';
import AmenitiesSection from '@/components/sections/home/AmenitiesSection';
import TestimonialsSection from '@/components/sections/home/TestimonialsSection';
import ExploreSection from '@/components/sections/home/ExploreSection';
import MapSection from '@/components/sections/home/MapSection';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-20">
      <HeroSection />
      <div className="container mx-auto px-4"> {/* Container for sections below hero */}
        <WelcomeSection />
        <Separator className="my-12 md:my-16" />
        <OurRoomsSection />
        <Separator className="my-12 md:my-16" />
        <GalleryPreviewSection />
        <Separator className="my-12 md:my-16" />
        <AmenitiesSection />
        <Separator className="my-12 md:my-16" />
        <TestimonialsSection />
        <Separator className="my-12 md:my-16" />
        <ExploreSection />
        <Separator className="my-12 md:my-16" />
        <MapSection />
      </div>
    </div>
  );
}
