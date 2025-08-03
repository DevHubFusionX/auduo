import { useState } from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaUser, FaFilm, FaStore } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'fan'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      type: 'fan'
    });
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch for bookings, business inquiries, or just to say hello</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Acting Bookings */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <FaFilm className="text-3xl text-red-500 mr-4" />
                <h2 className="text-2xl font-bold">Acting Bookings</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaUser className="text-gray-500" />
                  <div>
                    <p className="font-semibold">Manager Contact</p>
                    <p className="text-gray-600">John Doe Management</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-blue-500" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+234 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="text-green-500" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">bookings@babadanaudu.com</p>
                  </div>
                </div>
              </div>
              <button className="mt-6 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg transition-colors">
                Book for Acting Project
              </button>
            </div>

            {/* Business Enquiries */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <FaStore className="text-3xl text-green-500 mr-4" />
                <h2 className="text-2xl font-bold">Business Enquiries</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <FaMapMarkerAlt className="text-red-500" />
                  <div>
                    <p className="font-semibold">Store Location</p>
                    <p className="text-gray-600">Wambai Market Kano, Shop 10</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="text-blue-500" />
                  <div>
                    <p className="font-semibold">Store Phone</p>
                    <p className="text-gray-600">+234 XXX XXX XXXX</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaWhatsapp className="text-green-500" />
                  <div>
                    <p className="font-semibold">WhatsApp Orders</p>
                    <p className="text-gray-600">Quick ordering & inquiries</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2 transition-colors">
                  <FaWhatsapp />
                  <span>WhatsApp Business</span>
                </button>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition-colors">
                  Visit Store Location
                </button>
              </div>
            </div>

            {/* Store Hours */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Store Hours</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Monday - Saturday</span>
                  <span>8:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>10:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Public Holidays</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Message Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message Type
                </label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="fan">Fan Message</option>
                  <option value="acting">Acting Inquiry</option>
                  <option value="business">Business Inquiry</option>
                  <option value="media">Media/Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Brief subject of your message"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* Quick Contact Options */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold mb-4">Quick Contact</h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center space-x-2 bg-green-100 text-green-700 py-3 rounded-lg hover:bg-green-200 transition-colors">
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-blue-100 text-blue-700 py-3 rounded-lg hover:bg-blue-200 transition-colors">
                  <FaPhone />
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Find Our Store</h2>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <div className="text-center text-gray-600">
              <FaMapMarkerAlt className="text-4xl mx-auto mb-4" />
              <p className="text-lg font-semibold">Wambai Market Kano, Shop 10</p>
              <p>Interactive map would be embedded here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;