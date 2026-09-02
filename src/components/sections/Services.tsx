import { 
  Car, 
  Map, 
  MapPin, 
  BusFront, 
  Bus,
  Plane
} from 'lucide-react';

const services = [
  {
    title: 'Airport Taxi Service Kadapa',
    description: 'On-time airport taxi pickup & drop for Kadapa Airport, Tirupati, Bangalore, and Chennai airports.',
    icon: Plane,
  },
  {
    title: 'Local Taxi Service Kadapa',
    description: 'Comfortable hourly and full-day local taxi service across Kadapa city and nearby attractions.',
    icon: MapPin,
  },
  {
    title: 'Cab Service Kadapa',
    description: '24/7 reliable and safe cab booking in Kadapa with experienced, courteous chauffeurs.',
    icon: Car,
  },
  {
    title: 'Outstation Cab Rental',
    description: 'Seamless intercity and outstation cab booking from Kadapa to any destination across India.',
    icon: Map,
  },
  {
    title: 'Innova Crysta Rental',
    description: 'Premium and spacious 7-seater luxury SUV option for family and corporate travel.',
    icon: Car,
  },
  {
    title: 'Tempo Traveller (12S)',
    description: 'Spacious 12-seater AC vehicle ideal for family pilgrimages, group tours, and events.',
    icon: BusFront,
  },
  {
    title: 'Force Urbania (16S)',
    description: 'Ultra-comfortable 16-seater luxury van with modern reclining seats and ample legroom.',
    icon: BusFront,
  },
  {
    title: 'Bus & Mini Bus Rental',
    description: '22S, 27S, and luxury large bus transportation solutions for weddings, school, and corporate trips.',
    icon: Bus,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-[60%] -left-[10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Services in Kadapa</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Taxi & Cab Services in Kadapa</h2>
          <p className="text-slate-600 text-lg">
            From local city rides and airport transfers to outstation tours, we provide trusted transportation across Kadapa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300" />
              
              <div className="w-12 h-12 bg-slate-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
