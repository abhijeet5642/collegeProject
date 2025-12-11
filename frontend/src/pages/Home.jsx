import React from 'react';
import { Leaf, Camera, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';

const Home = ({ setCurrentPage }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-emerald-300 rounded-full mix-blend-overlay filter blur-3xl animate-pulse delay-500"></div>
          </div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-white opacity-30 rounded-full blur-xl animate-pulse"></div>
                <div className="relative bg-white bg-opacity-30 backdrop-blur-lg rounded-full p-5 border-2 border-white border-opacity-50 shadow-2xl">
                  <Leaf className="w-20 h-20 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              Welcome to Your<br />
              <span className="bg-gradient-to-r from-yellow-200 to-green-200 bg-clip-text text-transparent">
                Virtual Herbal Garden
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-green-50 leading-relaxed">
              Discover the healing power of nature with AI-powered plant identification, 
              expert herbalist guidance, and personalized wellness recommendations.
            </p>
            <button 
              onClick={() => setCurrentPage('identify')}
              className="group bg-white text-green-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-green-50 transition-all transform hover:scale-105 hover:shadow-2xl shadow-xl inline-flex items-center space-x-2"
            >
              <span>Start Exploring</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#ecfdf5"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
              POWERED BY AI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-6">
            Intelligent Herbal Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Harness cutting-edge artificial intelligence to unlock the ancient secrets of medicinal plants
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1: Image Recognition */}
          <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-green-200 transform hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Camera className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Plant Identification
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Simply snap a photo of any plant and our advanced AI will instantly identify it, 
                providing detailed information about its medicinal properties, traditional uses, 
                and safety guidelines.
              </p>
              <button 
                onClick={() => setCurrentPage('identify')}
                className="text-green-600 font-bold hover:text-green-700 flex items-center group-hover:gap-3 gap-2 transition-all"
              >
                Try it now 
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Feature 2: Herbalist Chatbot */}
          <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-emerald-200 transform hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Herbalist Chatbot
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Chat with our AI herbalist trained on centuries of traditional knowledge. 
                Ask questions about herbal remedies, preparation methods, dosages, and potential 
                interactions with confidence.
              </p>
              <button 
                onClick={() => setCurrentPage('chatbot')}
                className="text-green-600 font-bold hover:text-green-700 flex items-center group-hover:gap-3 gap-2 transition-all"
              >
                Start chatting 
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Feature 3: Personalized Recommendations */}
          <div className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 border-2 border-transparent hover:border-teal-200 transform hover:-translate-y-2">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition-opacity"></div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Personal Recommendations
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Receive customized herbal recommendations based on your health goals, preferences, 
                and lifestyle. Our AI creates personalized wellness plans tailored specifically 
                to your unique needs.
              </p>
              <button 
                onClick={() => setCurrentPage('recommendations')}
                className="text-green-600 font-bold hover:text-green-700 flex items-center group-hover:gap-3 gap-2 transition-all"
              >
                Get recommendations 
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Begin Your Herbal Journey Today
            </h2>
            <p className="text-xl mb-10 text-green-50 max-w-2xl mx-auto">
              Join thousands discovering natural wellness solutions through the power of AI and ancient wisdom
            </p>
            <button 
              onClick={() => setCurrentPage('identify')}
              className="group bg-white text-green-700 px-10 py-5 rounded-full font-bold text-lg hover:bg-green-50 transition-all shadow-2xl inline-flex items-center space-x-2 transform hover:scale-105"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;