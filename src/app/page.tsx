import Header from '../components/Header';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Gallery from '../components/Gallery';
import Tips from '../components/Tips';
import Reviews from '../components/Reviews';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Overview />
      <Gallery />
      <Tips />
      <Reviews />
      <MapSection />
      <Footer />
    </main>
  );
}
