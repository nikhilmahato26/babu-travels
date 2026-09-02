import { useState } from 'react';
import { MapPin, Calendar, CarFront } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function HeroBookingForm() {
  const [activeTab, setActiveTab] = useState<'outstation' | 'local' | 'airport'>('outstation');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  const [vehicle, setVehicle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let tripType = activeTab === 'outstation' ? 'Outstation Cab' : activeTab === 'local' ? 'Local Taxi Service Kadapa' : 'Airport Taxi Service Kadapa';
    let message = `Hello Babu Tours & Travels, I would like to get a quote for *${tripType}*.\n\n`;
    message += `*Pickup:* ${pickup || 'Kadapa'}\n`;
    if (activeTab === 'outstation' || activeTab === 'airport') {
      message += `*Destination / Airport:* ${destination || 'Not specified'}\n`;
    }
    message += `*Date:* ${date || 'Not specified'}\n`;
    message += `*Vehicle:* ${vehicle || 'Not specified'}\n`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919603323998?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 w-full max-w-5xl mx-auto -mt-16 md:-mt-24 relative z-20 border border-slate-100">
      <div className="flex flex-wrap items-center gap-4 mb-6 border-b border-slate-100 pb-4">
        <button
          onClick={() => setActiveTab('outstation')}
          className={cn(
            "text-sm md:text-base font-semibold transition-colors pb-4 -mb-4 border-b-2",
            activeTab === 'outstation' ? "text-primary border-primary" : "text-slate-500 border-transparent hover:text-slate-800"
          )}
        >
          Outstation Cabs
        </button>
        <button
          onClick={() => setActiveTab('local')}
          className={cn(
            "text-sm md:text-base font-semibold transition-colors pb-4 -mb-4 border-b-2",
            activeTab === 'local' ? "text-primary border-primary" : "text-slate-500 border-transparent hover:text-slate-800"
          )}
        >
          Local Taxi Kadapa
        </button>
        <button
          onClick={() => setActiveTab('airport')}
          className={cn(
            "text-sm md:text-base font-semibold transition-colors pb-4 -mb-4 border-b-2",
            activeTab === 'airport' ? "text-primary border-primary" : "text-slate-500 border-transparent hover:text-slate-800"
          )}
        >
          Airport Taxi Kadapa
        </button>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        <div className="flex flex-col gap-1.5 lg:col-span-1">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pickup</label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="City or Address"
              className="w-full h-11 pl-9 pr-4 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>
        
        {activeTab !== 'local' && (
          <div className="flex flex-col gap-1.5 lg:col-span-1">
            <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
              {activeTab === 'airport' ? 'Airport / Destination' : 'Destination'}
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder={activeTab === 'airport' ? 'e.g. Kadapa / Tirupati / BLR' : 'City or Address'}
                className="w-full h-11 pl-9 pr-4 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
          </div>
        )}

        <div className="flex flex-col gap-1.5 lg:col-span-1">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="date" 
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full h-11 pl-9 pr-4 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5 lg:col-span-1">
          <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Vehicle</label>
          <div className="relative">
            <CarFront className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <select 
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="w-full h-11 pl-9 pr-4 rounded-lg bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none"
            >
              <option value="">Select Type</option>
              <option value="Innova Crysta">Innova Crysta</option>
              <option value="Tempo Traveller (12S)">Tempo Traveller (12S)</option>
              <option value="Urbania (16S)">Urbania (16S)</option>
              <option value="Mini Bus (22S-27S)">Mini Bus (22S-27S)</option>
              <option value="Bus">Bus</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col gap-1.5 lg:col-span-1">
          <Button type="submit" size="lg" className="w-full h-11 shadow-md hover:shadow-lg transition-shadow">
            Get a Quote
          </Button>
        </div>
      </form>
    </div>
  );
}
