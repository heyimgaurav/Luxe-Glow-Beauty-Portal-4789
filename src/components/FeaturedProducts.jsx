import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
  {
    id: 3,
    name: "Golden Hour Moisturizer",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Skincare"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Featured Collection</h2>
          <p className="text-gray-600">Discover our most loved luxury beauty products</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                    <span className="text-white text-sm">{product.category}</span>
                  </div>
                </div>
                <h3 className="text-xl text-gray-900 mb-2">{product.name}</h3>
                <p className="text-pink-500 font-medium">${product.price}</p>
              </Link>
              <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition-colors">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;