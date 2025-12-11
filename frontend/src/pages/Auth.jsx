import React, { useState } from 'react';
import { Leaf, ArrowRight, AlertCircle, Loader2 } from 'lucide-react';
import Login from '../components/auth/Login'; // Ensure path is correct based on your folder structure
import Register from '../components/auth/Register'; // Ensure path is correct

const Auth = ({ setCurrentPage, setIsAuthenticated }) => {
  const [authMode, setAuthMode] = useState('login');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // This function handles the connection to the Backend
  const handleAuthSubmit = async (formData) => {
    setError(''); // Clear previous errors
    setIsLoading(true);

    try {
      // Determine if we are Logging in or Registering
      // Note: Ensure your backend has both routes created. 
      // We built /login previously. /register should use the same pattern.
      const endpoint = authMode === 'login' 
        ? 'http://localhost:5000/api/users/login' 
        : 'http://localhost:5000/api/users/register';

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // 1. Save user info (token) to local storage
        localStorage.setItem('userInfo', JSON.stringify(data));
        
        // 2. Update App State
        setIsAuthenticated(true);
        setCurrentPage('home');
      } else {
        // 3. Handle specific backend errors (e.g., "User not found")
        setError(data.message || 'Authentication failed');
      }
    } catch (err) {
      // 4. Handle network errors (Backend not running)
      setError('Cannot connect to server. Please try again later.');
      console.error('Auth Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-2 border-green-100">
          
          {/* --- Common Header Section --- */}
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

          {/* --- Error Message Display --- */}
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl flex items-start gap-3">
              <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <p className="text-sm font-medium">{error}</p>
            </div>
          )}

          {/* --- Toggle Buttons --- */}
          <div className="flex gap-2 mb-6 bg-green-50 p-1 rounded-full">
            <button
              onClick={() => { setAuthMode('login'); setError(''); }}
              className={`flex-1 py-2.5 rounded-full font-semibold transition-all ${
                authMode === 'login'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-green-700'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => { setAuthMode('signup'); setError(''); }}
              className={`flex-1 py-2.5 rounded-full font-semibold transition-all ${
                authMode === 'signup'
                  ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                  : 'text-gray-600 hover:text-green-700'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* --- Render Form based on Toggle --- */}
          {/* We pass isLoading so child components can disable buttons if needed */}
          <div className={isLoading ? 'opacity-70 pointer-events-none' : ''}>
            {authMode === 'login' ? (
              <Login 
                onSubmit={handleAuthSubmit} 
                onForgotPassword={() => alert("Forgot Password clicked")} 
              />
            ) : (
              <Register 
                onSubmit={handleAuthSubmit} 
              />
            )}
          </div>

          {/* --- Loading Overlay (Optional UX improvement) --- */}
          {isLoading && (
            <div className="flex justify-center mt-4 text-green-600 font-semibold animate-pulse">
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing...
            </div>
          )}

          {/* --- Divider --- */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or continue with</span>
            </div>
          </div>

          {/* --- Social Login (Common) --- */}
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
    </div>
  );
};

export default Auth;