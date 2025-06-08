import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AMENITIES_DATA } from '@/lib/constants';
import type { Amenity } from '@/types';

export default function AmenitiesSection() {
  return (
    <section className="py-12 md:py-16 bg-secondary/50 -mx-4 px-4 md:mx-0 md:rounded-lg">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-2 text-primary">
          Our Amenities
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
          We offer a range of amenities to make your stay comfortable and enjoyable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {AMENITIES_DATA.map((amenity: Amenity) => (
            <Card key={amenity.name} className="text-center shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 text-primary mb-4">
                  <amenity.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg font-heading">{amenity.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{amenity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
