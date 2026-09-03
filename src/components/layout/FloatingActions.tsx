import { Phone, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Floating Actions (visible on md+ screens on scroll) */}
      <div
        className={cn(
          "hidden md:flex fixed bottom-6 right-6 z-50 flex-col gap-3 transition-all duration-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        )}
      >
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919603323998" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group relative"
          aria-label="Contact on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
            Chat on WhatsApp
          </span>
        </a>

        {/* Call Button */}
        <a 
          href="tel:+919603323998" 
          className="w-14 h-14 bg-primary hover:bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group relative"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
            Call Now
          </span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Bar (Call Now & WhatsApp) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-md border-t border-slate-800 p-2.5 px-3 pb-[max(0.65rem,env(safe-area-inset-bottom))] shadow-2xl">
        <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
          {/* Call Now Button */}
          <a
            href="tel:+919603323998"
            className="flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] active:scale-[0.98] text-slate-950 font-bold text-sm tracking-wider uppercase py-3 px-3 rounded-lg shadow-md transition-all select-none"
            aria-label="Call Now"
          >
            <Phone className="w-4 h-4 text-slate-950 stroke-[2.5]" />
            <span>Call Now</span>
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/919603323998"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#0F7644] hover:bg-[#0B5C35] active:scale-[0.98] text-white font-bold text-sm tracking-wider uppercase py-3 px-3 rounded-lg shadow-md transition-all select-none"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4 text-white stroke-[2.5]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}

