import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Forum } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const forum = Forum({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-forum',
});

export const metadata: Metadata = {
  title: 'Kingsukh Digital Guest House',
  description: 'Experience tranquility and comfort at Kingsukh Guest House, your perfect getaway in Shantiniketan, Bolpur.',
  keywords: ['guesthouse', 'kingsukh', 'shantiniketan', 'bolpur', 'hotel', 'accommodation']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${forum.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
