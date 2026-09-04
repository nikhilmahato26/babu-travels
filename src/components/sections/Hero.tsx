import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { HeroBookingForm } from './HeroBookingForm';
import { Button } from '@/components/ui/button';

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple text reveal animation
      gsap.fromTo('.hero-text', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
      );
      
      // Image scale effect
      gsap.fromTo('.hero-bg',
        { scale: 1.1 },
        { scale: 1, duration: 2, ease: "power2.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="relative w-full" ref={heroRef}>
      {/* Background Image with Overlay */}
      <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden">
        <div 
          className="hero-bg absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("https://www.wheelsbingo.com/images/web-img/cars/car_images/toyota-innova-crysta-front-left-side-exterior.webp")' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30" />
        
        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col justify-center">
          <div ref={textRef} className="max-w-3xl pt-20">
            <span className="hero-text inline-flex items-center gap-2 bg-secondary/20 text-secondary border border-secondary/30 px-3 py-1 rounded-full font-medium tracking-wider uppercase mb-4 text-xs md:text-sm backdrop-blur-sm">
              📍 #1 Cab Service Kadapa • Airport & Local Taxi
            </span>
            <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Reliable Travel.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
                Comfortable Journeys.
              </span>
            </h1>
            <p className="hero-text text-lg md:text-xl text-slate-200 mb-3 max-w-2xl font-light">
              Airport Taxi Service Kadapa • Local Taxi Service Kadapa • Outstation Travel
            </p>
            <p className="hero-text text-sm md:text-base text-slate-400 mb-10 font-medium">
              Cars • Tempo Travellers • Urbania • Mini Bus • Bus • 24/7 Service in Kadapa
            </p>
            
            <div className="hero-text flex flex-wrap gap-4">
              <Button 
                onClick={() => window.location.href = 'tel:+919603323998'}
                size="lg" 
                className="h-14 px-8 text-base shadow-lg shadow-primary/25"
              >
                Call Now
              </Button>
              <Button 
                onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-base bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white backdrop-blur-sm"
              >
                View Our Fleet
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="relative px-4 md:px-8">
        <HeroBookingForm />
      </div>
    </section>
  );
}
