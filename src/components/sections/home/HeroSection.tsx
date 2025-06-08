"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

// Import image from src/assets
import heroScenicImg from "@/assets/kingsukh-hero-scenic.png";

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] w-full -mx-4 md:mx-0 md:rounded-lg overflow-hidden shadow-xl">
      <Image
        src={heroScenicImg}
        alt="Scenic view of Kingsukh Guest House"
        layout="fill"
        objectFit="cover"
        priority
        className="brightness-75"
        data-ai-hint="guesthouse exterior landscape"
        placeholder="blur"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30 p-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 md:mb-6 shadow-text">
          Experience Tranquility
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 max-w-2xl shadow-text">
          Your perfect getaway awaits at Kingsukh Guest House. Discover comfort,
          nature, and peace in Bolpur, Shantiniketan.
        </p>
        <div className="space-x-4">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-white/10 text-primary-foreground"
          >
            <Link href="/rooms">Explore Rooms</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white bg-primary hover:bg-white/10"
          >
            <Link href="https://api.whatsapp.com/send?phone=919007062180">
              Book Your Stay
            </Link>
          </Button>
        </div>
      </div>
      <style jsx global>{`
        .shadow-text {
          text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </section>
  );
}
