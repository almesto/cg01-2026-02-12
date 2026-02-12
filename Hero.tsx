import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-indigo-700 text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold mb-4">Find Your Dream Home</h1>
        <p className="text-xl mb-8">Explore thousands of properties for sale and rent.</p>
        <div className="max-w-2xl mx-auto flex bg-white rounded-lg shadow-lg p-2">
          <input
            type="text"
            placeholder="Enter location, property type, or keywords..."
            className="flex-grow p-3 rounded-l-lg text-gray-800 focus:outline-none"
          />
          <button className="bg-indigo-500 text-white px-6 py-3 rounded-r-lg hover:bg-indigo-600">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
