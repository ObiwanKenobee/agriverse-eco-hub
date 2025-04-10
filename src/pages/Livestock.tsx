
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import { 
  AlertTriangle, 
  ArrowRight, 
  Calendar, 
  PlusCircle, 
  Beef, 
  Syringe, 
  Heart, 
  Clock, 
  Search 
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";

interface LivestockAlert {
  id: string;
  type: 'warning' | 'info' | 'urgent';
  animal: string;
  message: string;
  time: string;
}

interface Animal {
  id: string;
  name: string;
  type: string;
  age: string;
  health: number;
  lastCheck: string;
  nextVaccination: string;
  weight: string;
  image: string;
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
  },
  {
    id: "4",
    type: 'warning',
    animal: 'Cow #105',
    message: 'Weight check recommended',
    time: '1 day ago'
  }
];

const mockAnimals: Animal[] = [
  {
    id: "1",
    name: "Bessie",
    type: "Dairy Cow",
    age: "4 years",
    health: 92,
    lastCheck: "Apr 2, 2025",
    nextVaccination: "May 15, 2025",
    weight: "580 kg",
    image: "https://placehold.co/200x200/e5e7eb/a3a3a3?text=Cow"
  },
  {
    id: "2",
    name: "Daisy",
    type: "Dairy Cow",
    age: "3 years",
    health: 88,
    lastCheck: "Apr 5, 2025",
    nextVaccination: "May 10, 2025",
    weight: "540 kg",
    image: "https://placehold.co/200x200/e5e7eb/a3a3a3?text=Cow"
  },
  {
    id: "3",
    name: "Buttercup",
    type: "Dairy Cow",
    age: "5 years",
    health: 78,
    lastCheck: "Mar 28, 2025",
    nextVaccination: "Apr 22, 2025",
    weight: "610 kg",
    image: "https://placehold.co/200x200/e5e7eb/a3a3a3?text=Cow"
  },
  {
    id: "4",
    name: "Spot",
    type: "Beef Cattle",
    age: "2 years",
    health: 95,
    lastCheck: "Apr 8, 2025",
    nextVaccination: "Jun 12, 2025",
    weight: "480 kg",
    image: "https://placehold.co/200x200/e5e7eb/a3a3a3?text=Cow"
  }
];

const Livestock = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

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

  const getHealthColor = (health: number) => {
    if (health >= 90) return "bg-green-500";
    if (health >= 75) return "bg-earth-green-500";
    if (health >= 60) return "bg-sun-gold-500";
    return "bg-red-500";
  };

  const filteredAnimals = mockAnimals.filter(animal => 
    animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    animal.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-deep-clay-800 mb-6">Livestock Management</h1>
        
        <Tabs defaultValue="herd" className="w-full">
          <TabsList className="mb-6 bg-cloud-white-100 p-1">
            <TabsTrigger value="herd" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <Beef className="mr-2 h-4 w-4" />
              My Herd
            </TabsTrigger>
            <TabsTrigger value="health" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <Heart className="mr-2 h-4 w-4" />
              Health Records
            </TabsTrigger>
            <TabsTrigger value="schedule" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <Calendar className="mr-2 h-4 w-4" />
              Schedule
            </TabsTrigger>
            <TabsTrigger value="alerts" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <AlertTriangle className="mr-2 h-4 w-4" />
              Alerts
            </TabsTrigger>
          </TabsList>
          
          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-12 bg-cloud-white-200 rounded-lg mb-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="h-64 bg-cloud-white-200 rounded-lg"></div>
                <div className="h-64 bg-cloud-white-200 rounded-lg"></div>
                <div className="h-64 bg-cloud-white-200 rounded-lg"></div>
                <div className="h-64 bg-cloud-white-200 rounded-lg"></div>
              </div>
            </div>
          ) : (
            <>
              <TabsContent value="herd" className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-deep-clay-500" />
                    <Input 
                      placeholder="Search animals..." 
                      className="pl-8" 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <button className="button-primary flex items-center text-sm">
                    <PlusCircle className="h-4 w-4 mr-1" />
                    <span>Add Animal</span>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredAnimals.map((animal) => (
                    <Card key={animal.id} className="overflow-hidden">
                      <div className="aspect-square w-full bg-cloud-white-100 flex items-center justify-center">
                        <img 
                          src={animal.image} 
                          alt={animal.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg flex justify-between items-center">
                          <span>{animal.name}</span>
                          <span className="text-xs font-normal text-deep-clay-500">#{animal.id}</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-deep-clay-600">Type:</span>
                          <span className="font-medium">{animal.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-deep-clay-600">Age:</span>
                          <span className="font-medium">{animal.age}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-deep-clay-600">Weight:</span>
                          <span className="font-medium">{animal.weight}</span>
                        </div>
                        <div className="pt-1">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-deep-clay-600">Health:</span>
                            <span className="font-medium">{animal.health}%</span>
                          </div>
                          <Progress 
                            value={animal.health} 
                            className="h-2" 
                            indicatorClassName={getHealthColor(animal.health)} 
                          />
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <button className="w-full text-sm text-earth-green hover:text-earth-green-700 font-medium flex items-center justify-center gap-1">
                          View details <ArrowRight className="h-4 w-4" />
                        </button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="health" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Health Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                        <div className="text-sm text-deep-clay-600 mb-1">Healthy</div>
                        <div className="text-2xl font-bold text-green-600">8</div>
                      </div>
                      <div className="p-4 bg-sun-gold-50 rounded-lg border border-sun-gold-100">
                        <div className="text-sm text-deep-clay-600 mb-1">Monitoring</div>
                        <div className="text-2xl font-bold text-sun-gold-600">3</div>
                      </div>
                      <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                        <div className="text-sm text-deep-clay-600 mb-1">Treatment</div>
                        <div className="text-2xl font-bold text-red-600">1</div>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <div className="text-sm text-deep-clay-600 mb-1">Pregnant</div>
                        <div className="text-2xl font-bold text-blue-600">2</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Syringe className="mr-2 h-5 w-5 text-earth-green-600" />
                      Upcoming Vaccinations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-cloud-white-50 rounded-lg border border-cloud-white-200">
                        <div>
                          <div className="font-medium">Bessie (Cow #123)</div>
                          <div className="text-sm text-deep-clay-600">Foot and Mouth Disease</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-red-600">Apr 15, 2025</div>
                          <div className="text-xs text-deep-clay-500">5 days remaining</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-cloud-white-50 rounded-lg border border-cloud-white-200">
                        <div>
                          <div className="font-medium">Daisy (Cow #145)</div>
                          <div className="text-sm text-deep-clay-600">Brucellosis</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-sun-gold-600">Apr 22, 2025</div>
                          <div className="text-xs text-deep-clay-500">12 days remaining</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-cloud-white-50 rounded-lg border border-cloud-white-200">
                        <div>
                          <div className="font-medium">Buttercup (Cow #118)</div>
                          <div className="text-sm text-deep-clay-600">Anthrax</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-earth-green-600">May 10, 2025</div>
                          <div className="text-xs text-deep-clay-500">30 days remaining</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="schedule" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5 text-earth-green-600" />
                      Upcoming Activities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-3 bg-cloud-white-50 rounded-lg border border-cloud-white-200">
                        <div className="min-w-14 h-14 bg-earth-green-100 rounded-md flex flex-col items-center justify-center">
                          <div className="text-sm font-bold text-earth-green-600">APR</div>
                          <div className="text-lg font-bold text-earth-green-700">12</div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">Veterinary Visit</div>
                          <div className="text-sm text-deep-clay-600 mb-1">Regular checkup for 3 animals</div>
                          <div className="flex items-center text-xs text-deep-clay-500">
                            <Clock className="h-3 w-3 mr-1" />
                            10:00 AM - 12:00 PM
                          </div>
                        </div>
                        <button className="text-earth-green-600 hover:text-earth-green-700">
                          <PlusCircle className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="flex items-start gap-4 p-3 bg-cloud-white-50 rounded-lg border border-cloud-white-200">
                        <div className="min-w-14 h-14 bg-earth-green-100 rounded-md flex flex-col items-center justify-center">
                          <div className="text-sm font-bold text-earth-green-600">APR</div>
                          <div className="text-lg font-bold text-earth-green-700">15</div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">Vaccination Day</div>
                          <div className="text-sm text-deep-clay-600 mb-1">Foot and Mouth Disease for Bessie</div>
                          <div className="flex items-center text-xs text-deep-clay-500">
                            <Clock className="h-3 w-3 mr-1" />
                            9:00 AM - 10:00 AM
                          </div>
                        </div>
                        <button className="text-earth-green-600 hover:text-earth-green-700">
                          <PlusCircle className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="flex items-start gap-4 p-3 bg-cloud-white-50 rounded-lg border border-cloud-white-200">
                        <div className="min-w-14 h-14 bg-earth-green-100 rounded-md flex flex-col items-center justify-center">
                          <div className="text-sm font-bold text-earth-green-600">APR</div>
                          <div className="text-lg font-bold text-earth-green-700">20</div>
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">Herd Weighing</div>
                          <div className="text-sm text-deep-clay-600 mb-1">Monthly weight check for all animals</div>
                          <div className="flex items-center text-xs text-deep-clay-500">
                            <Clock className="h-3 w-3 mr-1" />
                            8:00 AM - 11:00 AM
                          </div>
                        </div>
                        <button className="text-earth-green-600 hover:text-earth-green-700">
                          <PlusCircle className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <button className="w-full p-4 border border-dashed border-earth-green-300 rounded-lg text-earth-green-600 hover:bg-earth-green-50 transition-colors flex items-center justify-center gap-2">
                  <PlusCircle className="h-5 w-5" />
                  <span>Schedule New Activity</span>
                </button>
              </TabsContent>
              
              <TabsContent value="alerts" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>Recent Alerts</span>
                      <div className="flex items-center space-x-1 text-earth-green">
                        <AlertTriangle className="h-5 w-5" />
                        <span className="text-sm">{mockAlerts.length}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Alert Settings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-cloud-white-50 rounded-lg border border-cloud-white-200">
                        <div>
                          <div className="font-medium">Email Notifications</div>
                          <div className="text-sm text-deep-clay-600">Get alerts via email</div>
                        </div>
                        <div className="w-12 h-6 bg-earth-green-600 rounded-full relative flex items-center cursor-pointer">
                          <div className="absolute right-1 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-cloud-white-50 rounded-lg border border-cloud-white-200">
                        <div>
                          <div className="font-medium">SMS Notifications</div>
                          <div className="text-sm text-deep-clay-600">Get alerts via SMS</div>
                        </div>
                        <div className="w-12 h-6 bg-earth-green-600 rounded-full relative flex items-center cursor-pointer">
                          <div className="absolute right-1 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 bg-cloud-white-50 rounded-lg border border-cloud-white-200">
                        <div>
                          <div className="font-medium">App Notifications</div>
                          <div className="text-sm text-deep-clay-600">Get alerts in the app</div>
                        </div>
                        <div className="w-12 h-6 bg-earth-green-600 rounded-full relative flex items-center cursor-pointer">
                          <div className="absolute right-1 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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

export default Livestock;
