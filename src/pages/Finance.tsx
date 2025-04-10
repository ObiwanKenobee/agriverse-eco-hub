
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import { 
  Wallet, 
  CreditCard, 
  BarChart2, 
  PiggyBank, 
  Plus, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight, 
  Clock, 
  ChevronRight, 
  Shield 
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

interface Transaction {
  id: string;
  type: 'credit' | 'debit';
  amount: number;
  description: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    type: 'credit',
    amount: 12500,
    description: 'Maize sales to Nairobi Grain Co.',
    date: 'Apr 8, 2025',
    status: 'completed'
  },
  {
    id: "2",
    type: 'debit',
    amount: 4800,
    description: 'Fertilizer purchase',
    date: 'Apr 5, 2025',
    status: 'completed'
  },
  {
    id: "3",
    type: 'debit',
    amount: 1200,
    description: 'Farm labor payment',
    date: 'Apr 3, 2025',
    status: 'completed'
  },
  {
    id: "4",
    type: 'credit',
    amount: 3600,
    description: 'Milk sales to local cooperative',
    date: 'Apr 1, 2025',
    status: 'completed'
  },
  {
    id: "5",
    type: 'debit',
    amount: 2100,
    description: 'Livestock feed',
    date: 'Mar 29, 2025',
    status: 'completed'
  }
];

const Finance = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(amount);
  };

  const totalIncome = mockTransactions
    .filter(t => t.type === 'credit')
    .reduce((sum, t) => sum + t.amount, 0);
    
  const totalExpenses = mockTransactions
    .filter(t => t.type === 'debit')
    .reduce((sum, t) => sum + t.amount, 0);
    
  const balance = totalIncome - totalExpenses;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-deep-clay-800 mb-6">Financial Management</h1>
        
        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="h-32 bg-cloud-white-200 rounded-lg"></div>
              <div className="h-32 bg-cloud-white-200 rounded-lg"></div>
              <div className="h-32 bg-cloud-white-200 rounded-lg"></div>
            </div>
            <div className="h-10 bg-cloud-white-200 rounded-lg my-6"></div>
            <div className="h-96 bg-cloud-white-200 rounded-lg"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card className="bg-gradient-to-br from-earth-green-500 to-earth-green-600 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Wallet className="mr-2 h-5 w-5" />
                    Current Balance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{formatCurrency(balance)}</div>
                  <div className="text-sm text-earth-green-100">Available in your wallet</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center text-green-600">
                    <ArrowUpRight className="mr-2 h-5 w-5" />
                    Total Income
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">{formatCurrency(totalIncome)}</div>
                  <div className="text-sm text-deep-clay-500">Last 30 days</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center text-red-600">
                    <ArrowDownRight className="mr-2 h-5 w-5" />
                    Total Expenses
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600">{formatCurrency(totalExpenses)}</div>
                  <div className="text-sm text-deep-clay-500">Last 30 days</div>
                </CardContent>
              </Card>
            </div>
            
            <Tabs defaultValue="wallet" className="w-full">
              <TabsList className="mb-6 bg-cloud-white-100 p-1">
                <TabsTrigger value="wallet" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
                  <Wallet className="mr-2 h-4 w-4" />
                  Wallet
                </TabsTrigger>
                <TabsTrigger value="loans" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Loans & Credit
                </TabsTrigger>
                <TabsTrigger value="insurance" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
                  <Shield className="mr-2 h-4 w-4" />
                  Insurance
                </TabsTrigger>
                <TabsTrigger value="savings" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
                  <PiggyBank className="mr-2 h-4 w-4" />
                  Savings
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="wallet" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Recent Transactions</span>
                      <button className="text-sm text-earth-green-600 hover:text-earth-green-700 flex items-center">
                        View All <ChevronRight className="h-4 w-4" />
                      </button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {mockTransactions.map((transaction) => (
                        <div 
                          key={transaction.id}
                          className="p-3 rounded-lg border border-cloud-white-200 flex items-center justify-between"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              transaction.type === 'credit' ? 'bg-green-100' : 'bg-red-100'
                            }`}>
                              {transaction.type === 'credit' ? (
                                <ArrowUpRight className="h-5 w-5 text-green-600" />
                              ) : (
                                <ArrowDownRight className="h-5 w-5 text-red-600" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{transaction.description}</div>
                              <div className="text-xs text-deep-clay-500 flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {transaction.date}
                              </div>
                            </div>
                          </div>
                          <div className={`font-bold ${
                            transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {transaction.type === 'credit' ? '+' : '-'}{formatCurrency(transaction.amount)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <button className="button-primary flex items-center text-sm">
                      <Plus className="h-4 w-4 mr-1" />
                      <span>New Transaction</span>
                    </button>
                  </CardFooter>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Expense Breakdown</CardTitle>
                      <CardDescription>Last 30 days by category</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Fertilizer & Seeds</span>
                          <span className="font-medium">{formatCurrency(4800)}</span>
                        </div>
                        <Progress value={60} className="h-2" indicatorClassName="bg-earth-green-500" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Labor</span>
                          <span className="font-medium">{formatCurrency(1200)}</span>
                        </div>
                        <Progress value={15} className="h-2" indicatorClassName="bg-sun-gold-500" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Livestock Feed</span>
                          <span className="font-medium">{formatCurrency(2100)}</span>
                        </div>
                        <Progress value={25} className="h-2" indicatorClassName="bg-blue-500" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Income Sources</CardTitle>
                      <CardDescription>Last 30 days by category</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Crop Sales</span>
                          <span className="font-medium">{formatCurrency(12500)}</span>
                        </div>
                        <Progress value={78} className="h-2" indicatorClassName="bg-earth-green-500" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Milk Sales</span>
                          <span className="font-medium">{formatCurrency(3600)}</span>
                        </div>
                        <Progress value={22} className="h-2" indicatorClassName="bg-blue-500" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="loans" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Available Loan Offers</CardTitle>
                    <CardDescription>Based on your farm profile and credit score</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border border-earth-green-200 bg-earth-green-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold text-earth-green-700">Seasonal Crop Loan</div>
                        <div className="text-xs px-2 py-1 bg-earth-green-100 text-earth-green-700 rounded-full">Recommended</div>
                      </div>
                      <div className="text-sm text-deep-clay-700 mb-4">Short-term financing for seeds, fertilizer, and other seasonal inputs.</div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="text-xs text-deep-clay-500">Amount</div>
                          <div className="font-bold text-earth-green-700">{formatCurrency(25000)}</div>
                        </div>
                        <div>
                          <div className="text-xs text-deep-clay-500">Interest Rate</div>
                          <div className="font-bold">8% p.a.</div>
                        </div>
                        <div>
                          <div className="text-xs text-deep-clay-500">Term</div>
                          <div className="font-bold">6 months</div>
                        </div>
                      </div>
                      <button className="w-full p-2 bg-earth-green-600 hover:bg-earth-green-700 text-white rounded-md">Apply Now</button>
                    </div>
                    
                    <div className="p-4 border border-cloud-white-300 rounded-lg">
                      <div className="font-bold text-deep-clay-800 mb-2">Equipment Financing</div>
                      <div className="text-sm text-deep-clay-700 mb-4">Medium-term loan for farm machinery and equipment purchases.</div>
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="text-xs text-deep-clay-500">Amount</div>
                          <div className="font-bold">{formatCurrency(150000)}</div>
                        </div>
                        <div>
                          <div className="text-xs text-deep-clay-500">Interest Rate</div>
                          <div className="font-bold">12% p.a.</div>
                        </div>
                        <div>
                          <div className="text-xs text-deep-clay-500">Term</div>
                          <div className="font-bold">24 months</div>
                        </div>
                      </div>
                      <button className="w-full p-2 border border-earth-green-600 text-earth-green-600 hover:bg-earth-green-50 rounded-md">View Details</button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart2 className="mr-2 h-5 w-5 text-earth-green-600" />
                      Your Credit Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-center mb-6">
                      <div className="w-32 h-32 rounded-full border-8 border-earth-green-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-earth-green-600">720</div>
                          <div className="text-xs text-deep-clay-500">Good</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Payment History</span>
                          <span className="font-medium">Excellent</span>
                        </div>
                        <Progress value={95} className="h-2" indicatorClassName="bg-green-500" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Credit Utilization</span>
                          <span className="font-medium">Good</span>
                        </div>
                        <Progress value={78} className="h-2" indicatorClassName="bg-earth-green-500" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Credit History</span>
                          <span className="font-medium">Fair</span>
                        </div>
                        <Progress value={60} className="h-2" indicatorClassName="bg-sun-gold-500" />
                      </div>
                    </div>
                    
                    <div className="mt-4 p-3 bg-cloud-white-50 rounded-lg text-sm text-deep-clay-600">
                      Your credit score is calculated based on your payment history, loan repayments, and farm productivity data. A higher score helps you access better loan offers.
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="insurance" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Active Insurance Policies</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border border-blue-200 bg-blue-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold">Crop Insurance</div>
                        <div className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full">Active</div>
                      </div>
                      <div className="text-sm text-deep-clay-700 mb-4">Protection against drought, excessive rainfall, and crop diseases.</div>
                      <div className="grid grid-cols-3 gap-4 mb-2">
                        <div>
                          <div className="text-xs text-deep-clay-500">Premium</div>
                          <div className="font-bold">{formatCurrency(12000)}/year</div>
                        </div>
                        <div>
                          <div className="text-xs text-deep-clay-500">Coverage</div>
                          <div className="font-bold">{formatCurrency(200000)}</div>
                        </div>
                        <div>
                          <div className="text-xs text-deep-clay-500">Expires</div>
                          <div className="font-bold">Nov 15, 2025</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-gray-200 bg-gray-50 rounded-lg opacity-60">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold">Livestock Insurance</div>
                        <div className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded-full">Expired</div>
                      </div>
                      <div className="text-sm text-deep-clay-700 mb-4">Coverage for livestock against disease, theft, and natural calamities.</div>
                      <button className="w-full p-2 border border-earth-green-600 text-earth-green-600 hover:bg-earth-green-50 rounded-md">Renew Policy</button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recommended Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 border border-sun-gold-200 bg-sun-gold-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <Shield className="h-5 w-5 mr-2 text-sun-gold-600" />
                        <div className="font-bold">Weather Index Insurance</div>
                      </div>
                      <div className="text-sm text-deep-clay-700 mb-4">
                        This plan provides payout when rainfall levels fall below or exceed predetermined thresholds, based on your location's specific weather patterns.
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <div className="text-xs text-deep-clay-500">Estimated Premium</div>
                          <div className="font-bold">{formatCurrency(8500)}/year</div>
                        </div>
                        <div>
                          <div className="text-xs text-deep-clay-500">Potential Coverage</div>
                          <div className="font-bold">{formatCurrency(150000)}</div>
                        </div>
                      </div>
                      <button className="w-full p-2 bg-earth-green-600 hover:bg-earth-green-700 text-white rounded-md">Get Quote</button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="savings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PiggyBank className="mr-2 h-5 w-5 text-earth-green-600" />
                      Savings Goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border border-earth-green-200 rounded-lg">
                      <div className="font-bold mb-1">Irrigation System</div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-deep-clay-600">Target: {formatCurrency(120000)}</span>
                        <span className="text-earth-green-600 font-medium">65% complete</span>
                      </div>
                      <Progress value={65} className="h-2 mb-2" indicatorClassName="bg-earth-green-500" />
                      <div className="text-xs text-deep-clay-500">
                        Saved {formatCurrency(78000)} of {formatCurrency(120000)}
                      </div>
                    </div>
                    
                    <div className="p-4 border border-sun-gold-200 rounded-lg">
                      <div className="font-bold mb-1">New Tractor</div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-deep-clay-600">Target: {formatCurrency(450000)}</span>
                        <span className="text-sun-gold-600 font-medium">12% complete</span>
                      </div>
                      <Progress value={12} className="h-2 mb-2" indicatorClassName="bg-sun-gold-500" />
                      <div className="text-xs text-deep-clay-500">
                        Saved {formatCurrency(54000)} of {formatCurrency(450000)}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center">
                    <button className="button-primary flex items-center text-sm">
                      <Plus className="h-4 w-4 mr-1" />
                      <span>Add Savings Goal</span>
                    </button>
                  </CardFooter>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Savings Accounts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-4 border border-cloud-white-300 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold">Farm Investment Account</div>
                        <div className="text-earth-green-600 font-bold">{formatCurrency(132000)}</div>
                      </div>
                      <div className="text-sm text-deep-clay-700 mb-2">Interest Rate: 5% p.a. • Maturity: Dec 15, 2025</div>
                      <div className="flex justify-between">
                        <button className="text-sm text-earth-green-600 hover:text-earth-green-700">Add Funds</button>
                        <button className="text-sm text-earth-green-600 hover:text-earth-green-700">View Details</button>
                      </div>
                    </div>
                    
                    <div className="p-4 border border-cloud-white-300 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-bold">Emergency Fund</div>
                        <div className="text-earth-green-600 font-bold">{formatCurrency(45000)}</div>
                      </div>
                      <div className="text-sm text-deep-clay-700 mb-2">Interest Rate: 3% p.a. • No Fixed Term</div>
                      <div className="flex justify-between">
                        <button className="text-sm text-earth-green-600 hover:text-earth-green-700">Add Funds</button>
                        <button className="text-sm text-earth-green-600 hover:text-earth-green-700">View Details</button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </>
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

export default Finance;
