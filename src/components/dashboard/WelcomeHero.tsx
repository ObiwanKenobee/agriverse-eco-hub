
import { CalendarClock, CloudRain, SunDim } from "lucide-react";

interface WelcomeHeroProps {
  userName: string;
}

const WelcomeHero = ({ userName }: WelcomeHeroProps) => {
  const currentHour = new Date().getHours();
  let greeting = "Good evening";
  let weatherIcon = <SunDim className="h-5 w-5 text-sun-gold-500" />;
  
  if (currentHour < 12) {
    greeting = "Good morning";
    weatherIcon = <SunDim className="h-5 w-5 text-sun-gold-500" />;
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
    weatherIcon = <SunDim className="h-5 w-5 text-sun-gold-500" />;
  }

  // This would be a real AI insight based on actual weather data
  const aiInsight = "Rain expected tomorrow, adjust irrigation plans.";

  return (
    <div className="bg-gradient-to-br from-earth-green-700 to-earth-green-900 text-white rounded-xl p-6 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-60"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h1 className="text-2xl font-bold mb-2">{greeting}, {userName}!</h1>
            <p className="text-earth-green-100 mb-4">Here's your farm overview for today</p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-2">
                  <CalendarClock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <span className="text-sm font-medium text-earth-green-50">Today</span>
                  <p className="text-white font-medium">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 flex items-center gap-3">
                <div className="bg-white/20 rounded-full p-2">
                  {weatherIcon}
                </div>
                <div>
                  <span className="text-sm font-medium text-earth-green-50">AI Insight</span>
                  <p className="text-white font-medium flex items-center gap-1">
                    <CloudRain className="h-4 w-4 text-sun-gold-300" />
                    {aiInsight}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex bg-white/10 backdrop-blur-sm rounded-full h-24 w-24 items-center justify-center">
            <span className="text-4xl font-bold animate-pulse-slow">🌱</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHero;
