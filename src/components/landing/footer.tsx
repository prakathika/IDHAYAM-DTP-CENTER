import Link from 'next/link';
import { CircuitBoard, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto py-6 px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
                <CircuitBoard className="h-5 w-5 text-primary" />
                <span className="font-headline text-lg font-bold text-primary">IDHAYAM DTP CENTER</span>
            </div>
            <p className="text-sm text-foreground/60 text-center sm:text-left">
                © {new Date().getFullYear()} Idhayam DTP Center. All rights reserved.
                <br />
                Managed by <span className="font-semibold text-primary">Jagadeesan</span>.
            </p>
            <div className="flex gap-4">
                <Link href="#" aria-label="Twitter" className="text-foreground/60 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
                <Link href="#" aria-label="Facebook" className="text-foreground/60 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
                <Link href="#" aria-label="Instagram" className="text-foreground/60 hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
