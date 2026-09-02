import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VehicleCard, type VehicleProps } from '@/components/ui/VehicleCard';
import { cn } from '@/lib/utils';

const fleetData: VehicleProps[] = [
  {
    name: 'Innova Crysta',
    category: 'Premium Cars',
    description: 'Premium spacious vehicle suitable for family and group travel.',
    image: 'https://auto.hindustantimes.com/cms-images/toyota_innovacrysta/images/exterior_toyata-innova-crysta_front-left-side_1160x642.jpeg?imwidth=420',
    features: ['AC', 'Comfortable Seating', 'Luggage Space']
  },
  {
    name: 'Tempo Traveller',
    category: 'Tempo Traveller',
    capacity: '12 Seater',
    description: 'Ideal for family trips, group tours and outstation travel.',
    image: 'https://www.pawarcarrentals.com/uploads/page-images/1688817927_23)%20Tempo%20Traveller%2017%20Seater%20on%20Rent%20in%20Pune.jpg',
    features: ['AC', 'Pushback Seats', 'Music System']
  },
  {
    name: 'Urbania',
    category: 'Urbania',
    capacity: '16 Seater',
    description: 'Premium group transportation for comfortable journeys.',
    image: 'https://www.team-bhp.com/sites/default/files/styles/check_high_res/public/URBANIA.jpg',
    features: ['Premium Interiors', 'AC', 'Extra Legroom']
  },
  {
    name: 'Mini Bus',
    category: 'Mini Bus',
    capacity: '22 Seater / 27 Seater',
    description: 'Suitable for larger groups and organized travel.',
    image: 'https://content.jdmagicbox.com/v2/comp/malappuram/d1/9999px483.x483.260530083105.l3d1/catalogue/s-and-t-holidays-manjeri-malappuram-travel-agents-x7ilxplroc-250.jpg',
    features: ['AC/Non-AC', 'Spacious', 'Comfortable']
  },
  {
    name: 'Luxury Bus',
    category: 'Bus',
    description: 'Suitable for larger group transportation requirements.',
    image: 'https://www.carrentaldelhi.biz/images/categories-photoes/volvo-9600-big@2x.jpg',
    features: ['Long Distance', 'Entertainment', 'Reclining Seats']
  }
];

const categories = ['All', 'Premium Cars', 'Tempo Traveller', 'Urbania', 'Mini Bus', 'Bus'];

export function Fleet() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredFleet = fleetData.filter(vehicle => 
    activeCategory === 'All' || vehicle.category === activeCategory
  );

  return (
    <section id="fleet" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Fleet</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Choose The Vehicle That Suits You</h2>
            <p className="text-slate-600 text-lg">
              From premium cars to large buses, we have the perfect vehicle for every journey.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category 
                    ? "bg-primary text-white shadow-md shadow-primary/25" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredFleet.map((vehicle) => (
              <motion.div
                key={vehicle.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <VehicleCard vehicle={vehicle} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
