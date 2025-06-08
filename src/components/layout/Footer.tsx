import Link from "next/link";
import { CONTACT_DETAILS, NAV_LINKS, APP_NAME } from "@/lib/constants";
import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { KingsukhLogo } from "@/components/ui/icons/KingsukhLogo";

export default function Footer() {
  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  ];

  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <KingsukhLogo />
            <p className="mt-4 text-sm text-muted-foreground">
              {CONTACT_DETAILS.address}
            </p>
            <div className="mt-4 flex space-x-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 shrink-0 text-primary" />
                <span>{CONTACT_DETAILS.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 shrink-0 text-primary" />
                <Link
                  href={`tel:${CONTACT_DETAILS.phone1}`}
                  className="hover:text-primary"
                >
                  {CONTACT_DETAILS.phone1}
                </Link>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 shrink-0 text-primary opacity-0 md:opacity-100" />{" "}
                {/* Spacing for alignment */}
                <span className="md:hidden">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>{" "}
                {/* Spacing for alignment on mobile */}
                <Link
                  href={`tel:${CONTACT_DETAILS.phone2}`}
                  className="hover:text-primary"
                >
                  {CONTACT_DETAILS.phone2}
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 shrink-0 text-primary" />
                <Link
                  href={`mailto:${CONTACT_DETAILS.email}`}
                  className="hover:text-primary"
                >
                  {CONTACT_DETAILS.email}
                </Link>
              </li>
            </ul>
          </div>

          {/* Map Placeholder or Newsletter */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-4">
              Our Location
            </h3>
            <div className="aspect-video bg-muted rounded-md overflow-hidden">
              <iframe
                src={CONTACT_DETAILS.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kingsukh Guest House Location"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
