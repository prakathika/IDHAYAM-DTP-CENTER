import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24 md:py-40 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-50 animate-pulse-slow"></div>
      <div className="absolute -top-20 -right-20 w-72 h-72 border-[1px] border-primary/20 rounded-full animate-pulse-slow" />
      <div className="absolute -bottom-20 -left-20 w-72 h-72 border-[1px] border-accent/20 rounded-full animate-pulse" />


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
              <Button size="lg" className="group text-lg font-bold relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-8 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <span className="relative z-10 flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent transition-all duration-300 group-hover:from-primary/80" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
