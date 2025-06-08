import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, APP_NAME } from "@/lib/constants";
import MobileNav from "./MobileNav";
import { KingsukhLogo } from "@/components/ui/icons/KingsukhLogo";

export default function Header() {
  return (
    <header className="bg-card shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-heading text-primary hover:text-primary/90 transition-colors"
        >
          <KingsukhLogo />
        </Link>

        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              aria-disabled={link.disabled}
              tabIndex={link.disabled ? -1 : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild variant="default" size="sm">
            <Link href="https://api.whatsapp.com/send?phone=919007062180">
              Book Now
            </Link>
          </Button>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
