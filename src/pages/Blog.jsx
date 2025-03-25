import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "The Benefits of Natural Skincare",
    excerpt: "Discover why natural ingredients are better for your skin and the environment.",
    image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571",
    date: "March 15, 2024"
  },
  {
    id: 2,
    title: "Spring Skincare Routine",
    excerpt: "Update your skincare routine for the new season with these essential tips.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    date: "March 10, 2024"
  },
  {
    id: 3,
    title: "The Power of Antioxidants",
    excerpt: "Learn about the amazing benefits of antioxidants in your skincare routine.",
    image: "https://images.unsplash.com/photo-1556228578-c5b2222270bc",
    date: "March 5, 2024"
  }
];

const Blog = () => {
  return (
    <div className="pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-serif text-gray-900 mb-12 text-center"
        >
          Beauty Blog
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm text-pink-500">{post.date}</span>
                <h2 className="text-xl font-serif text-gray-900 mt-2 mb-4">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-pink-500 font-medium hover:text-pink-600 transition-colors">
                  Read More →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;