import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Beauty Products"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-white/30" />
      </div>

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif text-white mb-6">
              Discover Your Natural Beauty
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Luxury skincare products made with organic ingredients for a radiant, healthy glow.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-500 px-8 py-3 rounded-full font-medium hover:bg-pink-50 transition-colors"
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;