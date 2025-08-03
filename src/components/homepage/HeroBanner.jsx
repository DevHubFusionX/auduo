import { Link } from 'react-router-dom';
import { FaFilm, FaShoppingBag } from 'react-icons/fa';
import profileImage from '../../assets/profile/BG83Iinn_400x400.jpg';

const HeroBanner = () => {
  return (
    <section className="relative gradient-hero text-white py-24 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center md:text-left slide-in-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold heading-primary text-white mb-6 leading-tight">
              Baba Dan Audu
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-sand font-light">
              Actor • Entrepreneur • Icon
            </p>
            
            <div className="mb-12">
              <p className="text-lg md:text-xl leading-relaxed text-cream max-w-lg mx-auto md:mx-0">
                From humble beginnings to Kannywood stardom, now building business empires. 
                A journey of resilience, talent, and entrepreneurial excellence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                to="/portfolio"
                className="btn-primary px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center space-x-3 hover-lift shadow-warm"
              >
                <FaFilm className="text-xl" />
                <span>View Acting Portfolio</span>
              </Link>
              <Link 
                to="/store"
                className="btn-secondary px-8 py-4 rounded-xl text-lg font-semibold flex items-center justify-center space-x-3 hover-lift shadow-gold"
              >
                <FaShoppingBag className="text-xl" />
                <span>Shop Footwear</span>
              </Link>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-sand">
                <img 
                  src={profileImage} 
                  alt="Baba Dan Audu - Professional Portrait"
                  className="w-full h-full object-cover hover-scale"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-sand rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;