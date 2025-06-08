
import type { LucideIcon } from 'lucide-react';
import type { StaticImageData } from 'next/image';

export interface NavItem {
  href: string;
  label: string;
  icon?: LucideIcon;
  disabled?: boolean;
}

export interface Room {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: StaticImageData;
  amenities: string[];
  dataAiHint?: string;
}

export interface Amenity {
  name: string;
  icon: LucideIcon;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: StaticImageData;
  alt: string;
  dataAiHint?: string;
}

