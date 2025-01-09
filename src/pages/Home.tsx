import React from 'react';
import { ChevronRight, MapPin, Sun, Users, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://elmaouid.com/wp-content/uploads/2020/01/05-5.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto pt-32 px-4 sm:px-6 lg:px-8 flex flex-col h-full justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to El Kantara
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl">
            Discover the beauty of the Gateway to the Desert, where ancient history meets natural wonder
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/attractions"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Explore Now
              <ChevronRight className="ml-2" size={20} />
            </Link>
            <a
              href="mailto:techokba@gmail.com"
              className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              Contact Us
              <Mail className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Visit El Kantara?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Experience the magic of our historic city
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                <MapPin size={24} />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Strategic Location</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                Located at the gateway between the Tell Atlas and the Sahara Desert
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                <Sun size={24} />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Perfect Climate</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                Enjoy mild winters and warm summers in our Mediterranean climate
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600">
                <Users size={24} />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Rich Culture</h3>
              <p className="mt-2 text-base text-gray-600 text-center">
                Experience our unique blend of Berber and Arab traditions
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Get in Touch</h2>
            <p className="mt-4 text-xl text-gray-600">
              Have questions? We're here to help!
            </p>
          </div>
          <div className="mt-12 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="mailto:techokba@gmail.com"
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <Mail className="mr-2" size={20} />
              techokba@gmail.com
            </a>
            <a
              href="tel:+213 671.36.04.38"
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <Phone className="mr-2" size={20} />
              +213 671.36.04.38
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}