import { Button } from '@/components/ui/button';
import { ArrowDown, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24 md:py-40 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-4 animate-bounce-slow">
              <Zap className="h-12 w-12 text-primary" strokeWidth={1.5} />
          </div>
          
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-foreground">
            IDHAYAM DTP CENTER
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
            Your One-Stop <span className="text-primary font-semibold">Digital Service</span> Solution
          </p>
          <p className="text-lg text-muted-foreground">Managed by <span className="font-semibold text-foreground">Jagadeesan</span></p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#services">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full text-lg px-8 py-6 transition-transform hover:scale-105">
                    Explore Our Services <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

