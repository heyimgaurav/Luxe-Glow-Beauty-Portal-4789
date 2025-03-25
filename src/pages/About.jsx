import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-serif text-gray-900 mb-8">Our Story</h1>
          <p className="text-gray-600 mb-12">
            Founded in 2020, Luxe Beauty was born from a passion for creating luxury skincare products
            that are both effective and environmentally conscious. Our commitment to natural beauty
            drives everything we do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1570194065650-d99fb4b8ccb0"
              alt="Our Laboratory"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              We believe that luxury skincare should be both effective and sustainable. Every product
              is carefully crafted using the finest natural ingredients, ensuring that your skin
              receives the care it deserves while minimizing our environmental impact.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-600">
                <span className="text-pink-500 mr-2">✓</span>
                100% Cruelty-free products
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-pink-500 mr-2">✓</span>
                Sustainably sourced ingredients
              </li>
              <li className="flex items-center text-gray-600">
                <span className="text-pink-500 mr-2">✓</span>
                Eco-friendly packaging
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;