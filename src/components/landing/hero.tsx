import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary">
              Unlock Your Potential with Edugo
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto md:mx-0">
              Discover a world of knowledge with our cutting-edge online courses. Learn from industry experts and take your skills to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full">
                Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="font-bold rounded-full border-2">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Students learning online"
              width={600}
              height={450}
              className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-500"
              data-ai-hint="online learning students"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
