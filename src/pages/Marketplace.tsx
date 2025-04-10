
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import { 
  ShoppingBag, 
  Tag, 
  Package, 
  Map, 
  Truck, 
  Search, 
  Filter, 
  ChevronDown, 
  Star, 
  Heart, 
  BarChart2 
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  seller: string;
  location: string;
  rating: number;
  image: string;
  distance: string;
  available: string;
}

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Maize Seeds",
    category: "Seeds",
    price: 1200,
    unit: "per kg",
    seller: "AgroSupply Ltd",
    location: "Nairobi",
    rating: 4.8,
    image: "https://placehold.co/300x200/e5e7eb/a3a3a3?text=Maize+Seeds",
    distance: "25 km",
    available: "500 kg"
  },
  {
    id: "2",
    name: "Organic Fertilizer",
    category: "Fertilizer",
    price: 2500,
    unit: "per 50kg bag",
    seller: "EcoFarm Solutions",
    location: "Nakuru",
    rating: 4.5,
    image: "https://placehold.co/300x200/e5e7eb/a3a3a3?text=Fertilizer",
    distance: "40 km",
    available: "200 bags"
  },
  {
    id: "3",
    name: "Tractor Rental",
    category: "Equipment",
    price: 5000,
    unit: "per day",
    seller: "MechaFarm Services",
    location: "Eldoret",
    rating: 4.2,
    image: "https://placehold.co/300x200/e5e7eb/a3a3a3?text=Tractor",
    distance: "15 km",
    available: "3 available"
  },
  {
    id: "4",
    name: "Fresh Tomatoes",
    category: "Produce",
    price: 120,
    unit: "per kg",
    seller: "Sunrise Farms",
    location: "Kiambu",
    rating: 4.6,
    image: "https://placehold.co/300x200/e5e7eb/a3a3a3?text=Tomatoes",
    distance: "8 km",
    available: "200 kg"
  },
  {
    id: "5",
    name: "Milk Collection Service",
    category: "Services",
    price: 45,
    unit: "per liter",
    seller: "Dairy Connect Co-op",
    location: "Meru",
    rating: 4.7,
    image: "https://placehold.co/300x200/e5e7eb/a3a3a3?text=Milk",
    distance: "12 km",
    available: "Unlimited"
  },
  {
    id: "6",
    name: "Chicken Feed",
    category: "Livestock Feed",
    price: 1800,
    unit: "per 50kg bag",
    seller: "PoultryMax Supplies",
    location: "Thika",
    rating: 4.4,
    image: "https://placehold.co/300x200/e5e7eb/a3a3a3?text=Chicken+Feed",
    distance: "30 km",
    available: "150 bags"
  }
];

interface SellingItem {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  quantity: string;
  status: 'active' | 'pending' | 'sold';
  image: string;
  views: number;
  interests: number;
}

const mockSellingItems: SellingItem[] = [
  {
    id: "1",
    name: "Fresh Maize",
    category: "Grains",
    price: 35,
    unit: "per kg",
    quantity: "1,500 kg",
    status: 'active',
    image: "https://placehold.co/300x200/e5e7eb/a3a3a3?text=Maize",
    views: 42,
    interests: 5
  },
  {
    id: "2",
    name: "Dairy Milk",
    category: "Dairy",
    price: 60,
    unit: "per liter",
    quantity: "40 liters daily",
    status: 'active',
    image: "https://placehold.co/300x200/e5e7eb/a3a3a3?text=Milk",
    views: 28,
    interests: 3
  },
  {
    id: "3",
    name: "Chicken Eggs",
    category: "Poultry",
    price: 15,
    unit: "per egg",
    quantity: "120 eggs weekly",
    status: 'pending',
    image: "https://placehold.co/300x200/e5e7eb/a3a3a3?text=Eggs",
    views: 12,
    interests: 1
  }
];

const Marketplace = () => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
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

  const filteredProducts = mockProducts.filter(product => 
    (searchTerm === "" || 
     product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
     product.seller.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === "All" || product.category === selectedCategory)
  );

  const categories = ["All", ...Array.from(new Set(mockProducts.map(product => product.category)))];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-deep-clay-800 mb-6">Marketplace</h1>
        
        <Tabs defaultValue="buy" className="w-full">
          <TabsList className="mb-6 bg-cloud-white-100 p-1">
            <TabsTrigger value="buy" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <ShoppingBag className="mr-2 h-4 w-4" />
              Buy
            </TabsTrigger>
            <TabsTrigger value="sell" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <Tag className="mr-2 h-4 w-4" />
              Sell
            </TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <Package className="mr-2 h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="logistics" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <Truck className="mr-2 h-4 w-4" />
              Logistics
            </TabsTrigger>
          </TabsList>
          
          {loading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-12 bg-cloud-white-200 rounded-lg mb-4"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="h-80 bg-cloud-white-200 rounded-lg"></div>
                <div className="h-80 bg-cloud-white-200 rounded-lg"></div>
                <div className="h-80 bg-cloud-white-200 rounded-lg"></div>
              </div>
            </div>
          ) : (
            <>
              <TabsContent value="buy" className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div className="w-full max-w-md">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-deep-clay-500" />
                      <Input 
                        placeholder="Search products, sellers, or categories..." 
                        className="pl-8" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <button className="flex items-center gap-1 px-3 py-2 border border-cloud-white-300 rounded-md bg-white text-sm">
                        <Filter className="h-4 w-4 text-deep-clay-600" />
                        <span>Filter</span>
                        <ChevronDown className="h-3 w-3 text-deep-clay-600" />
                      </button>
                    </div>
                    
                    <div className="relative">
                      <button className="flex items-center gap-1 px-3 py-2 border border-cloud-white-300 rounded-md bg-white text-sm">
                        <Map className="h-4 w-4 text-deep-clay-600" />
                        <span>Map View</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {categories.map((category) => (
                    <button 
                      key={category}
                      className={`px-3 py-1.5 text-sm rounded-full ${
                        selectedCategory === category 
                          ? 'bg-earth-green-600 text-white' 
                          : 'bg-cloud-white-100 text-deep-clay-700 hover:bg-cloud-white-200'
                      }`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="overflow-hidden h-full flex flex-col">
                      <div className="aspect-video w-full bg-cloud-white-100 relative">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                        <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                          <Heart className="h-4 w-4 text-deep-clay-600 hover:text-red-500" />
                        </button>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{product.name}</CardTitle>
                            <div className="text-sm text-deep-clay-500">{product.category}</div>
                          </div>
                          <div className="text-xl font-bold text-earth-green-600">
                            {formatCurrency(product.price)}
                            <span className="text-xs font-normal text-deep-clay-500"> {product.unit}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm flex-1">
                        <div className="flex justify-between">
                          <span className="text-deep-clay-600">Seller:</span>
                          <span className="font-medium">{product.seller}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-deep-clay-600">Location:</span>
                          <span className="font-medium">{product.location} ({product.distance})</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-deep-clay-600">Available:</span>
                          <span className="font-medium">{product.available}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-deep-clay-600">Rating:</span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-sun-gold-500 text-sun-gold-500 mr-1" />
                            <span className="font-medium">{product.rating}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <button className="w-full py-2 bg-earth-green-600 hover:bg-earth-green-700 text-white rounded-md">
                          Contact Seller
                        </button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="sell" className="space-y-6">
                <div className="p-6 border border-dashed border-earth-green-300 rounded-lg bg-earth-green-50 mb-6">
                  <h3 className="text-lg font-bold text-earth-green-700 mb-2">List Your Products</h3>
                  <p className="text-deep-clay-600 mb-4">Share what you're selling with buyers in your area and beyond.</p>
                  <button className="px-4 py-2 bg-earth-green-600 hover:bg-earth-green-700 text-white rounded-md">
                    + Add New Listing
                  </button>
                </div>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Tag className="mr-2 h-5 w-5 text-earth-green-600" />
                      Your Listings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockSellingItems.map((item) => (
                        <div key={item.id} className="flex flex-col sm:flex-row gap-4 p-4 border border-cloud-white-200 rounded-lg">
                          <div className="w-full sm:w-32 h-32 bg-cloud-white-100 rounded-md overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                              <div>
                                <h3 className="font-bold text-deep-clay-800">{item.name}</h3>
                                <div className="text-sm text-deep-clay-500">{item.category}</div>
                              </div>
                              <div className="text-lg font-bold text-earth-green-600 mt-1 sm:mt-0">
                                {formatCurrency(item.price)}
                                <span className="text-xs font-normal text-deep-clay-500"> {item.unit}</span>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                              <div>
                                <span className="text-deep-clay-600">Quantity: </span>
                                <span className="font-medium">{item.quantity}</span>
                              </div>
                              <div>
                                <span className="text-deep-clay-600">Status: </span>
                                <span className={`font-medium ${
                                  item.status === 'active' ? 'text-green-600' : 
                                  item.status === 'pending' ? 'text-sun-gold-600' : 'text-deep-clay-500'
                                }`}>
                                  {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                                </span>
                              </div>
                              <div>
                                <span className="text-deep-clay-600">Views: </span>
                                <span className="font-medium">{item.views}</span>
                              </div>
                              <div>
                                <span className="text-deep-clay-600">Interests: </span>
                                <span className="font-medium">{item.interests}</span>
                              </div>
                            </div>
                            <div className="flex flex-wrap gap-2">
                              <button className="px-3 py-1.5 bg-earth-green-600 hover:bg-earth-green-700 text-white text-sm rounded">
                                Edit
                              </button>
                              <button className="px-3 py-1.5 bg-white border border-earth-green-600 text-earth-green-600 hover:bg-earth-green-50 text-sm rounded">
                                View Details
                              </button>
                              <button className="px-3 py-1.5 bg-white border border-deep-clay-300 text-deep-clay-600 hover:bg-cloud-white-100 text-sm rounded">
                                <BarChart2 className="h-4 w-4 inline-block mr-1" />
                                Analytics
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Market Insights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="p-4 border border-cloud-white-200 rounded-lg bg-cloud-white-50">
                        <div className="text-2xl font-bold text-earth-green-600">+15%</div>
                        <div className="text-sm text-deep-clay-600">Price increase for maize in your region</div>
                      </div>
                      <div className="p-4 border border-cloud-white-200 rounded-lg bg-cloud-white-50">
                        <div className="text-2xl font-bold text-sun-gold-600">High</div>
                        <div className="text-sm text-deep-clay-600">Current demand for dairy products</div>
                      </div>
                      <div className="p-4 border border-cloud-white-200 rounded-lg bg-cloud-white-50">
                        <div className="text-2xl font-bold text-deep-clay-600">42</div>
                        <div className="text-sm text-deep-clay-600">Potential buyers in your area</div>
                      </div>
                    </div>
                    <button className="w-full text-sm text-earth-green-600 hover:text-earth-green-700 font-medium">
                      View detailed market analysis
                    </button>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="orders" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border border-cloud-white-200 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                          <div>
                            <div className="text-xs text-deep-clay-500">Order #AG58291</div>
                            <div className="font-bold">Premium Maize Seeds (5kg)</div>
                          </div>
                          <div className="text-sm mt-1 sm:mt-0">
                            <span className="font-medium text-green-600 px-2 py-0.5 bg-green-50 rounded-full">Delivered</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                          <div>
                            <span className="text-deep-clay-600">Date: </span>
                            <span className="font-medium">Apr 3, 2025</span>
                          </div>
                          <div>
                            <span className="text-deep-clay-600">Seller: </span>
                            <span className="font-medium">AgroSupply Ltd</span>
                          </div>
                          <div>
                            <span className="text-deep-clay-600">Total: </span>
                            <span className="font-medium">{formatCurrency(6000)}</span>
                          </div>
                          <div>
                            <span className="text-deep-clay-600">Payment: </span>
                            <span className="font-medium">M-Pesa</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button className="px-3 py-1.5 bg-white border border-earth-green-600 text-earth-green-600 hover:bg-earth-green-50 text-sm rounded">
                            View Details
                          </button>
                          <button className="px-3 py-1.5 bg-white border border-deep-clay-300 text-deep-clay-600 hover:bg-cloud-white-100 text-sm rounded">
                            Contact Seller
                          </button>
                          <button className="px-3 py-1.5 bg-white border border-deep-clay-300 text-deep-clay-600 hover:bg-cloud-white-100 text-sm rounded">
                            Buy Again
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-cloud-white-200 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                          <div>
                            <div className="text-xs text-deep-clay-500">Order #AG58204</div>
                            <div className="font-bold">Organic Fertilizer (2 bags)</div>
                          </div>
                          <div className="text-sm mt-1 sm:mt-0">
                            <span className="font-medium text-sun-gold-600 px-2 py-0.5 bg-sun-gold-50 rounded-full">In Transit</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                          <div>
                            <span className="text-deep-clay-600">Date: </span>
                            <span className="font-medium">Apr 8, 2025</span>
                          </div>
                          <div>
                            <span className="text-deep-clay-600">Seller: </span>
                            <span className="font-medium">EcoFarm Solutions</span>
                          </div>
                          <div>
                            <span className="text-deep-clay-600">Total: </span>
                            <span className="font-medium">{formatCurrency(5000)}</span>
                          </div>
                          <div>
                            <span className="text-deep-clay-600">Payment: </span>
                            <span className="font-medium">AgriWallet</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button className="px-3 py-1.5 bg-white border border-earth-green-600 text-earth-green-600 hover:bg-earth-green-50 text-sm rounded">
                            Track Order
                          </button>
                          <button className="px-3 py-1.5 bg-white border border-deep-clay-300 text-deep-clay-600 hover:bg-cloud-white-100 text-sm rounded">
                            Contact Seller
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Sales History</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border border-cloud-white-200 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
                          <div>
                            <div className="text-xs text-deep-clay-500">Order #AG57921</div>
                            <div className="font-bold">Fresh Maize (500kg)</div>
                          </div>
                          <div className="text-sm mt-1 sm:mt-0">
                            <span className="font-medium text-green-600 px-2 py-0.5 bg-green-50 rounded-full">Completed</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
                          <div>
                            <span className="text-deep-clay-600">Date: </span>
                            <span className="font-medium">Mar 30, 2025</span>
                          </div>
                          <div>
                            <span className="text-deep-clay-600">Buyer: </span>
                            <span className="font-medium">Nairobi Grain Co.</span>
                          </div>
                          <div>
                            <span className="text-deep-clay-600">Total: </span>
                            <span className="font-medium">{formatCurrency(17500)}</span>
                          </div>
                          <div>
                            <span className="text-deep-clay-600">Payment: </span>
                            <span className="font-medium">Bank Transfer</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <button className="px-3 py-1.5 bg-white border border-earth-green-600 text-earth-green-600 hover:bg-earth-green-50 text-sm rounded">
                            View Details
                          </button>
                          <button className="px-3 py-1.5 bg-white border border-deep-clay-300 text-deep-clay-600 hover:bg-cloud-white-100 text-sm rounded">
                            Contact Buyer
                          </button>
                          <button className="px-3 py-1.5 bg-white border border-deep-clay-300 text-deep-clay-600 hover:bg-cloud-white-100 text-sm rounded">
                            Generate Invoice
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="logistics" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Delivery Options</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border border-earth-green-200 bg-earth-green-50 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-earth-green-100 flex items-center justify-center">
                            <Truck className="h-6 w-6 text-earth-green-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-deep-clay-800 mb-1">AgriVerse Transport</h3>
                            <p className="text-sm text-deep-clay-600 mb-2">Our official delivery network with GPS tracking and reliable service.</p>
                            <div className="text-sm">
                              <span className="font-medium">Delivery Fee: </span>
                              <span>{formatCurrency(350)} per delivery up to 50 km</span>
                            </div>
                          </div>
                          <button className="px-4 py-2 bg-earth-green-600 hover:bg-earth-green-700 text-white text-sm rounded sm:self-start">
                            Book Now
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-cloud-white-200 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-cloud-white-100 flex items-center justify-center">
                            <Truck className="h-6 w-6 text-deep-clay-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-deep-clay-800 mb-1">Local Transporters</h3>
                            <p className="text-sm text-deep-clay-600 mb-2">Connect with verified independent transporters in your area.</p>
                            <div className="text-sm">
                              <span className="font-medium">Delivery Fee: </span>
                              <span>Negotiable based on distance and load</span>
                            </div>
                          </div>
                          <button className="px-4 py-2 border border-earth-green-600 text-earth-green-600 hover:bg-earth-green-50 text-sm rounded sm:self-start">
                            Find Transporters
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-cloud-white-200 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-cloud-white-100 flex items-center justify-center">
                            <Map className="h-6 w-6 text-deep-clay-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-deep-clay-800 mb-1">Collection Points</h3>
                            <p className="text-sm text-deep-clay-600 mb-2">Drop off or pick up your goods at designated collection points.</p>
                            <div className="text-sm">
                              <span className="font-medium">Fee: </span>
                              <span>{formatCurrency(100)} handling fee per transaction</span>
                            </div>
                          </div>
                          <button className="px-4 py-2 border border-earth-green-600 text-earth-green-600 hover:bg-earth-green-50 text-sm rounded sm:self-start">
                            View Locations
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Active Shipments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 border border-sun-gold-200 bg-sun-gold-50 rounded-lg space-y-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="text-xs text-deep-clay-500">Tracking #TRK289145</div>
                          <div className="font-bold">Organic Fertilizer (2 bags)</div>
                          <div className="text-sm text-deep-clay-600 mt-1">EcoFarm Solutions → Your Farm</div>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium text-sun-gold-600 px-2 py-0.5 bg-sun-gold-100 rounded-full">In Transit</span>
                        </div>
                      </div>
                      
                      <div className="relative pt-2">
                        <div className="flex mb-2">
                          <div className="w-1/4 text-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full mx-auto"></div>
                            <div className="text-xs mt-1">Packed</div>
                          </div>
                          <div className="w-1/4 text-center">
                            <div className="w-4 h-4 bg-green-500 rounded-full mx-auto"></div>
                            <div className="text-xs mt-1">Shipped</div>
                          </div>
                          <div className="w-1/4 text-center">
                            <div className="w-4 h-4 bg-sun-gold-500 rounded-full mx-auto animate-pulse"></div>
                            <div className="text-xs mt-1">In Transit</div>
                          </div>
                          <div className="w-1/4 text-center">
                            <div className="w-4 h-4 bg-gray-300 rounded-full mx-auto"></div>
                            <div className="text-xs mt-1">Delivered</div>
                          </div>
                        </div>
                        <div className="absolute top-4 left-[12.5%] right-[12.5%] h-0.5 bg-gray-200">
                          <div className="absolute left-0 h-0.5 bg-green-500 w-[66%]"></div>
                        </div>
                      </div>
                      
                      <div className="text-sm">
                        <div><span className="font-medium">Estimated Delivery: </span>Apr 10, 2025</div>
                        <div><span className="font-medium">Current Location: </span>Nakuru Town</div>
                        <div className="mt-2">
                          <button className="px-3 py-1.5 bg-earth-green-600 hover:bg-earth-green-700 text-white text-sm rounded">
                            Track on Map
                          </button>
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

export default Marketplace;
