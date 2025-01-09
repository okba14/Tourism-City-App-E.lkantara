import React from 'react';
import { Star, MapPin, Phone } from 'lucide-react';

const hotels = [
  {
    name: "El Kantara Palace Hotel",
    description: "Luxury hotel with traditional architecture and modern amenities",
    image: "https://i.ytimg.com/vi/F_y1gWSli9k/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAD_SvJr8guaOZQkaqw_onozB6Qcg",
    rating: 5,
    location: "City Center",
    contact: "+213 671.36.04.38"
  },
  {
    name: "Oasis View Resort",
    description: "Peaceful retreat overlooking the palm groves",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEE-Fa3L5k0rKb-NL2nud1t1PUyXin4QAZDw&s",
    rating: 4,
    location: "Palm Grove District",
    contact: "+213 671.36.04.38"
  },
  {
    name: "Atlas Mountain Lodge",
    description: "Cozy mountain lodge with spectacular views",
    image: "https://sportnews.dz/wp-content/uploads/2024/01/kantra0801.jpg",
    rating: 4,
    location: "Mountain Area",
    contact: "+213 671.36.04.38"
  }
];

export default function Accommodation() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Where to Stay
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find your perfect accommodation in El Kantara
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {hotels.map((hotel, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${hotel.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {hotel.name}
                </h3>
                <div className="flex items-center mb-2">
                  {[...Array(hotel.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  {hotel.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <MapPin size={18} className="mr-2" />
                    <span>{hotel.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Phone size={18} className="mr-2" />
                    <span>{hotel.contact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}