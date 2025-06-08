import Image from "next/image";
import { ROOMS_DATA, AMENITIES_DATA } from "@/lib/constants";
import type { Room } from "@/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle, Tag } from "lucide-react";
import AmenitiesSection from "@/components/sections/home/AmenitiesSection"; // Re-using the home amenities section for general amenities

export default function RoomsPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          Our Accommodations
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Find the perfect room for your stay at Kingsukh Guest House. Each room
          is designed for comfort and equipped with modern amenities.
        </p>
      </section>

      <section className="space-y-8 md:space-y-12">
        {ROOMS_DATA.map((room: Room) => (
          <Card
            key={room.id}
            id={room.id}
            className="overflow-hidden shadow-lg md:flex"
          >
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <Image
                src={room.imageUrl}
                alt={room.name}
                layout="fill"
                objectFit="cover"
                className=""
                data-ai-hint={room.dataAiHint}
                placeholder="blur"
              />
            </div>
            <div className="md:w-3/5">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-heading text-primary">
                  {room.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {room.description}
                </p>
                {room.amenities && room.amenities.length > 0 && (
                  <>
                    <h4 className="font-semibold text-foreground mb-2">
                      Room Amenities:
                    </h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1 mb-4 text-sm text-muted-foreground">
                      {room.amenities.map((amenity) => (
                        <li key={amenity} className="flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-primary/80" />
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t pt-4">
                <p className="text-2xl font-semibold text-primary flex items-center">
                  <Tag className="w-5 h-5 mr-2 text-primary/80" />
                  {room.price}
                </p>
                <Button asChild size="lg">
                  <Link
                    href={`https://api.whatsapp.com/send?phone=919007062180?room=${encodeURIComponent(
                      room.name
                    )}`}
                  >
                    Book This Room
                  </Link>
                </Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </section>

      {/* General Amenities Section */}
      <div className="pt-8">
        <AmenitiesSection />
      </div>
    </div>
  );
}
