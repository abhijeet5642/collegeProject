import React from 'react';
import { Box, Move3d, Info, ArrowRight } from 'lucide-react';

const Library3D = () => {
  // Demo Data for 3D Models
  const plants = [
    {
      id: 1,
      name: "Tulsi (Holy Basil)",
      scientificName: "Ocimum tenuiflorum",
      description: "Revered as the 'Queen of Herbs', Tulsi promotes longevity and relieves stress.",
      category: "Stress Reliever",
      image: "https://images.unsplash.com/photo-1629198728271-e37456d9595f?auto=format&fit=crop&q=80&w=600",
      modelAvailable: true
    },
    {
      id: 2,
      name: "Aloe Vera",
      scientificName: "Aloe barbadensis miller",
      description: "Known for its soothing gel, widely used for skin healing and digestive health.",
      category: "Skin Care",
      image: "https://images.unsplash.com/photo-1616422894389-c45f94943714?auto=format&fit=crop&q=80&w=600",
      modelAvailable: true
    },
    {
      id: 3,
      name: "Neem",
      scientificName: "Azadirachta indica",
      description: "A powerful blood purifier and detoxifier with potent antibacterial properties.",
      category: "Immunity",
      image: "https://images.unsplash.com/photo-1596541604983-6d9b9a527063?auto=format&fit=crop&q=80&w=600",
      modelAvailable: true
    },
    {
      id: 4,
      name: "Ashwagandha",
      scientificName: "Withania somnifera",
      description: "An ancient medicinal herb that reduces blood sugar levels and fights depression.",
      category: "Vitality",
      image: "https://images.unsplash.com/photo-1615485925763-867862f92b76?auto=format&fit=crop&q=80&w=600",
      modelAvailable: false // Example of coming soon
    },
    {
      id: 5,
      name: "Mint (Pudina)",
      scientificName: "Mentha",
      description: "Popular aromatic herb known for cooling sensation and digestive benefits.",
      category: "Digestion",
      image: "https://images.unsplash.com/photo-1628556270448-9866878bce00?auto=format&fit=crop&q=80&w=600",
      modelAvailable: true
    },
    {
      id: 6,
      name: "Turmeric",
      scientificName: "Curcuma longa",
      description: "Contains curcumin, a substance with powerful anti-inflammatory and antioxidant properties.",
      category: "Anti-inflammatory",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=600",
      modelAvailable: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <div className="inline-block p-4 rounded-full bg-green-100 mb-4 shadow-sm">
          <Box className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-4">
          Interactive 3D Herbal Library
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore medicinal plants from every angle. Rotate, zoom, and discover the anatomy of nature's healers.
        </p>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plants.map((plant) => (
          <div 
            key={plant.id} 
            className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-green-50 group transform hover:-translate-y-2"
          >
            {/* Image / 3D Preview Area */}
            <div className="relative h-64 overflow-hidden bg-gray-100">
              <img 
                src={plant.image} 
                alt={plant.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay Badge */}
              <div className="absolute top-4 right-4">
                {plant.modelAvailable ? (
                  <span className="bg-white/90 backdrop-blur text-green-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                    <Move3d className="w-3 h-3" />
                    3D View
                  </span>
                ) : (
                  <span className="bg-gray-800/80 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    Coming Soon
                  </span>
                )}
              </div>
              
              {/* Category Badge */}
              <div className="absolute bottom-4 left-4">
                <span className="bg-green-600/90 backdrop-blur text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {plant.category}
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{plant.name}</h3>
                <p className="text-sm text-green-600 italic font-medium">{plant.scientificName}</p>
              </div>
              
              <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                {plant.description}
              </p>

              <div className="flex gap-3">
                {plant.modelAvailable ? (
                  <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-green-200 hover:scale-105 transition-all flex items-center justify-center gap-2">
                    <Move3d className="w-5 h-5" />
                    Explore 3D
                  </button>
                ) : (
                  <button disabled className="flex-1 bg-gray-100 text-gray-400 py-3 rounded-xl font-semibold cursor-not-allowed border border-gray-200">
                    Model Pending
                  </button>
                )}
                
                <button className="p-3 bg-green-50 text-green-700 rounded-xl hover:bg-green-100 transition-colors border border-green-100">
                  <Info className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library3D;