import React from 'react';
import PropertyCard from './PropertyCard';

const properties = [
  {
    id: 1,
    image: '/images/house1.jpg',
    price: '$550,000',
    address: '123 Main St, Anytown, USA',
    beds: 3,
    baths: 2,
    sqft: 1800,
  },
  {
    id: 2,
    image: '/images/house2.jpg',
    price: '$1,200,000',
    address: '456 Oak Ave, Cityville, USA',
    beds: 4,
    baths: 3,
    sqft: 2500,
  },
  {
    id: 3,
    image: '/images/house3.jpg',
    price: '$280,000',
    address: '789 Pine Ln, Townsville, USA',
    beds: 2,
    baths: 1,
    sqft: 1000,
  },
  {
    id: 4,
    image: '/images/house4.jpg',
    price: '$720,000',
    address: '101 Elm Rd, Villageton, USA',
    beds: 4,
    baths: 2.5,
    sqft: 2200,
  },
  {
    id: 5,
    image: '/images/house5.jpg',
    price: '$450,000',
    address: '202 Market St, Metropolis, USA',
    beds: 1,
    baths: 1,
    sqft: 800,
  },
  {
    id: 6,
    image: '/images/house6.jpg',
    price: '$610,000',
    address: '303 Willow Dr, Suburbia, USA',
    beds: 3,
    baths: 2,
    sqft: 1950,
  },
  {
    id: 7,
    image: '/images/house7.jpg',
    price: '$850,000',
    address: '404 Maple Ave, Countryside, USA',
    beds: 5,
    baths: 3,
    sqft: 3000,
  },
  {
    id: 8,
    image: '/images/house8.jpg',
    price: '$320,000',
    address: '505 Birch St, Lakeside, USA',
    beds: 2,
    baths: 2,
    sqft: 1200,
  }
];

const PropertyList: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
