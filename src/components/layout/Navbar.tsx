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
    { name: 'Services', href: '#services' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Outstation', href: '#outstation' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img 
            src="/logo.jpg" 
            alt="Babu Tours And Travels Logo" 
            className="w-10 h-10 object-contain rounded-lg shadow-sm"
          />
          <div className="flex flex-col">
            <span className={cn("text-xl md:text-2xl font-bold leading-none tracking-tight text-primary")}>
              Babu Tours
            </span>
            <span className={cn("text-xs font-medium tracking-widest uppercase", isScrolled ? "text-slate-500" : "text-slate-600")}>
              And Travels
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                isScrolled ? "text-slate-700" : "text-slate-800"
              )}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 mr-4 text-sm font-medium">
            <Phone className="w-4 h-4 text-primary" />
            <span className={cn(isScrolled ? "text-slate-700" : "text-slate-800")}>9603323998</span>
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
