import { MapPin, Compass } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Outstation() {
  return (
    <section id="outstation" className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-[2rem] transform -rotate-3 scale-105" />
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80" 
              alt="Outstation Travel" 
              className="relative rounded-[2rem] shadow-2xl w-full h-[500px] object-cover"
            />
            
            {/* Highlight Box */}
            <div className="absolute top-8 -right-4 lg:-right-12 bg-white p-5 rounded-2xl shadow-xl flex items-center gap-4 max-w-[220px]">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <div className="text-sm text-slate-500 font-medium">Intercity Travel</div>
                <div className="font-bold text-slate-900">Seamless & Safe</div>
              </div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">Outstation Travel</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Your Journey <br/>
              <span className="text-primary">Beyond The City</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Comfortable vehicles for outstation and intercity travel. Whether you are planning a family vacation, a long-distance road trip, or an intercity corporate journey, we ensure a smooth and safe experience.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Outstation Car Rental', 'Group Travel & Family Trips', 'Long-Distance Travel', 'Premium Vehicle Options'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Compass className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              onClick={() => window.open('https://wa.me/919603323998', '_blank')}
              size="lg" 
              className="h-14 px-8 text-base shadow-lg hover:shadow-xl transition-shadow"
            >
              Plan Your Journey
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
