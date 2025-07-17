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
      <section className="relative bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-pink-300 opacity-20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-purple-300 opacity-15 rounded-full animate-bounce animation-delay-300"></div>
          <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-indigo-300 opacity-10 rounded-full animate-pulse animation-delay-500"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fadeInUp">
              Welcome to <span className="text-pink-300 animate-pulse">Snitch</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-purple-100 max-w-4xl mx-auto animate-fadeInUp animate-delay-200">
              Discover the latest fashion trends and express your unique style with our curated collection of clothing and accessories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animate-delay-400">
              <button
                onClick={onShopNowClick}
                className="btn-primary flex items-center justify-center space-x-2 group animate-bounceIn animate-delay-500"
              >
                <ShoppingBag className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Shop Fashion</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <button className="btn-secondary animate-bounceIn animate-delay-600">
                Style Guide
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Snitch?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Your trusted fashion destination for authentic, trendy, and quality clothing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group animate-fadeInUp transform hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-200 transition-colors duration-300 group-hover:rotate-6">
                  <feature.icon className="h-8 w-8 text-pink-600 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our carefully curated fashion collections for every style and occasion.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 hover:-rotate-1 animate-fadeInUp"
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
                onClick={onShopNowClick}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 sm:h-56 object-cover group-hover:scale-125 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowRight className="h-6 w-6 mx-auto animate-bounce" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-white/5 rounded-full animate-pulse animation-delay-300"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fadeInUp animate-delay-100">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 animate-bounceIn animate-delay-200">15K+</div>
              <div className="text-pink-200 text-sm md:text-base">Happy Customers</div>
            </div>
            <div className="animate-fadeInUp animate-delay-200">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 animate-bounceIn animate-delay-300">200+</div>
              <div className="text-pink-200 text-sm md:text-base">Fashion Items</div>
            </div>
            <div className="animate-fadeInUp animate-delay-300">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 animate-bounceIn animate-delay-400">24+</div>
              <div className="text-pink-200 text-sm md:text-base">Clothing Categories</div>
            </div>
            <div className="animate-fadeInUp animate-delay-400">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 animate-bounceIn animate-delay-500">4.8</div>
              <div className="text-pink-200 flex items-center justify-center text-sm md:text-base">
                <Star className="h-4 w-4 md:h-5 md:w-5 fill-current mr-1 animate-pulse" />
                Customer Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-pink-600/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-600/20 rounded-full animate-pulse animation-delay-300"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-full animate-pulse animation-delay-500"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fadeInUp">Ready to Express Your Style?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto animate-fadeInUp animate-delay-200">
            Join our fashion community and discover the latest trends in clothing and accessories.
          </p>
          <button
            onClick={onShopNowClick}
            className="btn-primary inline-flex items-center space-x-2 group animate-bounceIn animate-delay-400"
          >
            <span>Explore Fashion</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;