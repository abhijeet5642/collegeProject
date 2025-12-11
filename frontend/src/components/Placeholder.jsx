import React from 'react';
import { ArrowRight } from 'lucide-react';

const Placeholder = ({ title, icon: Icon, setCurrentPage }) => {
  return (
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
};

export default Placeholder;