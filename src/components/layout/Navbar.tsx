import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Outstation', href: '#outstation' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all duration-300 ease-in-out',
        isScrolled ? 'py-2.5' : 'py-3 md:py-3.5'
      )}
    >
      {/* Top Keyword & Announcement Bar */}
      <div className={cn(
        "hidden md:block transition-all duration-300 overflow-hidden mb-2 px-4 md:px-8",
        isScrolled ? "h-0 opacity-0 mb-0" : "h-auto opacity-100"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs font-medium text-slate-600 bg-slate-100/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/70">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-semibold text-slate-800">Cab Service Kadapa:</span>
            <span>Airport Taxi Service Kadapa</span>
            <span className="text-slate-300">•</span>
            <span>Local Taxi Service Kadapa</span>
            <span className="text-slate-300">•</span>
            <span>Outstation Cabs</span>
          </div>
          <div className="flex items-center gap-4 text-slate-700">
            <span>24/7 Booking Available in Kadapa</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img 
            src="/logo.jpg" 
            alt="Babu Tours & Travels Logo" 
            className="w-10 h-10 object-contain rounded-lg shadow-sm"
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-bold leading-none tracking-tight text-primary">
              Babu Tours
            </span>
            <span className="text-xs font-medium tracking-widest uppercase text-slate-500">
              & Travels • Kadapa
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 mr-4 text-sm font-medium">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-slate-700">9603323998</span>
          </div>
          
          <Button 
            onClick={() => window.open('https://wa.me/919603323998', '_blank')}
            className="hidden md:flex shadow-md hover:shadow-lg transition-shadow"
          >
            Book a Vehicle
          </Button>
          
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-4 flex flex-col gap-4 md:hidden">
          <div className="text-xs text-primary font-semibold py-1 px-2.5 bg-primary/5 rounded-lg border border-primary/10">
            🚕 #1 Cab Service Kadapa • Airport & Local Taxi
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            onClick={() => window.open('https://wa.me/919603323998', '_blank')}
            className="w-full mt-4" 
            size="lg"
          >
            Book a Vehicle
          </Button>
        </div>
      )}
    </header>
  );
}
