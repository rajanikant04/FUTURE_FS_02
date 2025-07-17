import React from 'react';
import { ShoppingBag, Star, Truck, Shield, CreditCard, ArrowRight } from 'lucide-react';

const HomePage = ({ onShopNowClick }) => {
  const featuredCategories = [
    {
      name: "Men's Clothing",
      image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Trendy and comfortable clothing for men'
    },
    {
      name: "Women's Clothing",
      image: 'https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Elegant and stylish fashion for women'
    },
    {
      name: 'Accessories',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Complete your look with our accessories'
    },
    {
      name: 'Footwear',
      image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=500',
      description: 'Step out in style with our footwear collection'
    }
  ];

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'Free delivery on orders above ₹3,000'
    },
    {
      icon: Shield,
      title: 'Authentic Products',
      description: '100% genuine fashion items guaranteed'
    },
    {
      icon: CreditCard,
      title: 'Easy Returns',
      description: '30-day hassle-free return & exchange policy'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-pink-300">StyleHub</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Discover the latest fashion trends and express your unique style with our curated collection of clothing and accessories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onShopNowClick}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Shop Fashion</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-200">
                Style Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose StyleHub?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your trusted fashion destination for authentic, trendy, and quality clothing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our carefully curated fashion collections for every style and occasion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
                onClick={onShopNowClick}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15K+</div>
              <div className="text-pink-200">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-pink-200">Fashion Items</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24+</div>
              <div className="text-pink-200">Clothing Categories</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8</div>
              <div className="text-pink-200 flex items-center justify-center">
                <Star className="h-5 w-5 fill-current mr-1" />
                Customer Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Express Your Style?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join our fashion community and discover the latest trends in clothing and accessories.
          </p>
          <button
            onClick={onShopNowClick}
            className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-200 inline-flex items-center space-x-2 group"
          >
            <span>Explore Fashion</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;