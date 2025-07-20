import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import Services from '@/components/landing/services';
import Contact from '@/components/landing/contact';
import Footer from '@/components/landing/footer';
import ScrollToTop from '@/components/landing/scroll-to-top';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
