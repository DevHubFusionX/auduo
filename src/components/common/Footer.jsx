import { FaPhone, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-earth text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 heading-primary text-white">Baba Dan Audu</h3>
            <p className="text-sand text-lg leading-relaxed">
              Actor, Entrepreneur, and Icon. From Kannywood to business success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <div className="space-y-3">
              <a href="/portfolio" className="block text-sand hover:text-white transition-colors text-lg">Acting Portfolio</a>
              <a href="/store" className="block text-sand hover:text-white transition-colors text-lg">Dan Audu Collection</a>
              <a href="/contact" className="block text-sand hover:text-white transition-colors text-lg">Contact</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-gold" />
                <span className="text-sand text-lg">+234 XXX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-green-400" />
                <span className="text-sand text-lg">WhatsApp Orders</span>
              </div>
              <p className="text-sand text-lg">📍 Wambai Market Kano, Shop 10</p>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-brown mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-6 md:mb-0">
            <FaInstagram className="text-3xl text-sand hover:text-white cursor-pointer transition-colors" />
            <FaTwitter className="text-3xl text-sand hover:text-white cursor-pointer transition-colors" />
            <FaWhatsapp className="text-3xl text-sand hover:text-green-400 cursor-pointer transition-colors" />
          </div>
          <p className="text-sand text-lg">
            © 2024 Baba Dan Audu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;