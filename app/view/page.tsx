// pages/Gallery.tsx

import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    { src: '1.png', alt: 'Image 1', title: 'Client Side Integration' },
    { src: '2.png', alt: 'Image 2', title: '.' },
    { src: '3.png', alt: 'Our Dedicated Portal', title: 'Our Dedicated Portal' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 mb-24">
      <h1 className="text-4xl font-bold text-center mb-8">Proposed UI Layout</h1>
      <div className="flex flex-col space-y-8">
        {images.map((image, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4">{image.title}</h2>
            <div className="overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;