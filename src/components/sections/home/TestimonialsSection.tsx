import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { TESTIMONIALS_DATA } from '@/lib/constants';
import type { Testimonial } from '@/types';
import { Star, MessageCircle } from 'lucide-react';

function renderStars(rating: number) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
  }
  if (halfStar) {
    stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-yellow-200" />); // Or use a specific half-star icon
  }
  for (let i = (fullStars + (halfStar ? 1 : 0)); i < 5; i++) {
    stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-yellow-300" />);
  }
  return <div className="flex">{stars}</div>;
}

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-2 text-primary">
        What Our Guests Say
      </h2>
      <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
        Hear from those who have experienced the warmth and comfort of Kingsukh Guest House.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {TESTIMONIALS_DATA.map((testimonial: Testimonial) => (
          <Card key={testimonial.id} className="shadow-lg h-full flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-lg font-heading">{testimonial.name}</CardTitle>
                {renderStars(testimonial.rating)}
              </div>
              <p className="text-xs text-muted-foreground">{testimonial.location}</p>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm text-foreground italic leading-relaxed">
                <MessageCircle className="inline-block w-4 h-4 mr-2 text-primary/70 relative -top-0.5" />
                {testimonial.quote}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
