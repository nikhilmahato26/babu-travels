import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    destination: '',
    vehicle: '',
    date: '',
    passengers: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let msg = `Hello Babu Tours & Travels, I have a new enquiry.\n\n`;
    msg += `*Name:* ${formData.name || 'Not specified'}\n`;
    msg += `*Phone:* ${formData.phone || 'Not specified'}\n`;
    if (formData.email) msg += `*Email:* ${formData.email}\n`;
    msg += `*Pickup:* ${formData.pickup || 'Not specified'}\n`;
    msg += `*Destination:* ${formData.destination || 'Not specified'}\n`;
    msg += `*Vehicle:* ${formData.vehicle || 'Not specified'}\n`;
    msg += `*Date:* ${formData.date || 'Not specified'}\n`;
    msg += `*Passengers:* ${formData.passengers || 'Not specified'}\n`;
    if (formData.message) msg += `*Message:* ${formData.message}\n`;

    const encodedMessage = encodeURIComponent(msg);
    window.open(`https://wa.me/919603323998?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Details */}
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Contact Us</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Book Cab & Taxi Service in Kadapa
            </h2>
            <p className="text-slate-600 text-lg mb-10">
              Need Airport taxi service Kadapa, Local taxi service Kadapa, or an outstation tour? Contact Babu Tours & Travels for fast, dependable booking.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Phone (24/7)</h4>
                  <p className="text-slate-600">9603323998</p>
                  <p className="text-slate-600">9866466497</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                  <p className="text-slate-600">9866466497b@gmail.com</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Office Location</h4>
                  <p className="text-slate-600">Professor Colony, Angadividi<br/>Kadapa, Andhra Pradesh - PIN: 516004</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send an Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Name</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Phone</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Email (Optional)</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Pickup Location</label>
                  <input type="text" name="pickup" value={formData.pickup} onChange={handleChange} className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Destination</label>
                  <input type="text" name="destination" value={formData.destination} onChange={handleChange} className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Vehicle</label>
                  <select name="vehicle" value={formData.vehicle} onChange={handleChange} className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
                    <option value="">Select</option>
                    <option value="Innova Crysta">Innova Crysta</option>
                    <option value="Tempo Traveller">Tempo Traveller</option>
                    <option value="Urbania">Urbania</option>
                    <option value="Mini Bus">Mini Bus</option>
                    <option value="Bus">Bus</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Date</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-slate-700">Passengers</label>
                  <input type="number" name="passengers" value={formData.passengers} onChange={handleChange} min="1" className="w-full h-11 px-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full p-4 rounded-lg bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"></textarea>
              </div>
              
              <Button type="submit" className="w-full h-12 text-base flex items-center justify-center gap-2" size="lg">
                <Send className="w-4 h-4" /> Send Enquiry
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
