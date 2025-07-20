
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const galleryItems = [
  {
    src: 'https://source.unsplash.com/random/600x400/?copy,machine',
    alt: 'High-quality document xerox service.',
    hint: 'document xerox',
    title: 'Xerox',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?printer,office',
    alt: 'High-quality document printing service.',
    hint: 'document printing',
    title: 'Printout',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?lamination,document',
    alt: 'A machine laminating a document.',
    hint: 'lamination machine',
    title: 'Lamination',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?identification,card',
    alt: 'A person getting their Aadhar card updated.',
    hint: 'aadhaar card',
    title: 'Aadhar Card',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?tax,form',
    alt: 'GST registration form on a computer screen.',
    hint: 'gst registration',
    title: 'GST Services',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?post,office',
    alt: 'India Post logo on a building.',
    hint: 'post office',
    title: 'India Post',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?indian,army',
    alt: 'Indian Air Force and Army logos.',
    hint: 'indian armed',
    title: 'Indian Air Force/Army Jobs',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?certificate,pension',
    alt: 'Jeevan Praman life certificate service.',
    hint: 'digital life-certificate',
    title: 'Jeevan Praman',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?insurance,payment',
    alt: 'LIC online payment portal on a screen.',
    hint: 'insurance payment',
    title: 'LIC Online',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?scholarship,student',
    alt: 'Student applying for a national scholarship.',
    hint: 'scholarship application',
    title: 'National Scholarship',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?exam,application',
    alt: 'NEET exam application form online.',
    hint: 'exam application',
    title: 'NEET Exam',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?card,identity',
    alt: 'A new PAN card.',
    hint: 'pan card',
    title: 'New PAN Card 2.0',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?link,document',
    alt: 'Linking PAN card with Aadhar card online.',
    hint: 'pan aadhaar',
    title: 'PAN-Aadhaar Linking',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?vehicle,transport',
    alt: 'Parivahan sewa portal for vehicle services.',
    hint: 'vehicle registration',
    title: 'Parivahan',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?passport,travel',
    alt: 'A person filling out a passport application form.',
    hint: 'passport application',
    title: 'Passport Service',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?government,scheme',
    alt: 'PM-KISAN and PMAY scheme logos.',
    hint: 'government scheme',
    title: 'PM-KISAN / PMAY',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?birth,certificate',
    alt: 'Application for a birth or death certificate.',
    hint: 'birth certificate',
    title: 'Birth & Death Certificate',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?bank,account',
    alt: 'Linking Aadhar with bank account.',
    hint: 'bank service',
    title: 'Aadhar Bank Linking',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?worker,card',
    alt: 'eShram card for unorganized workers.',
    hint: 'worker card',
    title: 'eShram',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?job,search',
    alt: 'Employment registration portal for job seekers.',
    hint: 'job application',
    title: 'Employment Registration',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?provident,fund',
    alt: 'EPFO portal for provident fund services.',
    hint: 'provident fund',
    title: 'EPFO',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?vote,election',
    alt: 'Voter ID card illustration.',
    hint: 'voter id',
    title: 'Voter ID',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?education,scholarship',
    alt: 'Vidyadhan scholarship application online.',
    hint: 'education scholarship',
    title: 'Vidyadhan Scholarship',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?government,exam',
    alt: 'Government exam portals like TNPSC, TNPDS, UPSC.',
    hint: 'government exam',
    title: 'TNPSC / TNPDS / UPSC',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?electricity,bill',
    alt: 'Online electricity bill payment for TANGEDCO/TNEB.',
    hint: 'bill payment',
    title: 'TANGEDCO / TNEB',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?school,admission',
    alt: 'RTE school admission form.',
    hint: 'school admission',
    title: 'RTE Admission',
  },
  {
    src: 'https://source.unsplash.com/random/600x400/?online,application',
    alt: 'UGC NET exam, UID Card, and SSC job application portals.',
    hint: 'online application',
    title: 'UGC NET / UID Card / SSC',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
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
