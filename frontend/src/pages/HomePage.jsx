import React, { useState } from 'react';
import { Leaf, Camera, MessageCircle, Sparkles, Menu, X, ArrowRight, User, Mail, Lock, Eye, EyeOff } from 'lucide-react';

 export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const HomePage = () => (
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

  const AuthPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-green-100">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full blur-xl opacity-50"></div>
              <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto shadow-lg">
                <Leaf className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-2">
              {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-600">
              {authMode === 'login' ? 'Sign in to continue your herbal journey' : 'Start your natural wellness journey'}
            </p>
          </div>

          {/* Auth Mode Toggle */}
          <div className="flex gap-2 mb-6 bg-green-50 p-1 rounded-full">
            <button
              onClick={() => setAuthMode('login')}
              className={`flex-1 py-2.5 rounded-full font-semibold transition-all ${
                authMode === 'login'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-green-700'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setAuthMode('signup')}
              className={`flex-1 py-2.5 rounded-full font-semibold transition-all ${
                authMode === 'signup'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-green-700'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={(e) => {
            e.preventDefault();
            setIsAuthenticated(true);
            setCurrentPage('home');
            setFormData({ name: '', email: '', password: '', confirmPassword: '' });
          }} className="space-y-4">
            {authMode === 'signup' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="Enter your password"
                  className="w-full pl-12 pr-12 py-3.5 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {authMode === 'signup' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    placeholder="Confirm your password"
                    className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
            )}

            {authMode === 'login' && (
              <div className="flex justify-end">
                <button type="button" className="text-sm text-green-600 hover:text-green-700 font-semibold">
                  Forgot Password?
                </button>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2 group"
            >
              <span>{authMode === 'login' ? 'Sign In' : 'Create Account'}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or continue with</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all font-semibold text-gray-700">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all font-semibold text-gray-700">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </button>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-6">
          <button
            onClick={() => setCurrentPage('home')}
            className="text-gray-600 hover:text-green-600 font-semibold inline-flex items-center group"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );

  const PlaceholderPage = ({ title, icon: Icon }) => (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl w-32 h-32 flex items-center justify-center mx-auto shadow-2xl">
            <Icon className="w-16 h-16 text-white" />
          </div>
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent mb-6">{title}</h1>
        <p className="text-2xl text-gray-600 mb-10">This feature is coming soon!</p>
        <button 
          onClick={() => setCurrentPage('home')}
          className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl transition-all inline-flex items-center space-x-2 transform hover:scale-105"
        >
          <span>Back to Home</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-white bg-opacity-95 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => setCurrentPage('home')}
            >
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-2.5 shadow-lg group-hover:shadow-xl transition-shadow">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">Virtual Herbal Garden</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              <button
                onClick={() => setCurrentPage('home')}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  currentPage === 'home' 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('identify')}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  currentPage === 'identify' 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                Identify Plants
              </button>
              <button
                onClick={() => setCurrentPage('chatbot')}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  currentPage === 'chatbot' 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                Ask Herbalist
              </button>
              <button
                onClick={() => setCurrentPage('recommendations')}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                  currentPage === 'recommendations' 
                    ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg' 
                    : 'text-gray-600 hover:bg-green-50 hover:text-green-700'
                }`}
              >
                Recommendations
              </button>

              {/* Auth Button */}
              <div className="ml-4 pl-4 border-l border-gray-200">
                {isAuthenticated ? (
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <button
                      onClick={() => setIsAuthenticated(false)}
                      className="text-gray-600 hover:text-green-700 font-semibold"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setCurrentPage('auth')}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2.5 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-green-600 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-6 border-t border-green-100">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
                  className={`text-left px-6 py-3 rounded-xl font-semibold transition-all ${
                    currentPage === 'home' 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                      : 'text-gray-600 hover:bg-green-50'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => { setCurrentPage('identify'); setMobileMenuOpen(false); }}
                  className={`text-left px-6 py-3 rounded-xl font-semibold transition-all ${
                    currentPage === 'identify' 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                      : 'text-gray-600 hover:bg-green-50'
                  }`}
                >
                  Identify Plants
                </button>
                <button
                  onClick={() => { setCurrentPage('chatbot'); setMobileMenuOpen(false); }}
                  className={`text-left px-6 py-3 rounded-xl font-semibold transition-all ${
                    currentPage === 'chatbot' 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                      : 'text-gray-600 hover:bg-green-50'
                  }`}
                >
                  Ask Herbalist
                </button>
                <button
                  onClick={() => { setCurrentPage('recommendations'); setMobileMenuOpen(false); }}
                  className={`text-left px-6 py-3 rounded-xl font-semibold transition-all ${
                    currentPage === 'recommendations' 
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white' 
                      : 'text-gray-600 hover:bg-green-50'
                  }`}
                >
                  Recommendations
                </button>

                {/* Mobile Auth Button */}
                <div className="pt-3 border-t border-green-100">
                  {isAuthenticated ? (
                    <button
                      onClick={() => { setIsAuthenticated(false); setMobileMenuOpen(false); }}
                      className="w-full text-left px-6 py-3 rounded-xl font-semibold text-red-600 hover:bg-red-50 transition-all"
                    >
                      Logout
                    </button>
                  ) : (
                    <button
                      onClick={() => { setCurrentPage('auth'); setMobileMenuOpen(false); }}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold"
                    >
                      Sign In
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Page Content */}
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'identify' && <PlaceholderPage title="Plant Identification" icon={Camera} />}
      {currentPage === 'chatbot' && <PlaceholderPage title="Herbalist Chatbot" icon={MessageCircle} />}
      {currentPage === 'recommendations' && <PlaceholderPage title="Personal Recommendations" icon={Sparkles} />}
      {currentPage === 'auth' && <AuthPage />}
    </div>
  );
};

