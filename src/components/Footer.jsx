import { FiInstagram, FiFacebook, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-pink-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-serif text-pink-900 mb-6">Luxe Beauty</h3>
            <p className="text-gray-600 mb-6">
              Luxury beauty products made with organic ingredients for your natural beauty.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-pink-500">
                <FiInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                <FiFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-500">
                <FiTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pink-500">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Contact</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Shipping Info</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Returns</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Order Status</a></li>
              <li><a href="#" className="text-gray-600 hover:text-pink-500">Payment Methods</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium text-gray-900 mb-4">Newsletter</h4>
            <p className="text-gray-600 mb-4">Subscribe to get special offers and beauty tips</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-pink-500"
              />
              <button className="w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
          <p>&copy; 2024 Luxe Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;