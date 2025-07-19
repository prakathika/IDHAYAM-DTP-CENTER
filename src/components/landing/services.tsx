import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
    FileText, Landmark, Shield, GraduationCap, FileHeart, Link2, 
    Bus, CircleUser, Home, Award, Fingerprint, Banknote, Briefcase, 
    UserCheck, BookUser, Building, University, FileSearch, Globe,
    Printer, ScanLine, FileImage, CreditCard
} from 'lucide-react';

const services = [
    { icon: <Printer />, title: 'Xerox' },
    { icon: <ScanLine />, title: 'Printout' },
    { icon: <FileImage />, title: 'Lamination' },
    { icon: <CreditCard />, title: 'Aadhar Card' },
    { icon: <FileText />, title: 'GST Services' },
    { icon: <Landmark />, title: 'India Post' },
    { icon: <Shield />, title: 'Indian Air Force/Army Jobs' },
    { icon: <GraduationCap />, title: 'Jeevan Praman' },
    { icon: <FileHeart />, title: 'LIC Online' },
    { icon: <Award />, title: 'National Scholarship' },
    { icon: <GraduationCap />, title: 'NEET Exam' },
    { icon: <Fingerprint />, title: 'New PAN Card 2.0' },
    { icon: <Link2 />, title: 'PAN-Aadhaar Linking' },
    { icon: <Bus />, title: 'Parivahan' },
    { icon: <CircleUser />, title: 'Passport Service' },
    { icon: <Home />, title: 'PM-KISAN / PMAY' },
    { icon: <FileText />, title: 'Birth & Death Certificate' },
    { icon: <Link2 />, title: 'Aadhar Bank Linking' },
    { icon: <BookUser />, title: 'eShram' },
    { icon: <Briefcase />, title: 'Employment Registration' },
    { icon: <Building />, title: 'EPFO' },
    { icon: <UserCheck />, title: 'Voter ID' },
    { icon: <Award />, title: 'Vidyadhan Scholarship' },
    { icon: <University />, title: 'TNPSC / TNPDS / UPSC' },
    { icon: <FileSearch />, title: 'TANGEDCO / TNEB' },
    { icon: <GraduationCap />, title: 'RTE Admission' },
    { icon: <Globe />, title: 'UGC NET / UID Card / SSC' },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Services</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            A comprehensive range of digital services to meet all your needs under one roof.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group relative overflow-hidden text-center p-4 shadow-lg transition-all duration-300 rounded-2xl bg-background/50 backdrop-blur-sm hover:shadow-primary/20 hover:border-primary/50 hover:-translate-y-2 border">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardContent className="p-0 space-y-4 flex-grow flex flex-col justify-center items-center h-full relative z-10">
                <div className="text-primary transition-transform duration-300 group-hover:scale-125">
                  {React.cloneElement(service.icon, { className: "h-10 w-10 mx-auto" })}
                </div>
                <p className="font-headline text-sm md:text-base font-semibold text-foreground/90">{service.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
