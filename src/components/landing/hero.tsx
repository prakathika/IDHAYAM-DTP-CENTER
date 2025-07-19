import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24 md:py-40 bg-background text-foreground">
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-[50rem] h-[50rem] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30 animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[50rem] h-[50rem] bg-gradient-to-tl from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30 animate-[spin_25s_linear_infinite_reverse]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter">
            IDHAYAM DTP CENTER
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
            Your One-Stop <span className="text-primary font-semibold">Digital Service</span> Solution
          </p>
          <p className="text-lg text-muted-foreground">Managed by <span className="font-semibold text-foreground/90">Jagadeesan</span></p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#services">
              <Button size="lg" className="group text-lg font-bold relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-8 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent transition-all duration-300 group-hover:from-primary/80" />
              </Button>
            </a>
            <a href="#contact">
               <Button size="lg" variant="outline" className="text-lg font-bold relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-primary/50 px-8 text-primary-foreground transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/30">
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
