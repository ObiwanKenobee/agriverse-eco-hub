
import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import Header from "@/components/layout/Header";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full bg-earth-green-50 flex items-center justify-center mb-6 animate-pulse-slow">
          <span className="text-4xl">🌱</span>
        </div>
        
        <h1 className="text-4xl font-bold text-deep-clay-800 mb-4">404</h1>
        <p className="text-xl text-deep-clay-600 mb-8 text-center">Oops! This page hasn't been cultivated yet.</p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/" className="button-primary flex items-center justify-center">
            <Home className="h-5 w-5 mr-2" />
            <span>Back to Home</span>
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className="px-4 py-2 bg-deep-clay-50 text-deep-clay-800 rounded-lg flex items-center justify-center hover:bg-deep-clay-100 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span>Go Back</span>
          </button>
        </div>
      </main>
      
      <footer className="bg-white border-t border-cloud-white-300 py-4 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-deep-clay-600 mb-4 md:mb-0">
              © 2023 AgriVerse Platform. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm text-deep-clay-600 hover:text-earth-green">Terms</a>
              <a href="#" className="text-sm text-deep-clay-600 hover:text-earth-green">Privacy</a>
              <a href="#" className="text-sm text-deep-clay-600 hover:text-earth-green">Help</a>
              <a href="#" className="text-sm text-deep-clay-600 hover:text-earth-green">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
