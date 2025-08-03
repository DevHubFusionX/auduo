import { Link } from 'react-router-dom';
import product1 from '../../assets/products-image/GxaOP-yXYAAvXBQ.jpg';
import product2 from '../../assets/products-image/GxaOP7qXUAAEscV.jpg';
import product3 from '../../assets/products-image/GxaOQQtWYAAxf3f.jpg';
import product4 from '../../assets/products-image/GxaOUgjXQAAIUZy.jpg';

const MediaGallery = () => {
  const galleryItems = [
    { id: 1, src: product1, title: "Premium Collection" },
    { id: 2, src: product2, title: "Casual Wear" },
    { id: 3, src: product3, title: "Business Style" },
    { id: 4, src: product4, title: "Athletic Line" }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold heading-secondary mb-6">Media Gallery</h2>
          <p className="text-xl text-brown max-w-2xl mx-auto">A glimpse into our world of quality footwear and entertainment</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {galleryItems.map((item) => (
            <div key={item.id} className="relative group">
              <div className="aspect-square bg-sand rounded-2xl overflow-hidden shadow-warm hover-lift">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 rounded-2xl flex items-center justify-center">
                <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/gallery" 
            className="btn-primary px-8 py-4 rounded-xl font-semibold hover-lift"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MediaGallery;