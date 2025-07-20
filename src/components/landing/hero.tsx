import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Zap } from 'lucide-react';

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16.75 13.96c.25.13.41.2.46.3.05.1.04.58-.12 1.39-.15.8-.75 1.48-1.32 1.56-.57.08-1.23.04-1.84-.23-.6-.28-1.39-.52-2.32-1.09-1.25-.78-2.2-1.88-2.83-2.93-.64-1.05-.98-2.22-.98-3.37 0-1.15.34-2.22.99-3.27.65-1.05,1.59-1.8,2.74-2.22.6-.21,1.24-.26,1.86-.06.62.2,1.02.69,1.18,1.2.16.51.15,1.13-.04,1.75-.19.62-.43,1.21-.72,1.76-.29.55-.58,1.09-.81,1.57-.23.48-.39.9-.31,1.31.08.41.38.82.92,1.22" />
      <path d="M19.37 4.94A10.07 10.07 0 0 0 12.01 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.28 4.92L2 22l5.25-1.38c1.47.82,3.15 1.28,4.92 1.28 5.52 0 10-4.48 10-10a9.96 9.96 0 0 0-2.83-7.06z" />
    </svg>
  );

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-24 md:py-40 bg-background text-foreground">
      <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3 w-[50rem] h-[50rem] bg-primary/10 rounded-full blur-3xl opacity-40 animate-[spin_20s_linear_infinite]"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[50rem] h-[50rem] bg-accent/10 rounded-full blur-3xl opacity-40 animate-[spin_25s_linear_infinite_reverse]"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative inline-flex">
                <div className="animate-pulse-slow absolute -inset-2 bg-primary/20 rounded-full blur-xl"></div>
                <div className="relative inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-4 ring-2 ring-primary/20">
                    <Zap className="h-12 w-12 text-primary animate-[pulse_5s_ease-in-out_infinite]" strokeWidth={1.5} />
                </div>
            </div>

          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter">
            IDHAYAM DTP CENTER
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Your One-Stop <span className="text-primary font-semibold">Digital Service</span> Solution
          </p>
          <p className="text-lg text-muted-foreground">Managed by <span className="font-semibold text-foreground">Jagadeesan</span></p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
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
            <a href="https://wa.me/7293148158" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg font-bold h-14 rounded-full px-8 transition-all duration-300 hover:scale-105 bg-[#25D366] hover:bg-[#1DA851] text-white shadow-lg hover:shadow-green-500/30">
                <WhatsAppIcon className="h-6 w-6" />
                WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
