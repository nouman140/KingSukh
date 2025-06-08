'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { KingsukhLogo } from '@/components/ui/icons/KingsukhLogo';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-xs bg-background p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="text-left">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <KingsukhLogo />
            </Link>
          </SheetTitle>
          <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
             <X className="h-5 w-5" />
             <span className="sr-only">Close</span>
          </SheetClose>
        </SheetHeader>
        <nav className="flex flex-col space-y-2 p-4">
          {NAV_LINKS.map((link) => (
            <SheetClose asChild key={link.href}>
              <Link
                href={link.href}
                className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted"
                aria-disabled={link.disabled}
                tabIndex={link.disabled ? -1 : undefined}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </SheetClose>
          ))}
          <SheetClose asChild>
            <Button asChild variant="default" className="mt-4 w-full">
              <Link href="/contact#booking" onClick={() => setIsOpen(false)}>Book Now</Link>
            </Button>
          </SheetClose>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
