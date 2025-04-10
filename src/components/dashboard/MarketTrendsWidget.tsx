
import { ArrowDownRight, ArrowUpRight, Clipboard, DollarSign } from "lucide-react";

interface MarketTrend {
  crop: string;
  price: number;
  change: number;
  unit: string;
}

const mockMarketTrends: MarketTrend[] = [
  { crop: "Maize", price: 32.50, change: 2.5, unit: "bag" },
  { crop: "Beans", price: 85.75, change: -1.3, unit: "kg" },
  { crop: "Tomatoes", price: 45.00, change: 5.2, unit: "crate" },
  { crop: "Potatoes", price: 28.90, change: 0.7, unit: "kg" },
];

const MarketTrendsWidget = () => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card-header">
        <h3 className="dashboard-card-title">Market Trends</h3>
        <div className="flex items-center space-x-1 text-earth-green">
          <DollarSign className="h-5 w-5" />
          <span className="text-sm">Local Market</span>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-cloud-white-300">
              <th className="pb-2 text-left font-medium text-deep-clay-600">Crop</th>
              <th className="pb-2 text-right font-medium text-deep-clay-600">Price</th>
              <th className="pb-2 text-right font-medium text-deep-clay-600">Change</th>
            </tr>
          </thead>
          <tbody>
            {mockMarketTrends.map((item) => (
              <tr key={item.crop} className="border-b border-cloud-white-200 last:border-0">
                <td className="py-2.5 text-deep-clay-800">{item.crop}</td>
                <td className="py-2.5 text-right font-medium text-deep-clay-800">
                  {item.price.toFixed(2)} KES/{item.unit}
                </td>
                <td className="py-2.5 text-right">
                  <div className="flex items-center justify-end">
                    {item.change > 0 ? (
                      <div className="flex items-center text-earth-green-600">
                        <ArrowUpRight className="h-3.5 w-3.5 mr-0.5" />
                        <span>{Math.abs(item.change)}%</span>
                      </div>
                    ) : (
                      <div className="flex items-center text-red-500">
                        <ArrowDownRight className="h-3.5 w-3.5 mr-0.5" />
                        <span>{Math.abs(item.change)}%</span>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 pt-3 border-t border-cloud-white-300 flex justify-between items-center">
        <span className="text-xs text-deep-clay-500">Updated: Today, 10:15 AM</span>
        <button className="flex items-center text-earth-green hover:text-earth-green-700 text-sm">
          <Clipboard className="h-4 w-4 mr-1" />
          <span>Export prices</span>
        </button>
      </div>
    </div>
  );
};

export default MarketTrendsWidget;
