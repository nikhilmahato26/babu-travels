import { Users, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface VehicleProps {
  name: string;
  category: string;
  capacity?: string;
  description: string;
  image: string;
  features?: string[];
}

export function VehicleCard({ vehicle }: { vehicle: VehicleProps }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full">
      <div className="relative h-64 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img 
          src={vehicle.image} 
          alt={vehicle.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary z-20 shadow-sm">
          {vehicle.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-1">{vehicle.name}</h3>
          {vehicle.capacity && (
            <div className="flex items-center gap-1.5 text-secondary font-medium text-sm">
              <Users className="w-4 h-4" />
              <span>{vehicle.capacity}</span>
            </div>
          )}
        </div>
        
        <p className="text-slate-600 text-sm mb-6 flex-grow">
          {vehicle.description}
        </p>

        {vehicle.features && (
          <div className="grid grid-cols-2 gap-2 mb-6">
            {vehicle.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-auto pt-4 border-t border-slate-100">
          <Button 
            onClick={() => {
              const msg = encodeURIComponent(`Hello Babu Tours And Travels, I am interested in enquiring about the ${vehicle.name}.`);
              window.open(`https://wa.me/919603323998?text=${msg}`, '_blank');
            }}
            className="w-full shadow-sm hover:shadow-md transition-shadow group-hover:bg-primary/90"
          >
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
}
