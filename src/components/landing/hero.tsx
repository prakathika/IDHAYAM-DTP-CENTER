import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20 bg-background text-foreground">
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-[50rem] h-[50rem] bg-primary/10 rounded-full blur-3xl opacity-40 animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[50rem] h-[50rem] bg-accent/10 rounded-full blur-3xl opacity-40 animate-[spin_25s_linear_infinite_reverse]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">

          <div className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden border-4 border-primary/20 mb-8">
            <Image
              src="/signboard.jpg"
              alt="IDHAYAM DTP CENTER Sign Board"
              width={1085}
              height={452}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter">
            IDHAYAM DTP CENTER
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Your One-Stop <span className="text-primary font-semibold">Digital Service</span> Solution
          </p>
          <p className="text-lg text-muted-foreground">Managed by <span className="font-semibold text-foreground">Jagadeesan</span></p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center pt-4">
            <a href="#services">
              <Button size="lg" className="group text-lg font-bold h-14 rounded-full px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
                Explore Services
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#contact">
               <Button size="lg" variant="outline" className="text-lg font-bold group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 border-primary/50 bg-transparent px-8 text-primary transition-all duration-300 hover:scale-105 hover:bg-transparent hover:text-foreground hover:shadow-lg hover:shadow-primary/20">
                <span className="absolute h-0 w-0 rounded-full bg-primary/10 transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
                <span className="relative z-10 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Get in Touch
                </span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
