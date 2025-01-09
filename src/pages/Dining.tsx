import React from 'react';
import { Clock, MapPin, Phone } from 'lucide-react';

const restaurants = [
  {
    name: "Traditional Oasis Restaurant",
    description: "Authentic local cuisine in a traditional setting",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEE-Fa3L5k0rKb-NL2nud1t1PUyXin4QAZDw&s",
    hours: "11:00 AM - 10:00 PM",
    location: "Old Town",
    contact: "+213 555 0004"
  },
  {
    name: "Atlas View Café",
    description: "Modern café with panoramic mountain views",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Pont_Romain_El_Kantara_%28Biskra%29.jpg",
    hours: "7:00 AM - 8:00 PM",
    location: "City Center",
    contact: "+213 555 0005"
  },
  {
    name: "Desert Gate Restaurant",
    description: "Fine dining with a fusion of local and international cuisine",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUKrqtnOIftLnyX-ZksV7YJ5uJ7zhmMf9MZA&s",
    hours: "12:00 PM - 11:00 PM",
    location: "South District",
    contact: "+213 555 0006"
  }
];

export default function Dining() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Dining in El Kantara
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the flavors of our city
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div 
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${restaurant.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {restaurant.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {restaurant.description}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-500">
                    <Clock size={18} className="mr-2" />
                    <span>{restaurant.hours}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin size={18} className="mr-2" />
                    <span>{restaurant.location}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Phone size={18} className="mr-2" />
                    <span>{restaurant.contact}</span>
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