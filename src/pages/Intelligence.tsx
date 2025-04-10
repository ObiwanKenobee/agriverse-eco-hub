
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  LineChart, 
  Leaf, 
  Droplets, 
  MountainSnow, 
  Database, 
  BarChart 
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Intelligence = () => {
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
        <h1 className="text-2xl font-bold text-deep-clay-800 mb-6">Farm Intelligence</h1>
        
        <Tabs defaultValue="soil" className="w-full">
          <TabsList className="mb-6 bg-cloud-white-100 p-1">
            <TabsTrigger value="soil" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <Droplets className="mr-2 h-4 w-4" />
              Soil Diagnostics
            </TabsTrigger>
            <TabsTrigger value="crops" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <Leaf className="mr-2 h-4 w-4" />
              Crop Suggestions
            </TabsTrigger>
            <TabsTrigger value="yield" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <BarChart3 className="mr-2 h-4 w-4" />
              Yield History
            </TabsTrigger>
            <TabsTrigger value="comparisons" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <LineChart className="mr-2 h-4 w-4" />
              Regional Comparisons
            </TabsTrigger>
          </TabsList>
          
          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-48 bg-cloud-white-200 rounded-lg mb-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="h-32 bg-cloud-white-200 rounded-lg"></div>
                <div className="h-32 bg-cloud-white-200 rounded-lg"></div>
                <div className="h-32 bg-cloud-white-200 rounded-lg"></div>
              </div>
            </div>
          ) : (
            <>
              <TabsContent value="soil" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MountainSnow className="mr-2 h-5 w-5 text-earth-green-600" />
                      Soil Health Overview
                    </CardTitle>
                    <CardDescription>Last updated: April 8, 2025</CardDescription>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-sm font-medium text-deep-clay-600 mb-2">Nitrogen (N)</h3>
                      <Progress value={68} className="h-2 mb-1" indicatorClassName="bg-blue-500" />
                      <p className="text-xs text-deep-clay-500">68% - Good levels</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-deep-clay-600 mb-2">Phosphorus (P)</h3>
                      <Progress value={42} className="h-2 mb-1" indicatorClassName="bg-orange-500" />
                      <p className="text-xs text-deep-clay-500">42% - Needs attention</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-deep-clay-600 mb-2">Potassium (K)</h3>
                      <Progress value={85} className="h-2 mb-1" indicatorClassName="bg-green-500" />
                      <p className="text-xs text-deep-clay-500">85% - Excellent</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <button className="text-sm text-earth-green-600 hover:text-earth-green-700 font-medium">View detailed soil analysis</button>
                  </CardFooter>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">pH Levels</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center items-center h-40">
                        <div className="relative w-40 h-40 rounded-full border-8 border-earth-green-100 flex items-center justify-center">
                          <div className="text-3xl font-bold text-earth-green-600">6.5</div>
                          <div className="text-xs text-deep-clay-500 mt-2">Slightly Acidic</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Moisture Content</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Current</span>
                            <span className="font-medium">62%</span>
                          </div>
                          <Progress value={62} className="h-2" indicatorClassName="bg-blue-500" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Optimal</span>
                            <span className="font-medium">70%</span>
                          </div>
                          <Progress value={70} className="h-2" indicatorClassName="bg-gray-300" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="crops" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="border-l-4 border-l-earth-green-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Maize</CardTitle>
                      <CardDescription>Highly recommended</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-deep-clay-700 mb-4">Your soil composition is ideal for maize cultivation this season.</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-deep-clay-600">Yield potential:</span>
                        <span className="font-medium">High</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <button className="text-sm text-earth-green-600 hover:text-earth-green-700 font-medium">View planting guide</button>
                    </CardFooter>
                  </Card>
                  
                  <Card className="border-l-4 border-l-sun-gold-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Beans</CardTitle>
                      <CardDescription>Recommended</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-deep-clay-700 mb-4">Beans can help restore nitrogen levels in your soil.</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-deep-clay-600">Yield potential:</span>
                        <span className="font-medium">Medium</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <button className="text-sm text-earth-green-600 hover:text-earth-green-700 font-medium">View planting guide</button>
                    </CardFooter>
                  </Card>
                  
                  <Card className="border-l-4 border-l-blue-500">
                    <CardHeader>
                      <CardTitle className="text-lg">Sweet Potatoes</CardTitle>
                      <CardDescription>Consider</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-deep-clay-700 mb-4">Sweet potatoes are drought resistant and may perform well.</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-deep-clay-600">Yield potential:</span>
                        <span className="font-medium">Medium</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <button className="text-sm text-earth-green-600 hover:text-earth-green-700 font-medium">View planting guide</button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="yield" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Yearly Yield History</CardTitle>
                    <CardDescription>Your farm's performance over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-cloud-white-100 rounded-lg">
                      <div className="text-center">
                        <Database className="h-10 w-10 text-earth-green-300 mx-auto mb-2" />
                        <p className="text-deep-clay-600">Chart visualization would appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Maize</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-earth-green-600 mb-1">4.8<span className="text-sm font-normal text-deep-clay-500 ml-1">tons/ha</span></div>
                      <div className="text-sm text-earth-green-600">↑ 12% from last season</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Beans</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-earth-green-600 mb-1">1.2<span className="text-sm font-normal text-deep-clay-500 ml-1">tons/ha</span></div>
                      <div className="text-sm text-red-500">↓ 5% from last season</div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Tomatoes</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-earth-green-600 mb-1">18<span className="text-sm font-normal text-deep-clay-500 ml-1">tons/ha</span></div>
                      <div className="text-sm text-earth-green-600">↑ 8% from last season</div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="comparisons" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Regional Yield Comparison</CardTitle>
                    <CardDescription>How your farm compares to others in your region</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-center justify-center bg-cloud-white-100 rounded-lg">
                      <div className="text-center">
                        <BarChart className="h-10 w-10 text-earth-green-300 mx-auto mb-2" />
                        <p className="text-deep-clay-600">Comparison chart would appear here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Your Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Overall Productivity</span>
                          <span className="font-medium">78%</span>
                        </div>
                        <Progress value={78} className="h-2" indicatorClassName="bg-earth-green-500" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Resource Efficiency</span>
                          <span className="font-medium">65%</span>
                        </div>
                        <Progress value={65} className="h-2" indicatorClassName="bg-earth-green-500" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Sustainability Score</span>
                          <span className="font-medium">82%</span>
                        </div>
                        <Progress value={82} className="h-2" indicatorClassName="bg-earth-green-500" />
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Regional Average</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Overall Productivity</span>
                          <span className="font-medium">71%</span>
                        </div>
                        <Progress value={71} className="h-2" indicatorClassName="bg-gray-400" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Resource Efficiency</span>
                          <span className="font-medium">68%</span>
                        </div>
                        <Progress value={68} className="h-2" indicatorClassName="bg-gray-400" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Sustainability Score</span>
                          <span className="font-medium">74%</span>
                        </div>
                        <Progress value={74} className="h-2" indicatorClassName="bg-gray-400" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </>
          )}
        </Tabs>
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

export default Intelligence;
