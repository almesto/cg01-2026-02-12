import React from 'react';

interface PropertyCardProps {
  image: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ image, price, address, beds, baths, sqft }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={image} alt={address} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-indigo-600 mb-1">{price}</h3>
        <p className="text-gray-800 text-lg mb-2 truncate">{address}</p>
        <div className="flex justify-between text-gray-600 text-sm">
          <span>{beds} Beds</span>
          <span>{baths} Baths</span>
          <span>{sqft} Sqft</span>
        </div>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
