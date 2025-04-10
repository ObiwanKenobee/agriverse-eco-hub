
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import WelcomeHero from "@/components/dashboard/WelcomeHero";
import WeatherWidget from "@/components/dashboard/WeatherWidget";
import CropHealthWidget from "@/components/dashboard/CropHealthWidget";
import LivestockAlertWidget from "@/components/dashboard/LivestockAlertWidget";
import FinancialSummaryWidget from "@/components/dashboard/FinancialSummaryWidget";
import MarketTrendsWidget from "@/components/dashboard/MarketTrendsWidget";
import { Calendar, ChevronDown, Plus, RefreshCw } from "lucide-react";

const Index = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <WelcomeHero userName="Jane" />
        
        <div className="flex justify-between items-center mt-8 mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-xl font-bold text-deep-clay-800">Farm Dashboard</h2>
            {!loading && (
              <button className="flex items-center text-sm text-deep-clay-600 hover:text-earth-green transition-colors">
                <RefreshCw className="h-4 w-4 mr-1" />
                <span>Refresh</span>
              </button>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center text-sm px-3 py-1.5 border border-cloud-white-300 rounded-lg bg-white hover:bg-cloud-white-50 transition-colors">
              <Calendar className="h-4 w-4 mr-1 text-deep-clay-600" />
              <span>Today</span>
              <ChevronDown className="h-3 w-3 ml-1 text-deep-clay-600" />
            </button>
            
            <button className="button-primary flex items-center text-sm">
              <Plus className="h-4 w-4 mr-1" />
              <span>Add Widget</span>
            </button>
          </div>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="dashboard-card animate-pulse h-80 flex flex-col">
                <div className="h-6 bg-cloud-white-200 rounded w-1/3 mb-4"></div>
                <div className="flex-1 flex flex-col space-y-4">
                  <div className="h-4 bg-cloud-white-200 rounded w-full"></div>
                  <div className="h-4 bg-cloud-white-200 rounded w-2/3"></div>
                  <div className="h-20 bg-cloud-white-200 rounded w-full"></div>
                  <div className="h-4 bg-cloud-white-200 rounded w-1/2"></div>
                  <div className="h-4 bg-cloud-white-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <WeatherWidget />
            <CropHealthWidget />
            <LivestockAlertWidget />
            <FinancialSummaryWidget />
            <MarketTrendsWidget />
            <div className="dashboard-card flex flex-col justify-center items-center h-full">
              <div className="w-16 h-16 rounded-full bg-earth-green-50 flex items-center justify-center mb-4">
                <Plus className="h-6 w-6 text-earth-green-600" />
              </div>
              <h3 className="text-lg font-medium text-deep-clay-700 mb-2">Add More Insights</h3>
              <p className="text-sm text-deep-clay-500 text-center mb-4">Customize your dashboard with more widgets</p>
              <button className="button-primary">Add Widget</button>
            </div>
          </div>
        )}
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

export default Index;
