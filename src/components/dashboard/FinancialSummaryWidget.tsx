
import { ArrowUpRight, Banknote, CreditCard, Plus, Wallet } from "lucide-react";
import { Progress } from "@/components/ui/progress";

interface FinancialData {
  balance: number;
  currency: string;
  loans: {
    active: number;
    total: number;
    dueDate: string;
  };
  expenses: {
    amount: number;
    budget: number;
  };
  transactions: Array<{
    id: string;
    type: 'income' | 'expense';
    description: string;
    amount: number;
    date: string;
  }>;
}

const mockFinancialData: FinancialData = {
  balance: 12580,
  currency: "KES",
  loans: {
    active: 5000,
    total: 15000,
    dueDate: "2023-12-15"
  },
  expenses: {
    amount: 8500,
    budget: 15000
  },
  transactions: [
    { id: "1", type: 'income', description: 'Market Sales', amount: 3200, date: '2023-10-05' },
    { id: "2", type: 'expense', description: 'Farm Supplies', amount: 1200, date: '2023-10-04' },
    { id: "3", type: 'income', description: 'Milk Sales', amount: 850, date: '2023-10-02' }
  ]
};

const FinancialSummaryWidget = () => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  const financial = mockFinancialData;
  const expensePercentage = (financial.expenses.amount / financial.expenses.budget) * 100;

  return (
    <div className="dashboard-card">
      <div className="dashboard-card-header">
        <h3 className="dashboard-card-title">Financial Position</h3>
        <button className="text-sm text-earth-green hover:text-earth-green-700 flex items-center">
          <Plus className="h-4 w-4 mr-0.5" />
          <span>Add funds</span>
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-5">
        <div className="bg-earth-green-50 rounded-lg p-3 border border-earth-green-100">
          <div className="flex items-center gap-2 mb-1">
            <Wallet className="h-4 w-4 text-earth-green-600" />
            <span className="text-xs font-medium text-earth-green-800">Available Balance</span>
          </div>
          <span className="text-xl font-bold text-earth-green-900">
            {financial.currency} {formatCurrency(financial.balance)}
          </span>
          <div className="flex items-center mt-1 text-xs text-earth-green-700">
            <ArrowUpRight className="h-3 w-3 mr-0.5" />
            <span>+4.2% this month</span>
          </div>
        </div>
        
        <div className="bg-cloud-white-100 rounded-lg p-3 border border-cloud-white-200">
          <div className="flex items-center gap-2 mb-1">
            <CreditCard className="h-4 w-4 text-deep-clay-600" />
            <span className="text-xs font-medium text-deep-clay-700">Active Loan</span>
          </div>
          <div className="flex justify-between items-baseline">
            <span className="text-base font-bold text-deep-clay-800">
              {financial.currency} {formatCurrency(financial.loans.active)}
            </span>
            <span className="text-xs text-deep-clay-500">
              of {formatCurrency(financial.loans.total)}
            </span>
          </div>
          <div className="mt-1">
            <Progress value={(financial.loans.active / financial.loans.total) * 100} className="h-1" />
          </div>
          <div className="mt-1 text-xs text-deep-clay-600">
            Next payment due: {new Date(financial.loans.dueDate).toLocaleDateString()}
          </div>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-deep-clay-700">Monthly Expenses</span>
          <span className="text-sm text-deep-clay-600">
            {formatCurrency(financial.expenses.amount)} / {formatCurrency(financial.expenses.budget)} {financial.currency}
          </span>
        </div>
        <Progress value={expensePercentage} className="h-2" />
      </div>
      
      <div className="border-t border-cloud-white-300 pt-4">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-sm font-medium text-deep-clay-700">Recent Transactions</h4>
          <span className="text-xs text-earth-green-600 hover:text-earth-green-800 cursor-pointer">View all</span>
        </div>
        
        <div className="space-y-2.5">
          {financial.transactions.map((tx) => (
            <div key={tx.id} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  tx.type === 'income' ? 'bg-earth-green-100' : 'bg-deep-clay-100'
                }`}>
                  <Banknote className={`h-4 w-4 ${
                    tx.type === 'income' ? 'text-earth-green-600' : 'text-deep-clay-600'
                  }`} />
                </div>
                <div>
                  <span className="text-sm font-medium text-deep-clay-800">{tx.description}</span>
                  <div className="text-xs text-deep-clay-500">{new Date(tx.date).toLocaleDateString()}</div>
                </div>
              </div>
              <span className={`text-sm font-medium ${
                tx.type === 'income' ? 'text-earth-green-600' : 'text-deep-clay-600'
              }`}>
                {tx.type === 'income' ? '+' : '-'} {financial.currency} {formatCurrency(tx.amount)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialSummaryWidget;
