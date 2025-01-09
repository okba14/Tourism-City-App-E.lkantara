import React from 'react';

const images = [
  {
    url: "https://algeriepatrimoine.wordpress.com/wp-content/uploads/2020/09/screenshot_2020-09-28-07-25-36.png?w=1024",
    title: "El Kantara Gorge"
  },
  {
    url: "https://algeriepatrimoine.wordpress.com/wp-content/uploads/2020/09/img_20200928_073040.jpg?w=720",
    title: "Historic Oasis"
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/e/e5/1_.Les_gorges_d%27El-Kantara_%28Alg%C3%A9rie%29._Contraste%2C_La_Palmerais_d%27EL-KANTARA_et_%C3%A0_2_km_la_montagne_de_M%C3%A9tlili_%281495_m_d%27altitude%29._A_El-Kantara_o%C3%B9_le_froid_et_la_chaleur_fond_bon_m%C3%A9nage_%21%21%21_Site_prot%C3%A9g%C3%A9_depuis_1923.jpg",
    title: "Mountain Views"
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10n2qGYmFkn_Il71Nmr60nT-gQNE5OXXoxw&s",
    title: "Roman Bridge"
  },
  {
    url: "https://i.ytimg.com/vi/aqjJ6K9G1hY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD91S7k-_HWuPMTGXFE5LwDgx1WIw",
    title: "Local Architecture"
  },
  {
    url: "https://i.ytimg.com/vi/KijYfwUagnA/maxresdefault.jpg",
    title: "Traditional Cuisine"
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore the beauty of El Kantara through our lens
          </p>
        </div>

        <div className="mt-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg aspect-w-16 aspect-h-9"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}