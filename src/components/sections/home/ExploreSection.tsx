
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

// Import image from src/assets
import localArtImg from '@/assets/local-art-shantiniketan.png'; 

export default function ExploreSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary/50 -mx-4 px-4 md:mx-0 md:rounded-lg">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-primary">
              Explore Bolpur Shantiniketan
            </h2>
            <p className="text-muted-foreground mb-4 text-base leading-relaxed">
              Kingsukh Guest House is ideally located to explore the rich cultural heritage and natural beauty of Bolpur and Shantiniketan. Visit the Visva-Bharati University campus, immerse yourself in Rabindranath Tagore's world at the Tagore Ashram, and explore the vibrant local markets and craft villages.
            </p>
            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
              The region is known for its Baul singers, tribal art, and serene landscapes. Don't miss the Sonajhuri Haat ( খোয়াইয়ের হাট ) on Saturdays for unique handicrafts and cultural performances. Our staff can help you plan your local sightseeing.
            </p>
            <Button asChild size="lg" variant="outline">
              <Link href="/contact">Plan Your Visit</Link>
            </Button>
          </div>
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={localArtImg}
              alt="Local art of Shantiniketan"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              data-ai-hint="indian folk art"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

