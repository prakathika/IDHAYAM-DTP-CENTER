import Link from 'next/link';
import { BookOpen, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <span className="font-headline text-xl font-bold text-primary">Edugo</span>
            </div>
            <p className="text-sm text-foreground/60 text-center md:text-left">&copy; {new Date().getFullYear()} Edugo. All rights reserved.</p>
            <div className="flex gap-4">
                <Link href="#" aria-label="Twitter" className="text-foreground/60 hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
                <Link href="#" aria-label="Facebook" className="text-foreground/60 hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
                <Link href="#" aria-label="LinkedIn" className="text-foreground/60 hover:text-primary transition-colors"><Linkedin className="h-5 w-5" /></Link>
            </div>
        </div>
      </div>
    </footer>
  );
}
