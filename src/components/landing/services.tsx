import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, BrainCircuit, Users } from 'lucide-react';

const services = [
  {
    icon: <DollarSign className="h-10 w-10 text-primary" />,
    title: 'Financial Literacy',
    description: 'Master your finances with our comprehensive courses on budgeting, investing, and wealth management.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'UX Design',
    description: 'Learn to create intuitive and beautiful user interfaces that people love to use. From wireframing to prototyping.',
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-primary" />,
    title: 'Emotional Intelligence',
    description: 'Develop crucial soft skills, enhance self-awareness, and improve your personal and professional relationships.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Premier Courses</h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            We offer a curated selection of courses designed to empower you with in-demand skills for the modern world.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 rounded-2xl border-0">
              <CardHeader className="p-0 mb-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent className="p-0 space-y-2 flex-grow">
                <CardTitle className="font-headline text-2xl font-semibold">{service.title}</CardTitle>
                <p className="text-foreground/70">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
