
import Image from 'next/image';
import { GALLERY_IMAGES_DATA } from '@/lib/constants';
import type { GalleryImage } from '@/types';
import { Card } from '@/components/ui/card';

export default function GalleryPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          Photo Gallery
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore the visual charm of Kingsukh Guest House and its surroundings.
        </p>
      </section>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
          {GALLERY_IMAGES_DATA.map((image: GalleryImage) => (
            <Card key={image.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint={image.dataAiHint}
                  placeholder="blur"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}

