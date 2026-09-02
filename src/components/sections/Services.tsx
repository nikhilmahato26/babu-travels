import { 
  Car, 
  Map, 
  MapPin, 
  BusFront, 
  Bus 
} from 'lucide-react';

const services = [
  {
    title: 'Car Rental',
    description: 'Convenient vehicle rental for personal and travel requirements.',
    icon: Car,
  },
  {
    title: 'Taxi Service',
    description: 'Comfortable taxi solutions for local and long-distance journeys.',
    icon: MapPin,
  },
  {
    title: 'Outstation Car Rental',
    description: 'Reliable vehicles for intercity and outstation travel.',
    icon: Map,
  },
  {
    title: 'Innova Crysta Rental',
    description: 'Premium and spacious vehicle option for comfortable travel.',
    icon: Car,
  },
  {
    title: 'Tempo Traveller',
    description: '12-seater vehicle suitable for families and groups.',
    icon: BusFront,
  },
  {
    title: 'Urbania Rental',
    description: '16-seater premium group transportation.',
    icon: BusFront,
  },
  {
    title: 'Mini Bus Rental',
    description: '22-seater and 27-seater options for larger groups.',
    icon: Bus,
  },
  {
    title: 'Bus Rental',
    description: 'Group transportation solutions for larger journeys and events.',
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
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Travel Solutions</h2>
          <p className="text-slate-600 text-lg">
            We provide a wide range of reliable and comfortable transportation options tailored to your needs.
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
