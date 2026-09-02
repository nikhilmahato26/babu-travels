import { ShieldCheck, Clock, ThumbsUp, Map } from 'lucide-react';

const features = [
  {
    icon: ThumbsUp,
    title: 'Comfortable Vehicles',
    description: 'Our fleet is well-maintained to ensure a smooth and comfortable ride.',
  },
  {
    icon: Clock,
    title: 'Reliable Service',
    description: 'Punctual and dependable transportation for all your travel needs.',
  },
  {
    icon: ShieldCheck,
    title: 'Professional Travel Solutions',
    description: 'Experienced drivers and a commitment to your safety and satisfaction.',
  },
  {
    icon: Map,
    title: 'Multiple Vehicle Options',
    description: 'From 4-seaters to large buses, we have the right vehicle for you.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.carrentaldelhi.biz/images/categories-photoes/volvo-9600-big@2x.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-2 block">Why Choose Babu Tours And Travels</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Premium Travel Experience <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Every Single Time
              </span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              We specialize in providing top-tier car rental, taxi services, and outstation travel solutions. Whether you need a premium Innova Crysta for a family trip or a large bus for group transportation, we deliver exceptional service.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{feature.title}</h4>
                    <p className="text-slate-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl transform rotate-3 scale-105 opacity-50 blur-lg" />
            <img 
              src="https://www.carrentaldelhi.biz/images/categories-photoes/volvo-9600-big@2x.jpg" 
              alt="Premium Car" 
              className="relative rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-2xl shadow-xl max-w-[200px] animate-bounce-slow hidden md:block">
              <div className="text-4xl font-black text-primary mb-1">Easy</div>
              <div className="font-semibold">Vehicle Selection & Booking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
