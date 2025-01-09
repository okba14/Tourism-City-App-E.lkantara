import React from 'react';
import { MapPin } from 'lucide-react';

const attractions = [
  {
    title: "The Roman Bridge",
    description: "Ancient bridge showcasing remarkable Roman engineering",
    image: "https://i.ytimg.com/vi/F_y1gWSli9k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAD_SvJr8guaOZQkaqw_onozB6Qcg",
    location: "City Center"
  },
  {
    title: "El Kantara Gorge",
    description: "Spectacular natural formation cutting through the Atlas Mountains",
    image: "https://i.dzs.cloud/www.echoroukonline.com/wp-content/uploads/2021/03/biskra-2.jpg?resize=360,202.5",
    location: "North of City"
  },
  {
    title: "Historic Oasis",
    description: "Traditional palm grove with ancient irrigation systems",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjo81KQNmLtaRkXVnB0soUZ_vQf2vU4AUFCw&s",
    location: "South District"
  }
];

export default function Attractions() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Discover El Kantara's Attractions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our city's most remarkable landmarks and natural wonders
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {attractions.map((attraction, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${attraction.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {attraction.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {attraction.description}
                </p>
                <div className="flex items-center text-gray-500">
                  <MapPin size={18} className="mr-2" />
                  <span>{attraction.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}