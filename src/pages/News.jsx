import { FaCalendar, FaUser, FaInstagram, FaTwitter } from 'react-icons/fa';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Film 'Dila' Premieres to Critical Acclaim",
      date: "2024-01-15",
      author: "Entertainment Desk",
      excerpt: "Baba Dan Audu's latest film 'Dila' has received widespread praise from critics and audiences alike...",
      image: "/api/placeholder/400/250",
      category: "Film"
    },
    {
      id: 2,
      title: "Dan Audu Collection Expands Product Line",
      date: "2024-01-10",
      author: "Business Reporter",
      excerpt: "The popular shoe store introduces new premium collection for the upcoming season...",
      image: "/api/placeholder/400/250",
      category: "Business"
    },
    {
      id: 3,
      title: "Upcoming Stage Performance Announced",
      date: "2024-01-05",
      author: "Theater News",
      excerpt: "Baba Dan Audu to perform in special theatrical production celebrating Kannywood heritage...",
      image: "/api/placeholder/400/250",
      category: "Theater"
    },
    {
      id: 4,
      title: "Holiday Sale at Dan Audu Collection",
      date: "2023-12-20",
      author: "Store Update",
      excerpt: "Special discounts on selected footwear items throughout the holiday season...",
      image: "/api/placeholder/400/250",
      category: "Promotion"
    }
  ];

  const upcomingEvents = [
    {
      title: "Film Screening: 'Dila'",
      date: "2024-02-15",
      location: "Kano Cinema",
      type: "Film Event"
    },
    {
      title: "Store Anniversary Celebration",
      date: "2024-02-20",
      location: "Wambai Market",
      type: "Business Event"
    },
    {
      title: "Kannywood Awards Ceremony",
      date: "2024-03-10",
      location: "Abuja",
      type: "Awards"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">News & Media</h1>
          <p className="text-xl text-gray-600">Stay updated with the latest news and events</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main News Section */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">Latest News</h2>
            <div className="space-y-8">
              {newsItems.map((item) => (
                <article key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/3 h-48 md:h-auto bg-gray-200">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {item.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <FaCalendar className="mr-1" />
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <FaUser className="mr-1" />
                          {item.author}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 hover:text-blue-600 cursor-pointer">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      <button className="text-blue-600 hover:text-blue-800 font-semibold">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-semibold text-gray-800">{event.title}</h4>
                    <div className="text-sm text-gray-600 mt-1">
                      <p className="flex items-center">
                        <FaCalendar className="mr-2" />
                        {new Date(event.date).toLocaleDateString()}
                      </p>
                      <p className="mt-1">{event.location}</p>
                      <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mt-2">
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media Feed */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg">
                  <FaInstagram className="text-2xl" />
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-sm opacity-90">@babadanaudu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-500 text-white rounded-lg">
                  <FaTwitter className="text-2xl" />
                  <div>
                    <p className="font-semibold">Twitter/X</p>
                    <p className="text-sm opacity-90">@babadanaudu</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-4">
                Subscribe to get the latest news about films, events, and store updates.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Media Gallery Preview */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Recent Media</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={`/api/placeholder/300/300`} 
                  alt={`Media ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
              View Full Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;