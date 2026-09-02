import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function GroupTravel() {
  const steps = [
    { capacity: '12 Seater', desc: 'Tempo Traveller' },
    { capacity: '16 Seater', desc: 'Urbania' },
    { capacity: '22-27 Seater', desc: 'Mini Bus' },
    { capacity: 'Large Bus', desc: 'Custom Needs' },
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Group Transportation</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Travel Together. Travel Comfortably.
          </h2>
          <p className="text-slate-600 text-lg">
            Babu Tours And Travels provides multiple vehicle options tailored perfectly for Family Trips, Group Tours, Events, and Corporate Travel.
          </p>
        </div>

        {/* Progression Steps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 relative mb-16">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -z-10 -translate-y-1/2" />
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center group w-full md:w-auto relative bg-slate-50 py-4 px-2">
              <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-100 flex items-center justify-center text-primary font-bold text-lg shadow-sm group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 z-10 mb-4">
                {step.capacity.split(' ')[0]}
                {step.capacity.includes('Seater') ? 'S' : '+'}
              </div>
              <h4 className="font-bold text-slate-900 text-center">{step.capacity}</h4>
              <p className="text-sm text-slate-500 text-center">{step.desc}</p>
              
              {/* Connector (mobile) */}
              {index < steps.length - 1 && (
                <ArrowRight className="md:hidden mt-4 text-slate-300 w-6 h-6" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="h-14 px-8 text-base shadow-lg">
            Find Your Vehicle
          </Button>
        </div>
      </div>
    </section>
  );
}
