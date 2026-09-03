import { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { Fleet } from './components/sections/Fleet';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { GroupTravel } from './components/sections/GroupTravel';
import { Outstation } from './components/sections/Outstation';
import { Gallery } from './components/sections/Gallery';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { FloatingActions } from './components/layout/FloatingActions';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/30 pb-16 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Fleet />
        <Services />
        <WhyChooseUs />
        <GroupTravel />
        <Outstation />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;
