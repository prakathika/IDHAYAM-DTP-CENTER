import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import GalleryView from '@/components/gallery/gallery-view';
import ScrollToTop from '@/components/landing/scroll-to-top';

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background relative">
      <Header />
      <main className="flex-1">
        <GalleryView />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
