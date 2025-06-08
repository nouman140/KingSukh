
import Image from 'next/image';
import Link from 'next/link';
import type { Room } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tag } from 'lucide-react';

interface RoomCardProps {
  room: Room;
}

export default function RoomCard({ room }: RoomCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <CardHeader className="p-0 relative">
        <Image
          src={room.imageUrl}
          alt={room.name}
          width={600}
          height={400}
          className="object-cover w-full h-48 md:h-56"
          data-ai-hint={room.dataAiHint}
          placeholder="blur"
        />
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <CardTitle className="text-xl font-heading mb-2">{room.name}</CardTitle>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{room.description}</p>
        {room.amenities && room.amenities.length > 0 && (
          <div className="mb-3">
            <h4 className="text-xs font-semibold text-foreground mb-1">Key Amenities:</h4>
            <ul className="flex flex-wrap gap-1.5">
              {room.amenities.slice(0,3).map(amenity => (
                <li key={amenity} className="text-xs bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">{amenity}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center border-t">
        <p className="text-lg font-semibold text-primary flex items-center">
          <Tag className="w-4 h-4 mr-1.5 text-primary/80" />
          {room.price}
        </p>
        <Button asChild variant="outline" size="sm">
          <Link href={`/rooms#${room.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

