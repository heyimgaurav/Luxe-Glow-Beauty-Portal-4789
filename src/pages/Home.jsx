import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      
      <section className="py-20 bg-pink-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-serif text-gray-900 mb-6">Our Promise</h2>
            <p className="text-gray-600 mb-12">
              We believe in creating beauty products that are as good for your skin as they are for the planet. 
              All our products are cruelty-free, made with organic ingredients, and packaged sustainably.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-pink-500 text-2xl">✨</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Natural Ingredients</h3>
                <p className="text-gray-600">Sourced from nature's finest ingredients</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-pink-500 text-2xl">🌿</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Cruelty Free</h3>
                <p className="text-gray-600">Never tested on animals</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-pink-500 text-2xl">♻️</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Eco Friendly</h3>
                <p className="text-gray-600">Sustainable packaging solutions</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Home;