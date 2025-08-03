import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaStar } from 'react-icons/fa';

// Import product images
import product1 from '../assets/products-image/GxaOP-yXYAAvXBQ.jpg';
import product2 from '../assets/products-image/GxaOP7qXUAAEscV.jpg';
import product3 from '../assets/products-image/GxaOQQtWYAAxf3f.jpg';
import product4 from '../assets/products-image/GxaOUgjXQAAIUZy.jpg';
import product5 from '../assets/products-image/GxaOUj7WIAADwdG.jpg';
import product6 from '../assets/products-image/GxaOUvBXMAALyfz.jpg';

const Store = () => {
  const products = [
    {
      id: 1,
      name: "Classic Leather Shoes",
      category: "Men's Formal",
      price: "₦25,000",
      image: product1
    },
    {
      id: 2,
      name: "Premium Sneakers",
      category: "Men's Casual",
      price: "₦18,000",
      image: product2
    },
    {
      id: 3,
      name: "Business Loafers",
      category: "Men's Formal",
      price: "₦22,000",
      image: product3
    },
    {
      id: 4,
      name: "Sport Shoes",
      category: "Men's Athletic",
      price: "₦20,000",
      image: product4
    },
    {
      id: 5,
      name: "Casual Footwear",
      category: "Men's Casual",
      price: "₦15,000",
      image: product5
    },
    {
      id: 6,
      name: "Premium Collection",
      category: "Men's Premium",
      price: "₦30,000",
      image: product6
    }
  ];

  const testimonials = [
    {
      name: "Musa Ibrahim",
      text: "Quality shoes at great prices. Baba Dan Audu's collection is top-notch!",
      rating: 5
    },
    {
      name: "Fatima Aliyu",
      text: "Bought shoes for my husband. Excellent quality and fast service.",
      rating: 5
    },
    {
      name: "Ahmed Sani",
      text: "Best shoe shop in Wambai Market. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Dan Audu Collection</h1>
          <p className="text-xl text-gray-600">Premium Footwear for Every Occasion</p>
        </div>

        {/* About the Brand */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="fade-in">
            <h2 className="text-4xl font-bold heading-secondary mb-8">About Our Brand</h2>
            <div className="space-y-6 text-brown text-lg leading-relaxed">
              <p>
                Dan Audu Collection represents quality, style, and affordability. 
                Founded by the renowned actor Baba Dan Audu, our shoe collection 
                brings together traditional craftsmanship with modern design.
              </p>
              <p>
                Located in the heart of Wambai Market Kano, we serve customers 
                who appreciate quality footwear that doesn't compromise on comfort or style.
              </p>
              <div className="bg-cream p-6 rounded-xl">
                <p className="font-semibold text-earth text-xl">
                  Our Values: Quality • Affordability • Customer Satisfaction
                </p>
              </div>
            </div>
          </div>
          <div className="fade-in">
            <div className="bg-sand h-80 rounded-2xl overflow-hidden shadow-warm hover-lift">
              <img 
                src={product1} 
                alt="Dan Audu Collection Store"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Product Gallery */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-warm overflow-hidden hover-lift">
                <div className="h-64 bg-sand">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover-scale"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold heading-secondary mb-2">{product.name}</h3>
                  <p className="text-brown mb-4">{product.category}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-earth">{product.price}</span>
                    <button className="btn-primary px-4 py-2 rounded-lg font-semibold">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Shop Information */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Visit Our Store</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600">Wambai Market Kano, Shop 10</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-500 text-xl" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600">+234 XXX XXX XXXX</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-green-500 text-xl" />
                <div>
                  <p className="font-semibold">WhatsApp Orders</p>
                  <p className="text-gray-600">Quick and easy ordering</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                <FaWhatsapp />
                <span>Order via WhatsApp</span>
              </button>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                <FaPhone />
                <span>Call to Order</span>
              </button>
            </div>
          </div>

          {/* Store Hours & Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Store Information</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Opening Hours</h4>
                <div className="text-gray-600 space-y-1">
                  <p>Monday - Saturday: 8:00 AM - 7:00 PM</p>
                  <p>Sunday: 10:00 AM - 5:00 PM</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Services</h4>
                <div className="text-gray-600 space-y-1">
                  <p>• Wide selection of men's footwear</p>
                  <p>• Quality guarantee on all products</p>
                  <p>• Competitive pricing</p>
                  <p>• Expert fitting advice</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Payment Methods</h4>
                <div className="text-gray-600 space-y-1">
                  <p>• Cash</p>
                  <p>• Bank Transfer</p>
                  <p>• Mobile Money</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-blue-600">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;