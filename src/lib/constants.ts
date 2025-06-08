
import type { NavItem, Room, Amenity, Testimonial, GalleryImage } from '@/types';
import { Home, Info, BedDouble, GalleryHorizontalEnd, MessageSquare, Wifi, Tv, Wind, UtensilsCrossed, ParkingCircle, TreePine, Sun, Coffee } from 'lucide-react';

// Import images from src/assets
import roomDeluxeDoubleImg from '@/assets/room-deluxe-double.png';
import roomStandardTwinImg from '@/assets/room-standard-twin.png';
import roomFamilySuiteImg from '@/assets/room-family-suite.png';

import galleryGuesthouseExteriorImg from '@/assets/gallery-guesthouse-exterior.png';
import galleryGardenViewImg from '@/assets/gallery-garden-view.png';
import galleryRoomInteriorImg from '@/assets/gallery-room-interior.png';
import galleryDiningAreaImg from '@/assets/gallery-dining-area.png';
import galleryReceptionAreaImg from '@/assets/gallery-reception-area.png';
import galleryLocalSceneryImg from '@/assets/gallery-local-scenery.png';


export const APP_NAME = "Kingsukh Guest House";
export const APP_DESCRIPTION = "Your home away from home in Bolpur, Shantiniketan.";

export const NAV_LINKS: NavItem[] = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/about', label: 'About Us', icon: Info },
  { href: '/rooms', label: 'Rooms', icon: BedDouble },
  { href: '/gallery', label: 'Gallery', icon: GalleryHorizontalEnd },
  { href: '/contact', label: 'Contact Us', icon: MessageSquare },
];

export const ROOMS_DATA: Room[] = [
  {
    id: '1',
    name: 'Deluxe Double Room',
    description: 'Spacious room with a king-size bed, modern amenities, and a private balcony.',
    price: '₹2500/night',
    imageUrl: roomDeluxeDoubleImg,
    amenities: ['AC', 'Wi-Fi', 'TV', 'Hot Water'],
    dataAiHint: 'modern bedroom',
  },
  {
    id: '2',
    name: 'Standard Twin Room',
    description: 'Comfortable room with two single beds, perfect for friends or colleagues.',
    price: '₹2000/night',
    imageUrl: roomStandardTwinImg,
    amenities: ['AC', 'Wi-Fi', 'TV'],
    dataAiHint: 'cozy bedroom',
  },
  {
    id: '3',
    name: 'Family Suite',
    description: 'Large suite with multiple beds and a living area, ideal for families.',
    price: '₹3500/night',
    imageUrl: roomFamilySuiteImg,
    amenities: ['AC', 'Wi-Fi', 'TV', 'Hot Water', 'Mini Fridge'],
    dataAiHint: 'spacious suite',
  },
];

export const AMENITIES_DATA: Amenity[] = [
  { name: 'Free Wi-Fi', icon: Wifi, description: 'Stay connected with high-speed internet access throughout the property.' },
  { name: 'Air Conditioning', icon: Wind, description: 'All rooms are equipped with AC for your comfort.' },
  { name: 'Flat Screen TV', icon: Tv, description: 'Enjoy your favorite shows on a modern flat-screen TV.' },
  { name: 'Room Service', icon: UtensilsCrossed, description: 'Delicious meals delivered to your room.' },
  { name: 'Car Parking', icon: ParkingCircle, description: 'Ample parking space available for guests.' },
  { name: 'Lush Garden', icon: TreePine, description: 'Relax and unwind in our beautiful garden area.' },
  { name: 'Power Backup', icon: Sun, description: 'Uninterrupted power supply for a comfortable stay.' },
  { name: 'Complimentary Breakfast', icon: Coffee, description: 'Start your day with a delicious free breakfast.' },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Ananya Sharma',
    location: 'Kolkata',
    quote: 'A wonderful and peaceful stay. The rooms were clean and the staff was very hospitable. Highly recommended!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Rohan Das',
    location: 'Delhi',
    quote: 'Loved the ambiance and the food. It felt like a home away from home. Will definitely visit again.',
    rating: 4.5,
  },
  {
    id: '3',
    name: 'Priya Singh',
    location: 'Mumbai',
    quote: 'The guesthouse is beautiful and very well-maintained. The garden area is a perfect spot to relax.',
    rating: 5,
  },
];

export const GALLERY_IMAGES_DATA: GalleryImage[] = [
  { id: '1', src: galleryGuesthouseExteriorImg, alt: 'Guesthouse exterior', dataAiHint: 'building exterior' },
  { id: '2', src: galleryGardenViewImg, alt: 'Garden view', dataAiHint: 'lush garden' },
  { id: '3', src: galleryRoomInteriorImg, alt: 'Room interior', dataAiHint: 'bedroom interior' },
  { id: '4', src: galleryDiningAreaImg, alt: 'Dining area', dataAiHint: 'dining room' },
  { id: '5', src: galleryReceptionAreaImg, alt: 'Reception area', dataAiHint: 'hotel reception' },
  { id: '6', src: galleryLocalSceneryImg, alt: 'Local scenery', dataAiHint: 'scenic landscape' },
];

export const CONTACT_DETAILS = {
  address: "Prantik, Near Sonajhuri Jungle, Bolpur, Shantiniketan, West Bengal 731235",
  phone1: "+91 98765 43210",
  phone2: "+91 87654 32109",
  email: "bookings@kingsukhguesthouse.com",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0000000000005!2d87.68000000000001!3d23.680000000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f9dd2aaaaaaab%3A0x5f5d5e4f0d4c2b4c!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1623800000000!5m2!1sen!2sin"
};

