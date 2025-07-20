import Image from 'next/image';
import { Card } from '@/components/ui/card';

const galleryItems = [
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'A person getting their Aadhar card updated.',
    hint: 'aadhar card service',
    title: 'Aadhar Card Services',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'High-quality document printing service.',
    hint: 'document printing',
    title: 'Printout & Xerox',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'A machine laminating a document.',
    hint: 'lamination machine',
    title: 'Lamination',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'A person filling out a passport application form.',
    hint: 'passport application',
    title: 'Passport Services',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'A student applying for a scholarship online.',
    hint: 'online scholarship application',
    title: 'Scholarship Applications',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Close-up of a PAN card.',
    hint: 'pan card',
    title: 'PAN Card Services',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'An official government services portal on a computer screen.',
    hint: 'government services online',
    title: 'Govt. Exam Applications',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'Paying a utility bill online.',
    hint: 'online bill payment',
    title: 'Bill Payments',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'A person booking a bus ticket online.',
    hint: 'online ticket booking',
    title: 'Ticket Booking',
  },
  {
    src: 'https://placehold.co/600x400.png',
    alt: 'A person using a digital service at the counter.',
    hint: 'digital service center',
    title: 'General DTP Work',
  },
];

export default function GalleryView() {
  return (
    <section id="gallery" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
            Our Gallery
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A glimpse into the wide range of services we provide to our valued customers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-2 border"
            >
              <div className="relative aspect-video">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  data-ai-hint={item.hint}
                />
              </div>
              <div className="p-4 bg-card/80">
                <h3 className="font-headline text-lg font-bold text-foreground">
                  {item.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
