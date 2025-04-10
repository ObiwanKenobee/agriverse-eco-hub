
import { Cloud, Droplets, Sun, Wind } from "lucide-react";

interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  forecast: Array<{
    day: string;
    condition: string;
    high: number;
    low: number;
  }>;
}

const mockWeatherData: WeatherData = {
  temperature: 24,
  condition: "Partly Cloudy",
  humidity: 65,
  windSpeed: 12,
  forecast: [
    { day: "Today", condition: "Partly Cloudy", high: 24, low: 18 },
    { day: "Tomorrow", condition: "Rain", high: 23, low: 17 },
    { day: "Wed", condition: "Sunny", high: 26, low: 19 },
    { day: "Thu", condition: "Sunny", high: 28, low: 20 },
    { day: "Fri", condition: "Partly Cloudy", high: 25, low: 18 },
  ]
};

const WeatherWidget = () => {
  const weather = mockWeatherData;
  
  const renderWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return <Sun className="h-10 w-10 text-sun-gold-500" />;
      case "rain":
        return <Droplets className="h-10 w-10 text-earth-green-400" />;
      case "partly cloudy":
      default:
        return <Cloud className="h-10 w-10 text-deep-clay-400" />;
    }
  };

  return (
    <div className="dashboard-card">
      <div className="dashboard-card-header">
        <h3 className="dashboard-card-title">Weather</h3>
        <span className="text-sm text-earth-green">Kisumu Region</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center">
          {renderWeatherIcon(weather.condition)}
          <span className="text-3xl font-bold mt-2">{weather.temperature}°C</span>
          <span className="text-sm text-deep-clay-600">{weather.condition}</span>
        </div>
        
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <span className="flex items-center text-sm text-deep-clay-600">
              <Droplets className="h-4 w-4 mr-1" /> Humidity
            </span>
            <span className="text-sm font-medium">{weather.humidity}%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center text-sm text-deep-clay-600">
              <Wind className="h-4 w-4 mr-1" /> Wind
            </span>
            <span className="text-sm font-medium">{weather.windSpeed} km/h</span>
          </div>
          <div className="px-2 py-1 bg-earth-green-50 rounded-md mt-2">
            <p className="text-xs text-earth-green-700">Rain expected tomorrow, adjust irrigation plans.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 border-t border-cloud-white-300 pt-4">
        <h4 className="text-sm font-medium text-deep-clay-700 mb-2">5-Day Forecast</h4>
        <div className="flex justify-between">
          {weather.forecast.map((day) => (
            <div key={day.day} className="flex flex-col items-center">
              <span className="text-xs text-deep-clay-600">{day.day}</span>
              <div className="my-1">
                {renderWeatherIcon(day.condition)}
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-xs font-medium">{day.high}°</span>
                <span className="text-xs text-deep-clay-400">{day.low}°</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeatherWidget;
