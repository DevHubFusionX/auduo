import { useState } from 'react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('featured');

  const featuredRoles = [
    {
      title: "Dila",
      year: "2024",
      role: "Lead Actor",
      description: "His most acclaimed performance showcasing emotional depth and versatility.",
      image: "/api/placeholder/300/400"
    },
    {
      title: "Baba Dan Audu",
      year: "2023",
      role: "Title Character",
      description: "A biographical drama that mirrors his own life journey.",
      image: "/api/placeholder/300/400"
    }
  ];

  const tvSeries = [
    {
      title: "Labarina",
      years: "2020-2022",
      role: "Main Character",
      description: "Popular TV series that ran for multiple seasons.",
      image: "/api/placeholder/300/200"
    },
    {
      title: "Komai Tsawon Dare",
      years: "2019-2021",
      role: "Supporting Actor",
      description: "Long-running series showcasing his range as an actor.",
      image: "/api/placeholder/300/200"
    }
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Acting Portfolio</h1>
          <p className="text-xl text-gray-600">A showcase of cinematic excellence</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'featured' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Featured Films
            </button>
            <button
              onClick={() => setActiveTab('tv')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'tv' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              TV Series
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === 'gallery' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Photo Gallery
            </button>
          </div>
        </div>

        {/* Featured Films */}
        {activeTab === 'featured' && (
          <div className="grid md:grid-cols-2 gap-8">
            {featuredRoles.map((film, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200">
                  <img 
                    src={film.image} 
                    alt={film.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold">{film.title}</h3>
                    <span className="text-gray-500">{film.year}</span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-3">{film.role}</p>
                  <p className="text-gray-600">{film.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TV Series */}
        {activeTab === 'tv' && (
          <div className="space-y-8">
            {tvSeries.map((series, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 h-48 md:h-auto bg-gray-200">
                    <img 
                      src={series.image} 
                      alt={series.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold">{series.title}</h3>
                      <span className="text-gray-500">{series.years}</span>
                    </div>
                    <p className="text-blue-600 font-semibold mb-3">{series.role}</p>
                    <p className="text-gray-600">{series.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Photo Gallery */}
        {activeTab === 'gallery' && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(12)].map((_, index) => (
              <div key={index} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src={`/api/placeholder/300/300`} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                />
              </div>
            ))}
          </div>
        )}

        {/* Press Mentions */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Press & Reviews</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 italic mb-4">
                "Baba Dan Audu brings an authenticity to his roles that few actors can match. 
                His performance in 'Dila' is nothing short of extraordinary."
              </p>
              <cite className="text-blue-600 font-semibold">- Kannywood Review</cite>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow">
              <p className="text-gray-700 italic mb-4">
                "From his humble beginnings to becoming a household name, Baba Dan Audu 
                represents the best of Kannywood talent."
              </p>
              <cite className="text-blue-600 font-semibold">- Entertainment Weekly Nigeria</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;