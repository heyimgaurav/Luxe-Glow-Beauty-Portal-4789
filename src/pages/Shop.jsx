import { useState } from 'react';
import { motion } from 'framer-motion';

const categories = ['All', 'Skincare', 'Makeup', 'Tools', 'Fragrance'];

const products = [
  {
    id: 1,
    name: "Rose Quartz Facial Roller",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1562887245-138c2f45013e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Tools"
  },
  {
    id: 2,
    name: "Luminous Glow Serum",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Skincare"
  },
  // Add more products...
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-serif text-gray-900 mb-8 text-center">Our Collection</h1>
        
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-pink-50 text-gray-600 hover:bg-pink-100'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {filteredProducts.map((product) => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl text-gray-900 mb-2">{product.name}</h3>
              <p className="text-pink-500 font-medium mb-4">${product.price}</p>
              <button className="w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition-colors">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;