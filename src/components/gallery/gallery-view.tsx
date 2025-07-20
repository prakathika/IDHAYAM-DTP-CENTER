
import Image from 'next/image';

const galleryItems = [
  {
    src: 'https://source.unsplash.com/VFBu2jdu81A/600x400',
    alt: 'High-quality document xerox service.',
    hint: 'document xerox',
    title: 'Xerox',
  },
  {
    src: 'https://source.unsplash.com/mJ2A9yToa-o/600x400',
    alt: 'High-quality document printing service.',
    hint: 'document printing',
    title: 'Printout',
  },
  {
    src: 'https://source.unsplash.com/1i06dcb2_Hk/600x400',
    alt: 'A machine laminating a document.',
    hint: 'lamination machine',
    title: 'Lamination',
  },
  {
    src: 'https://source.unsplash.com/g1Kr4Ozfoac/600x400',
    alt: 'A person getting their Aadhar card updated.',
    hint: 'aadhaar card',
    title: 'Aadhar Card',
  },
  {
    src: 'https://source.unsplash.com/3-pA_xM9p1k/600x400',
    alt: 'GST registration form on a computer screen.',
    hint: 'gst registration',
    title: 'GST Services',
  },
  {
    src: 'https://source.unsplash.com/IYpNa5I1aF8/600x400',
    alt: 'India Post logo on a building.',
    hint: 'post office',
    title: 'India Post',
  },
  {
    src: 'https://source.unsplash.com/Z42t1xdb3dI/600x400',
    alt: 'Indian Air Force and Army logos.',
    hint: 'indian armed',
    title: 'Indian Air Force/Army Jobs',
  },
  {
    src: 'https://source.unsplash.com/O6NkG430Usk/600x400',
    alt: 'Jeevan Praman life certificate service.',
    hint: 'digital life-certificate',
    title: 'Jeevan Praman',
  },
  {
    src: 'https://source.unsplash.com/YbtT4L7-4gI/600x400',
    alt: 'LIC online payment portal on a screen.',
    hint: 'insurance payment',
    title: 'LIC Online',
  },
  {
    src: 'https://source.unsplash.com/dKCKiC0B9Fw/600x400',
    alt: 'Student applying for a national scholarship.',
    hint: 'scholarship application',
    title: 'National Scholarship',
  },
  {
    src: 'https://source.unsplash.com/5fNmWej4tAA/600x400',
    alt: 'NEET exam application form online.',
    hint: 'exam application',
    title: 'NEET Exam',
  },
  {
    src: 'https://source.unsplash.com/Yv_o2s8s2G8/600x400',
    alt: 'A new PAN card.',
    hint: 'pan card',
    title: 'New PAN Card 2.0',
  },
  {
    src: 'https://source.unsplash.com/P4Qv01LgG2k/600x400',
    alt: 'Linking PAN card with Aadhar card online.',
    hint: 'pan aadhaar',
    title: 'PAN-Aadhaar Linking',
  },
  {
    src: 'https://source.unsplash.com/5gGcn2PRw_U/600x400',
    alt: 'Parivahan sewa portal for vehicle services.',
    hint: 'vehicle registration',
    title: 'Parivahan',
  },
  {
    src: 'https://source.unsplash.com/oSMiSso8iIs/600x400',
    alt: 'A person filling out a passport application form.',
    hint: 'passport application',
    title: 'Passport Service',
  },
  {
    src: 'https://source.unsplash.com/uC5rL0zmx20/600x400',
    alt: 'PM-KISAN and PMAY scheme logos.',
    hint: 'government scheme',
    title: 'PM-KISAN / PMAY',
  },
  {
    src: 'https://source.unsplash.com/O6NkG430Usk/600x400',
    alt: 'Application for a birth or death certificate.',
    hint: 'birth certificate',
    title: 'Birth & Death Certificate',
  },
  {
    src: 'https://source.unsplash.com/95YRwf6CNw8/600x400',
    alt: 'Linking Aadhar with bank account.',
    hint: 'bank service',
    title: 'Aadhar Bank Linking',
  },
  {
    src: 'https://source.unsplash.com/Z42t1xdb3dI/600x400',
    alt: 'eShram card for unorganized workers.',
    hint: 'worker card',
    title: 'eShram',
  },
  {
    src: 'https://source.unsplash.com/wD1LRb9OeEo/600x400',
    alt: 'Employment registration portal for job seekers.',
    hint: 'job application',
    title: 'Employment Registration',
  },
  {
    src: 'https://source.unsplash.com/yv-h_an3_tY/600x400',
    alt: 'EPFO portal for provident fund services.',
    hint: 'provident fund',
    title: 'EPFO',
  },
  {
    src: 'https://source.unsplash.com/sYffw0LNr7s/600x400',
    alt: 'Voter ID card illustration.',
    hint: 'voter id',
    title: 'Voter ID',
  },
  {
    src: 'https://source.unsplash.com/dKCKiC0B9Fw/600x400',
    alt: 'Vidyadhan scholarship application online.',
    hint: 'education scholarship',
    title: 'Vidyadhan Scholarship',
  },
  {
    src: 'https://source.unsplash.com/2s4k-s-bPAI/600x400',
    alt: 'Government exam portals like TNPSC, TNPDS, UPSC.',
    hint: 'government exam',
    title: 'TNPSC / TNPDS / UPSC',
  },
  {
    src: 'https://source.unsplash.com/YbtT4L7-4gI/600x400',
    alt: 'Online electricity bill payment for TANGEDCO/TNEB.',
    hint: 'bill payment',
    title: 'TANGEDCO / TNEB',
  },
  {
    src: 'https://source.unsplash.com/eU4pipU_8HA/600x400',
    alt: 'RTE school admission form.',
    hint: 'school admission',
    title: 'RTE Admission',
  },
  {
    src: 'https://source.unsplash.com/5fNmWej4tAA/600x400',
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-primary/30 hover:scale-105"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                data-ai-hint={item.hint}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="font-headline text-lg font-bold text-white text-center p-2">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
