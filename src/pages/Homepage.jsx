import HeroBanner from '../components/homepage/HeroBanner';
import MediaGallery from '../components/homepage/MediaGallery';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

// Import product images
import product1 from '../assets/products-image/GxaOP-yXYAAvXBQ.jpg';
import product2 from '../assets/products-image/GxaOP7qXUAAEscV.jpg';
import product3 from '../assets/products-image/GxaOQQtWYAAxf3f.jpg';

const Homepage = () => {
  return (
    <div>
      <HeroBanner />
      
      {/* Quick Biography Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="fade-in">
              <h2 className="text-4xl md:text-5xl font-bold heading-secondary mb-8">The Journey</h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-brown leading-relaxed">
                  From humble beginnings as an Almajiri to becoming one of Kannywood's most 
                  recognizable faces, Baba Dan Audu's story is one of determination and talent.
                </p>
                <p className="text-lg md:text-xl text-brown leading-relaxed">
                  Now, he's channeling that same energy into building the Dan Audu Collection, 
                  bringing quality footwear to Kano and beyond.
                </p>
              </div>
            </div>
            <div className="fade-in">
              <div className="bg-sand h-80 rounded-2xl overflow-hidden shadow-warm hover-lift">
                <img 
                  src="/api/placeholder/500/400" 
                  alt="Baba Dan Audu Acting Journey"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dan Audu Collection Section */}
      <section className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold heading-secondary mb-6">Dan Audu Collection</h2>
            <p className="text-xl text-brown max-w-2xl mx-auto">Premium footwear crafted with quality and style</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-warm overflow-hidden hover-lift">
              <div className="h-48 bg-sand">
                <img src={product1} alt="Classic Leather Shoes" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold heading-secondary mb-2">Classic Leather</h4>
                <p className="text-brown mb-3">Elegant formal shoes</p>
                <span className="text-2xl font-bold text-earth">₦25,000</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-warm overflow-hidden hover-lift">
              <div className="h-48 bg-sand">
                <img src={product2} alt="Premium Sneakers" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold heading-secondary mb-2">Premium Sneakers</h4>
                <p className="text-brown mb-3">Comfortable everyday wear</p>
                <span className="text-2xl font-bold text-earth">₦18,000</span>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-warm overflow-hidden hover-lift">
              <div className="h-48 bg-sand">
                <img src={product3} alt="Business Loafers" className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold heading-secondary mb-2">Business Loafers</h4>
                <p className="text-brown mb-3">Professional style</p>
                <span className="text-2xl font-bold text-earth">₦22,000</span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/store" className="btn-primary px-8 py-4 rounded-xl font-semibold hover-lift">
                Shop Collection
              </Link>
              <a href="#" className="btn-secondary px-8 py-4 rounded-xl font-semibold hover-lift flex items-center justify-center space-x-2">
                <span>📱 WhatsApp Order</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <MediaGallery />
    </div>
  );
};

export default Homepage;