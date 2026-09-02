export function Gallery() {
  const images = [
    { src: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80', alt: 'Premium SUV', className: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80', alt: 'Tempo Traveller', className: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&q=80', alt: 'Premium Bus', className: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80', alt: 'Scenic Journey', className: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&q=80', alt: 'Road Travel', className: 'col-span-1 row-span-1' },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Travel In Style</h2>
          <p className="text-slate-600 text-lg">
            Glimpses of our premium fleet and memorable journeys.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px] md:auto-rows-[250px]">
          {images.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-2xl group ${img.className}`}
            >
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
