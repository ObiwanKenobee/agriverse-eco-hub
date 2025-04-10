
import { Activity, Leaf, LineChart, ThermometerSun } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface CropData {
  name: string;
  growthStage: string;
  healthScore: number;
  soilMoisture: number;
  nutrients: number;
  pests: {
    risk: 'low' | 'medium' | 'high';
    details: string;
  };
}

const mockCropData: CropData = {
  name: "Maize",
  growthStage: "Flowering",
  healthScore: 83,
  soilMoisture: 65,
  nutrients: 72,
  pests: {
    risk: 'medium',
    details: "Potential fall armyworm risk"
  }
};

const CropHealthWidget = () => {
  const crop = mockCropData;

  const getHealthColor = (score: number) => {
    if (score >= 80) return "text-earth-green-600";
    if (score >= 60) return "text-sun-gold-600";
    return "text-red-500";
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-earth-green-600";
    if (score >= 60) return "bg-sun-gold-600";
    return "bg-red-500";
  };

  const getRiskBadgeColor = (risk: 'low' | 'medium' | 'high') => {
    switch(risk) {
      case 'low': return "bg-earth-green-100 text-earth-green-800";
      case 'medium': return "bg-sun-gold-100 text-sun-gold-800";
      case 'high': return "bg-red-100 text-red-800";
    }
  };

  return (
    <div className="dashboard-card">
      <div className="dashboard-card-header">
        <h3 className="dashboard-card-title">Crop Health</h3>
        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-earth-green-500" />
          <span className="text-sm font-medium">{crop.name}</span>
        </div>
      </div>
      
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-deep-clay-600">Growth Stage</span>
          <span className="text-sm font-medium">{crop.growthStage}</span>
        </div>
        
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-deep-clay-600">Health Score</span>
          <span className={`text-sm font-bold ${getHealthColor(crop.healthScore)}`}>
            {crop.healthScore}%
          </span>
        </div>
        <Progress value={crop.healthScore} className="h-2" indicatorClassName={getProgressColor(crop.healthScore)} />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-cloud-white-100 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <ThermometerSun className="h-4 w-4 text-deep-clay-500" />
            <span className="text-xs font-medium text-deep-clay-700">Soil Moisture</span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-deep-clay-500">Current</span>
            <span className="text-xs font-medium">{crop.soilMoisture}%</span>
          </div>
          <Progress value={crop.soilMoisture} className="h-1.5" />
        </div>
        
        <div className="bg-cloud-white-100 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <LineChart className="h-4 w-4 text-deep-clay-500" />
            <span className="text-xs font-medium text-deep-clay-700">Nutrients</span>
          </div>
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs text-deep-clay-500">Level</span>
            <span className="text-xs font-medium">{crop.nutrients}%</span>
          </div>
          <Progress value={crop.nutrients} className="h-1.5" />
        </div>
      </div>
      
      <div className="border-t border-cloud-white-300 pt-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Activity className="h-4 w-4 text-deep-clay-500" />
            <span className="text-sm font-medium text-deep-clay-700">Pest Risk</span>
          </div>
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getRiskBadgeColor(crop.pests.risk)}`}>
            {crop.pests.risk.toUpperCase()}
          </span>
        </div>
        <p className="text-xs text-deep-clay-600 mt-2">{crop.pests.details}</p>
        <button className="w-full mt-4 text-xs text-earth-green-600 hover:text-earth-green-800 font-medium flex justify-center">
          View detailed report →
        </button>
      </div>
    </div>
  );
};

export default CropHealthWidget;
