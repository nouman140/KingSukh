
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GALLERY_IMAGES_DATA } from '@/lib/constants';

export default function GalleryPreviewSection() {
  const previewImages = GALLERY_IMAGES_DATA.slice(0, 6);

  return (
    <section className="py-12 md:py-16">
      <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center mb-2 text-primary">
        Glimpses of Kingsukh
      </h2>
      <p className="text-center text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto">
        Explore the beauty and ambiance of Kingsukh Guest House through our gallery.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {previewImages.map((image, index) => (
          <div key={image.id} className={`relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${index >= 4 ? 'hidden sm:block' : ''} ${index >=2 && index <4 ? 'hidden xs:block sm:block' : ''}`}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              data-ai-hint={image.dataAiHint}
              placeholder="blur"
            />
          </div>
        ))}
      </div>
      <div className="text-center mt-8 md:mt-12">
        <Button asChild size="lg">
          <Link href="/gallery">View All Images</Link>
        </Button>
      </div>
    </section>
  );
}

