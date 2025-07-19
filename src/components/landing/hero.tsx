import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24 md:py-40 bg-background text-foreground">
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-[50rem] h-[50rem] bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30 animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[50rem] h-[50rem] bg-gradient-to-tl from-primary/20 to-accent/20 rounded-full blur-3xl opacity-30 animate-[spin_25s_linear_infinite_reverse]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative inline-flex">
                <div className="animate-pulse-slow absolute -inset-2 bg-primary/20 rounded-full blur-xl"></div>
                <div className="relative inline-flex items-center justify-center bg-background p-4 rounded-full mb-4 ring-2 ring-primary/20">
                    <Zap className="h-12 w-12 text-primary animate-[pulse_5s_ease-in-out_infinite]" strokeWidth={1.5} />
                </div>
            </div>

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
                <span className="absolute -inset-full animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] transition-opacity duration-500 group-hover:opacity-100"></span>
                <span className="relative z-10 flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Button>
            </a>
            <a href="#contact">
               <Button size="lg" variant="outline" className="text-lg font-bold group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full border-2 border-primary/50 bg-transparent px-8 text-primary transition-all duration-300 hover:scale-105 hover:bg-transparent hover:text-foreground hover:shadow-lg hover:shadow-primary/30">
                <span className="absolute h-0 w-0 rounded-full bg-primary/20 transition-all duration-300 group-hover:h-56 group-hover:w-56"></span>
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
