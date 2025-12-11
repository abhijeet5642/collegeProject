import React, { useState } from 'react';
import { Camera, MessageCircle, Sparkles } from 'lucide-react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Placeholder from './components/Placeholder';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Page Routing Logic */}
      {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
      
      {currentPage === 'identify' && (
        <Placeholder 
          title="Plant Identification" 
          icon={Camera} 
          setCurrentPage={setCurrentPage} 
        />
      )}
      
      {currentPage === 'chatbot' && (
        <Placeholder 
          title="Herbalist Chatbot" 
          icon={MessageCircle} 
          setCurrentPage={setCurrentPage} 
        />
      )}
      
      {currentPage === 'recommendations' && (
        <Placeholder 
          title="Personal Recommendations" 
          icon={Sparkles} 
          setCurrentPage={setCurrentPage} 
        />
      )}
      
      {currentPage === 'auth' && (
        <Auth 
          setCurrentPage={setCurrentPage} 
          setIsAuthenticated={setIsAuthenticated} 
        />
      )}
    </div>
  );
};

export default App;