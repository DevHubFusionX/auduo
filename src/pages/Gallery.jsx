import { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('acting');
  const [selectedMedia, setSelectedMedia] = useState(null);

  const actingPhotos = [
    { id: 1, src: "/api/placeholder/400/400", title: "Behind the scenes - Dila", type: "photo" },
    { id: 2, src: "/api/placeholder/400/400", title: "On set with co-stars", type: "photo" },
    { id: 3, src: "/api/placeholder/400/400", title: "Character preparation", type: "photo" },
    { id: 4, src: "/api/placeholder/400/400", title: "Award ceremony", type: "photo" },
    { id: 5, src: "/api/placeholder/400/400", title: "TV series filming", type: "photo" },
    { id: 6, src: "/api/placeholder/400/400", title: "Press interview", type: "photo" },
    { id: 7, src: "/api/placeholder/400/400", title: "Movie premiere", type: "photo" },
    { id: 8, src: "/api/placeholder/400/400", title: "Costume fitting", type: "photo" }
  ];

  const businessPhotos = [
    { id: 9, src: "/api/placeholder/400/400", title: "Store opening day", type: "photo" },
    { id: 10, src: "/api/placeholder/400/400", title: "New collection launch", type: "photo" },
    { id: 11, src: "/api/placeholder/400/400", title: "Customer service", type: "photo" },
    { id: 12, src: "/api/placeholder/400/400", title: "Product showcase", type: "photo" },
    { id: 13, src: "/api/placeholder/400/400", title: "Store interior", type: "photo" },
    { id: 14, src: "/api/placeholder/400/400", title: "Team meeting", type: "photo" },
    { id: 15, src: "/api/placeholder/400/400", title: "Quality inspection", type: "photo" },
    { id: 16, src: "/api/placeholder/400/400", title: "Happy customers", type: "photo" }
  ];

  const videos = [
    { id: 17, src: "/api/placeholder/400/300", title: "Dila Movie Trailer", type: "video", duration: "2:30" },
    { id: 18, src: "/api/placeholder/400/300", title: "Behind the Scenes", type: "video", duration: "5:45" },
    { id: 19, src: "/api/placeholder/400/300", title: "Store Tour", type: "video", duration: "3:20" },
    { id: 20, src: "/api/placeholder/400/300", title: "Interview Highlights", type: "video", duration: "8:15" },
    { id: 21, src: "/api/placeholder/400/300", title: "Acting Workshop", type: "video", duration: "12:30" },
    { id: 22, src: "/api/placeholder/400/300", title: "Product Advertisement", type: "video", duration: "1:45" }
  ];

  const getCurrentMedia = () => {
    switch (activeTab) {
      case 'acting':
        return actingPhotos;
      case 'business':
        return businessPhotos;
      case 'videos':
        return videos;
      default:
        return actingPhotos;
    }
  };

  const openModal = (media) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-gray-600">A visual journey through acting and business</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('acting')}
              className={`px-6 py-3 rounded-md transition-colors ${
                activeTab === 'acting' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              📸 Acting Photos
            </button>
            <button
              onClick={() => setActiveTab('business')}
              className={`px-6 py-3 rounded-md transition-colors ${
                activeTab === 'business' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              🏪 Business Photos
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`px-6 py-3 rounded-md transition-colors ${
                activeTab === 'videos' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              🎥 Videos
            </button>
          </div>
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {getCurrentMedia().map((media) => (
            <div 
              key={media.id} 
              className="relative group cursor-pointer bg-gray-200 rounded-lg overflow-hidden aspect-square"
              onClick={() => openModal(media)}
            >
              <img 
                src={media.src} 
                alt={media.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                  {media.type === 'video' ? (
                    <div>
                      <FaPlay className="text-4xl mx-auto mb-2" />
                      <p className="text-sm">{media.duration}</p>
                    </div>
                  ) : (
                    <div className="text-2xl">🔍</div>
                  )}
                </div>
              </div>

              {/* Video Duration Badge */}
              {media.type === 'video' && (
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs">
                  {media.duration}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Acting Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">30+</div>
              <div className="text-gray-600">Business Photos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
              <div className="text-gray-600">Videos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
              <div className="text-gray-600">Total Media</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300"
            >
              <FaTimes />
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              {selectedMedia.type === 'video' ? (
                <div className="relative">
                  <img 
                    src={selectedMedia.src} 
                    alt={selectedMedia.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaPlay className="text-6xl text-white opacity-80" />
                  </div>
                </div>
              ) : (
                <img 
                  src={selectedMedia.src} 
                  alt={selectedMedia.title}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              )}
              
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-800">{selectedMedia.title}</h3>
                {selectedMedia.type === 'video' && (
                  <p className="text-gray-600 mt-2">Duration: {selectedMedia.duration}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;