
import { AlertTriangle, ArrowRight, Cow } from "lucide-react";

interface LivestockAlert {
  id: string;
  type: 'warning' | 'info' | 'urgent';
  animal: string;
  message: string;
  time: string;
}

const mockAlerts: LivestockAlert[] = [
  {
    id: "1",
    type: 'warning',
    animal: 'Cow #123',
    message: 'Vaccination due in 3 days',
    time: '1 hour ago'
  },
  {
    id: "2",
    type: 'urgent',
    animal: 'Cow #157',
    message: 'Unusual behavior detected',
    time: '2 hours ago'
  },
  {
    id: "3",
    type: 'info',
    animal: 'Cow #118',
    message: 'Fertility cycle starting',
    time: '5 hours ago'
  }
];

const LivestockAlertWidget = () => {
  const getAlertBgColor = (type: 'warning' | 'info' | 'urgent') => {
    switch(type) {
      case 'warning': return "bg-sun-gold-50 border-sun-gold-200";
      case 'info': return "bg-blue-50 border-blue-200";
      case 'urgent': return "bg-red-50 border-red-200";
    }
  };

  const getAlertIconColor = (type: 'warning' | 'info' | 'urgent') => {
    switch(type) {
      case 'warning': return "text-sun-gold-600";
      case 'info': return "text-blue-600";
      case 'urgent': return "text-red-600";
    }
  };

  return (
    <div className="dashboard-card">
      <div className="dashboard-card-header">
        <h3 className="dashboard-card-title">Livestock Alerts</h3>
        <div className="flex items-center space-x-1 text-earth-green">
          <Cow className="h-5 w-5" />
          <span className="text-sm">{mockAlerts.length}</span>
        </div>
      </div>
      
      <div className="space-y-3">
        {mockAlerts.map((alert) => (
          <div 
            key={alert.id}
            className={`p-3 rounded-lg border ${getAlertBgColor(alert.type)} flex items-start gap-3`}
          >
            <AlertTriangle className={`h-5 w-5 mt-0.5 ${getAlertIconColor(alert.type)}`} />
            <div className="flex-1">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-deep-clay-800">{alert.animal}</span>
                <span className="text-xs text-deep-clay-500">{alert.time}</span>
              </div>
              <p className="text-sm text-deep-clay-700">{alert.message}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t border-cloud-white-300">
        <button className="w-full text-sm text-earth-green hover:text-earth-green-700 font-medium flex items-center justify-center gap-1">
          View all livestock <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default LivestockAlertWidget;
