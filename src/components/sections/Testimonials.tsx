import useEmblaCarousel from 'embla-carousel-react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback } from 'react';

const testimonials = [
  {
    name: '[Placeholder Customer Name]',
    tripType: 'Outstation Travel',
    rating: 5,
    text: '[This is a placeholder review. Actual customer reviews will be updated here once provided. We are committed to providing the best travel experience.]'
  },
  {
    name: '[Placeholder Customer Name]',
    tripType: 'Group Tour',
    rating: 5,
    text: '[This is a placeholder review. Actual customer reviews will be updated here once provided. We are committed to providing the best travel experience.]'
  },
  {
    name: '[Placeholder Customer Name]',
    tripType: 'Local Car Rental',
    rating: 5,
    text: '[This is a placeholder review. Actual customer reviews will be updated here once provided. We are committed to providing the best travel experience.]'
  }
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
          <p className="text-slate-500 text-sm italic">
            *Placeholder reviews. Will be updated with real customer feedback.*
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-12">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((t, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 pr-4 py-4">
                  <div className="bg-white border border-slate-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 relative text-center">
                    <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/10" />
                    
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                      ))}
                    </div>
                    
                    <p className="text-lg md:text-xl text-slate-700 italic mb-8 leading-relaxed">
                      "{t.text}"
                    </p>
                    
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                      <p className="text-sm text-slate-500">{t.tripType}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-primary transition-colors border border-slate-100"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-primary transition-colors border border-slate-100"
            onClick={scrollNext}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
