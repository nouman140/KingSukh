import ContactForm from '@/components/ContactForm';
import { CONTACT_DETAILS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import MapSection from '@/components/sections/home/MapSection';

export default function ContactPage() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
          Get In Touch
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We'd love to hear from you! Whether you have a question, a booking inquiry, or just want to say hello, feel free to reach out.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <Card className="shadow-lg" id="booking">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-heading text-primary">Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-8">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-heading text-primary">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-1 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-muted-foreground">{CONTACT_DETAILS.address}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 mt-1 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <Link href={`tel:${CONTACT_DETAILS.phone1}`} className="text-muted-foreground hover:text-primary block">{CONTACT_DETAILS.phone1}</Link>
                  <Link href={`tel:${CONTACT_DETAILS.phone2}`} className="text-muted-foreground hover:text-primary block">{CONTACT_DETAILS.phone2}</Link>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 mt-1 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <Link href={`mailto:${CONTACT_DETAILS.email}`} className="text-muted-foreground hover:text-primary">{CONTACT_DETAILS.email}</Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <div className="pt-8">
        <MapSection />
      </div>
    </div>
  );
}
