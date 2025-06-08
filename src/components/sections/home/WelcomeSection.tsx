
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Import image from src/assets
import welcomeInteriorImg from '@/assets/kingsukh-welcome-interior.png'; 

export default function WelcomeSection() {
  return (
    <section className="py-12 md:py-16">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={welcomeInteriorImg}
            alt="Warm welcome at Kingsukh Guest House"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            data-ai-hint="cozy interior livingroom"
            placeholder="blur"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-heading font-semibold mb-4 text-primary">
            Welcome to Kingsukh Guest House
          </h2>
          <p className="text-muted-foreground mb-4 text-base leading-relaxed">
            Nestled in the heart of Bolpur, Shantiniketan, Kingsukh Guest House offers a serene and comfortable retreat for travelers seeking peace and cultural immersion. Our guesthouse combines traditional hospitality with modern amenities to ensure a memorable stay.
          </p>
          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            Whether you're here to explore the legacy of Rabindranath Tagore, enjoy the vibrant local art scene, or simply unwind amidst nature, Kingsukh is your perfect base. We pride ourselves on creating a warm, inviting atmosphere that feels like a home away from home.
          </p>
          <Button asChild size="lg">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

