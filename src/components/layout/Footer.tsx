export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.jpg" 
                alt="Babu Tours And Travels Logo" 
                className="w-12 h-12 object-contain rounded-xl shadow-md bg-white p-1"
              />
              <div className="flex flex-col">
                <span className="text-2xl font-bold leading-none tracking-tight text-white">
                  Babu Tours
                </span>
                <span className="text-xs font-medium tracking-widest uppercase text-secondary">
                  And Travels
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Car Rental • Taxi Service • Outstation Travel • Group Transportation
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'Fleet', 'Outstation', 'About', 'Contact'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-sm hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Vehicles & Services */}
          <div>
            <h4 className="text-white font-semibold mb-6">Vehicles</h4>
            <ul className="space-y-3 mb-8">
              {['Innova Crysta', 'Tempo Traveller', 'Urbania', 'Mini Bus', 'Bus'].map(vehicle => (
                <li key={vehicle}>
                  <a href="#fleet" className="text-sm hover:text-primary transition-colors">
                    {vehicle}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {['Car Rental', 'Taxi Service', 'Outstation Rental', 'Group Transportation'].map(service => (
                <li key={service}>
                  <a href="#services" className="text-sm hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="text-sm">9603323998</li>
              <li className="text-sm">9866466497</li>
              <li className="text-sm">9866466497b@gmail.com</li>
              <li className="text-sm mt-4 text-slate-400">
                Professor Colony, Angadividi<br/>
                PIN 516004
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Babu Tours And Travels. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
