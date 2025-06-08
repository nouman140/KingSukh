import Link from 'next/link';
import { Button } from '@/components/ui/button';
import RoomCard from '@/components/RoomCard';
import { ROOMS_DATA } from '@/lib/constants';

export default function OurRoomsSection() {
  const featuredRooms = ROOMS_DATA.slice(0, 3);

  return (
    <section className="py-12 md:py-16 bg-secondary/50 -mx-4 px-4 md:mx-0 md:rounded-lg">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-2 text-primary">
          Our Rooms
        </h2>
        <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
          Comfortable and well-appointed rooms designed for your relaxation and convenience. Choose the perfect space for your stay.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        {ROOMS_DATA.length > 3 && (
          <div className="text-center mt-8 md:mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/rooms">View All Rooms</Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
