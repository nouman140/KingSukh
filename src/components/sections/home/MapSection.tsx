import { CONTACT_DETAILS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MapSection() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-2 text-primary">
        Find Us Easily
      </h2>
      <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
        We are conveniently located in Prantik, near Sonajhuri Jungle, Bolpur, Shantiniketan.
      </p>
      <Card className="shadow-xl overflow-hidden">
        <CardContent className="p-0">
          <div className="aspect-video w-full">
            <iframe
              src={CONTACT_DETAILS.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kingsukh Guest House Location Map"
            ></iframe>
          </div>
        </CardContent>
      </Card>
      <div className="text-center mt-8">
        <Button asChild size="lg">
          <Link href={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT_DETAILS.address)}`} target="_blank" rel="noopener noreferrer">
            <MapPin className="mr-2 h-5 w-5" /> Get Directions
          </Link>
        </Button>
      </div>
    </section>
  );
}
