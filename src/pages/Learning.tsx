
import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import { 
  BookOpen, 
  Video, 
  Headphones, 
  Calendar, 
  Award, 
  Search, 
  Clock, 
  Play, 
  Star, 
  Filter 
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

interface Course {
  id: string;
  title: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  lessons: number;
  instructor: string;
  rating: number;
  enrolled: number;
  progress?: number;
  image: string;
}

const mockCourses: Course[] = [
  {
    id: "1",
    title: "Sustainable Farming Practices",
    category: "Agriculture",
    level: "Beginner",
    duration: "4 hours",
    lessons: 12,
    instructor: "Dr. Sarah Kipsang",
    rating: 4.7,
    enrolled: 1243,
    progress: 68,
    image: "https://placehold.co/400x225/e5e7eb/a3a3a3?text=Sustainable+Farming"
  },
  {
    id: "2",
    title: "Livestock Health Management",
    category: "Livestock",
    level: "Intermediate",
    duration: "6 hours",
    lessons: 18,
    instructor: "Prof. John Mwangi",
    rating: 4.9,
    enrolled: 856,
    progress: 32,
    image: "https://placehold.co/400x225/e5e7eb/a3a3a3?text=Livestock+Health"
  },
  {
    id: "3",
    title: "Advanced Crop Rotation",
    category: "Agriculture",
    level: "Advanced",
    duration: "5 hours",
    lessons: 15,
    instructor: "Dr. Amina Osman",
    rating: 4.8,
    enrolled: 742,
    image: "https://placehold.co/400x225/e5e7eb/a3a3a3?text=Crop+Rotation"
  },
  {
    id: "4",
    title: "Water Management Techniques",
    category: "Agriculture",
    level: "Intermediate",
    duration: "3 hours",
    lessons: 10,
    instructor: "Eng. James Ngugi",
    rating: 4.6,
    enrolled: 925,
    image: "https://placehold.co/400x225/e5e7eb/a3a3a3?text=Water+Management"
  },
  {
    id: "5",
    title: "Profitable Poultry Farming",
    category: "Livestock",
    level: "Beginner",
    duration: "4.5 hours",
    lessons: 14,
    instructor: "Ms. Grace Mutua",
    rating: 4.9,
    enrolled: 1562,
    image: "https://placehold.co/400x225/e5e7eb/a3a3a3?text=Poultry+Farming"
  },
  {
    id: "6",
    title: "Organic Pest Control",
    category: "Agriculture",
    level: "Intermediate",
    duration: "3.5 hours",
    lessons: 11,
    instructor: "Dr. Emmanuel Ochieng",
    rating: 4.7,
    enrolled: 814,
    image: "https://placehold.co/400x225/e5e7eb/a3a3a3?text=Pest+Control"
  }
];

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'webinar' | 'live' | 'workshop';
  presenter: string;
  attendees: number;
  language: string;
  description: string;
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Climate-Smart Agriculture Webinar",
    date: "Apr 15, 2025",
    time: "10:00 AM - 12:00 PM",
    type: "webinar",
    presenter: "Dr. Samuel Kimani, Climate Specialist",
    attendees: 156,
    language: "English, Kiswahili",
    description: "Learn adaptive farming techniques to mitigate climate change impacts on your farm."
  },
  {
    id: "2",
    title: "Live Q&A: Livestock Disease Prevention",
    date: "Apr 20, 2025",
    time: "2:00 PM - 3:30 PM",
    type: "live",
    presenter: "Dr. Fatuma Hassan, Veterinary Expert",
    attendees: 98,
    language: "English, Somali",
    description: "Get your questions answered about preventing common livestock diseases in East Africa."
  },
  {
    id: "3",
    title: "Hands-on Soil Testing Workshop",
    date: "May 5, 2025",
    time: "9:00 AM - 3:00 PM",
    type: "workshop",
    presenter: "Prof. David Mwangi, Soil Scientist",
    attendees: 45,
    language: "English, Kiswahili, Amharic",
    description: "Practical workshop teaching farmers how to test soil quality with both simple and advanced methods."
  }
];

const Learning = () => {
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

  const filteredCourses = mockCourses.filter(course => 
    (searchTerm === "" || 
     course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     course.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
     course.instructor.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === "All" || course.category === selectedCategory)
  );

  const categories = ["All", ...Array.from(new Set(mockCourses.map(course => course.category)))];
  
  const getLevelColor = (level: string) => {
    switch(level) {
      case 'Beginner': return "bg-green-100 text-green-700";
      case 'Intermediate': return "bg-sun-gold-100 text-sun-gold-700";
      case 'Advanced': return "bg-blue-100 text-blue-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getEventTypeColor = (type: string) => {
    switch(type) {
      case 'webinar': return "bg-blue-100 text-blue-700";
      case 'live': return "bg-red-100 text-red-700";
      case 'workshop': return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-deep-clay-800 mb-6">Learning Hub</h1>
        
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="mb-6 bg-cloud-white-100 p-1">
            <TabsTrigger value="courses" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <BookOpen className="mr-2 h-4 w-4" />
              Courses
            </TabsTrigger>
            <TabsTrigger value="videos" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <Video className="mr-2 h-4 w-4" />
              Videos
            </TabsTrigger>
            <TabsTrigger value="podcasts" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <Headphones className="mr-2 h-4 w-4" />
              Podcasts
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <Calendar className="mr-2 h-4 w-4" />
              Live Events
            </TabsTrigger>
            <TabsTrigger value="certificates" className="data-[state=active]:bg-earth-green-600 data-[state=active]:text-white">
              <Award className="mr-2 h-4 w-4" />
              Certificates
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
              <TabsContent value="courses" className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                  <div className="w-full max-w-md">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-deep-clay-500" />
                      <Input 
                        placeholder="Search courses..." 
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
                
                <h2 className="text-lg font-semibold text-deep-clay-800 mb-4">Your Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {mockCourses.slice(0, 2).map((course) => (
                    <Card key={course.id} className="overflow-hidden h-full flex flex-col">
                      <div className="relative aspect-video w-full bg-cloud-white-100">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <button className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                            <Play className="h-6 w-6 text-earth-green-600" />
                          </button>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{course.title}</CardTitle>
                            <div className="text-sm text-deep-clay-500">{course.instructor}</div>
                          </div>
                          <div className="text-xs px-2 py-0.5 rounded-full font-medium ${getLevelColor(course.level)}">
                            <span className={getLevelColor(course.level)}>{course.level}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2 flex-1">
                        <div className="mb-2">
                          <div className="flex justify-between items-center text-sm mb-1">
                            <span>Progress</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" indicatorClassName="bg-earth-green-500" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm text-deep-clay-600">
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {course.lessons} lessons
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {course.duration}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <button className="w-full py-2 bg-earth-green-600 hover:bg-earth-green-700 text-white rounded-md">
                          Continue Learning
                        </button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <h2 className="text-lg font-semibold text-deep-clay-800 mb-4">Recommended Courses</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredCourses.filter(course => !course.progress).map((course) => (
                    <Card key={course.id} className="overflow-hidden h-full flex flex-col">
                      <div className="relative aspect-video w-full bg-cloud-white-100">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <button className="w-12 h-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                            <Play className="h-6 w-6 text-earth-green-600" />
                          </button>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{course.title}</CardTitle>
                            <div className="text-sm text-deep-clay-500">{course.instructor}</div>
                          </div>
                          <div className="text-xs px-2 py-0.5 rounded-full font-medium">
                            <span className={getLevelColor(course.level)}>{course.level}</span>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pb-2 flex-1">
                        <div className="flex items-center mb-2">
                          <div className="flex mr-2">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'fill-sun-gold-500 text-sun-gold-500' : 'text-gray-300'}`} 
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium">{course.rating}</span>
                          <span className="text-xs text-deep-clay-500 ml-1">({course.enrolled})</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-sm text-deep-clay-600">
                          <div className="flex items-center">
                            <BookOpen className="h-4 w-4 mr-1" />
                            {course.lessons} lessons
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {course.duration}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <button className="w-full py-2 bg-earth-green-600 hover:bg-earth-green-700 text-white rounded-md">
                          Enroll Now
                        </button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="videos" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Featured Videos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <div className="relative aspect-video w-full bg-cloud-white-100 rounded-lg overflow-hidden">
                          <img 
                            src="https://placehold.co/640x360/e5e7eb/a3a3a3?text=Crop+Management" 
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <button className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                              <Play className="h-8 w-8 text-earth-green-600" />
                            </button>
                          </div>
                        </div>
                        <h3 className="font-bold">Effective Crop Management During Drought</h3>
                        <div className="text-sm text-deep-clay-500">Dr. Amina Osman • 18:45</div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="relative aspect-video w-full bg-cloud-white-100 rounded-lg overflow-hidden">
                          <img 
                            src="https://placehold.co/640x360/e5e7eb/a3a3a3?text=Dairy+Farming" 
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <button className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                              <Play className="h-8 w-8 text-earth-green-600" />
                            </button>
                          </div>
                        </div>
                        <h3 className="font-bold">Modern Dairy Farming Techniques</h3>
                        <div className="text-sm text-deep-clay-500">Prof. John Mwangi • 25:12</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recently Added</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-48 aspect-video relative rounded-lg overflow-hidden">
                          <img 
                            src="https://placehold.co/300x169/e5e7eb/a3a3a3?text=Irrigation" 
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold">Cost-Effective Irrigation Systems for Small Farms</h3>
                          <div className="text-sm text-deep-clay-500 mb-2">Eng. James Ngugi • 15:30</div>
                          <p className="text-sm text-deep-clay-600">Learn how to set up affordable irrigation systems that save water and increase crop yields, specifically designed for small-scale farmers.</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-48 aspect-video relative rounded-lg overflow-hidden">
                          <img 
                            src="https://placehold.co/300x169/e5e7eb/a3a3a3?text=Beekeeping" 
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold">Beginner's Guide to Beekeeping</h3>
                          <div className="text-sm text-deep-clay-500 mb-2">Ms. Grace Mutua • 22:15</div>
                          <p className="text-sm text-deep-clay-600">Start your beekeeping journey with this comprehensive guide covering hive setup, bee management, and honey harvesting.</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-48 aspect-video relative rounded-lg overflow-hidden">
                          <img 
                            src="https://placehold.co/300x169/e5e7eb/a3a3a3?text=Soil+Testing" 
                            alt="Video Thumbnail"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold">DIY Soil Testing Techniques</h3>
                          <div className="text-sm text-deep-clay-500 mb-2">Prof. David Mwangi • 19:45</div>
                          <p className="text-sm text-deep-clay-600">Simple methods to test your soil's pH, nutrient content, and composition using household items and affordable tools.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="podcasts" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Featured Podcasts</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-cloud-white-50 rounded-lg">
                        <div className="w-24 h-24 bg-earth-green-100 rounded-md flex items-center justify-center">
                          <Headphones className="h-12 w-12 text-earth-green-600" />
                        </div>
                        <div className="flex-1 text-center sm:text-left">
                          <h3 className="font-bold text-lg">AgriTalk with Farmers</h3>
                          <div className="text-sm text-deep-clay-500 mb-2">Weekly Podcast • 45 episodes</div>
                          <p className="text-sm text-deep-clay-600 mb-3">Real conversations with successful farmers sharing their experiences, challenges, and innovative solutions.</p>
                          <button className="px-4 py-2 bg-earth-green-600 hover:bg-earth-green-700 text-white rounded-md">
                            Listen Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Episodes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border border-cloud-white-200 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold">Climate-Smart Agriculture Strategies</h3>
                          <div className="text-xs text-deep-clay-500">45:18</div>
                        </div>
                        <div className="text-sm text-deep-clay-500 mb-2">AgriTalk with Farmers • Episode 45</div>
                        <p className="text-sm text-deep-clay-600 mb-3">Dr. Samuel Kimani discusses practical approaches to adapt farming practices to changing climate patterns.</p>
                        <div className="flex space-x-2">
                          <button className="flex items-center gap-1 px-3 py-1.5 bg-earth-green-600 hover:bg-earth-green-700 text-white text-sm rounded-md">
                            <Play className="h-4 w-4" />
                            <span>Play</span>
                          </button>
                          <button className="flex items-center gap-1 px-3 py-1.5 border border-deep-clay-300 text-deep-clay-600 hover:bg-cloud-white-100 text-sm rounded-md">
                            <BookOpen className="h-4 w-4" />
                            <span>Transcript</span>
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-cloud-white-200 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold">Marketing Your Farm Products</h3>
                          <div className="text-xs text-deep-clay-500">38:42</div>
                        </div>
                        <div className="text-sm text-deep-clay-500 mb-2">AgriTalk with Farmers • Episode 44</div>
                        <p className="text-sm text-deep-clay-600 mb-3">Marketing expert Lisa Wanjiku shares tips on how to effectively market and sell farm products for maximum profit.</p>
                        <div className="flex space-x-2">
                          <button className="flex items-center gap-1 px-3 py-1.5 bg-earth-green-600 hover:bg-earth-green-700 text-white text-sm rounded-md">
                            <Play className="h-4 w-4" />
                            <span>Play</span>
                          </button>
                          <button className="flex items-center gap-1 px-3 py-1.5 border border-deep-clay-300 text-deep-clay-600 hover:bg-cloud-white-100 text-sm rounded-md">
                            <BookOpen className="h-4 w-4" />
                            <span>Transcript</span>
                          </button>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-cloud-white-200 rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-bold">Successful Livestock Management</h3>
                          <div className="text-xs text-deep-clay-500">52:15</div>
                        </div>
                        <div className="text-sm text-deep-clay-500 mb-2">AgriTalk with Farmers • Episode 43</div>
                        <p className="text-sm text-deep-clay-600 mb-3">Veteran farmer Joseph Maina shares his 30 years of experience in managing healthy and productive livestock.</p>
                        <div className="flex space-x-2">
                          <button className="flex items-center gap-1 px-3 py-1.5 bg-earth-green-600 hover:bg-earth-green-700 text-white text-sm rounded-md">
                            <Play className="h-4 w-4" />
                            <span>Play</span>
                          </button>
                          <button className="flex items-center gap-1 px-3 py-1.5 border border-deep-clay-300 text-deep-clay-600 hover:bg-cloud-white-100 text-sm rounded-md">
                            <BookOpen className="h-4 w-4" />
                            <span>Transcript</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="events" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Live Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockEvents.map((event) => (
                        <div key={event.id} className="p-4 border border-cloud-white-200 rounded-lg">
                          <div className="flex flex-col sm:flex-row gap-4">
                            <div className="sm:w-24 sm:h-24 flex-shrink-0 bg-earth-green-100 rounded-md flex flex-col items-center justify-center">
                              <div className="text-sm font-bold text-earth-green-600">
                                {event.date.split(', ')[0].split(' ')[0].toUpperCase()}
                              </div>
                              <div className="text-xl font-bold text-earth-green-700">
                                {event.date.split(', ')[0].split(' ')[1]}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                                <div>
                                  <h3 className="font-bold text-lg">{event.title}</h3>
                                  <div className="text-sm text-deep-clay-500">
                                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getEventTypeColor(event.type)}`}>
                                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                                    </span>
                                    <span className="ml-2">{event.date}, {event.time}</span>
                                  </div>
                                </div>
                              </div>
                              <p className="text-sm text-deep-clay-600 mb-3">{event.description}</p>
                              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm mb-3">
                                <div>
                                  <span className="text-deep-clay-500">Presenter: </span>
                                  <span className="font-medium">{event.presenter}</span>
                                </div>
                                <div>
                                  <span className="text-deep-clay-500">Language: </span>
                                  <span className="font-medium">{event.language}</span>
                                </div>
                                <div>
                                  <span className="text-deep-clay-500">Attendees: </span>
                                  <span className="font-medium">{event.attendees} registered</span>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                <button className="px-4 py-2 bg-earth-green-600 hover:bg-earth-green-700 text-white text-sm rounded-md">
                                  Register Now
                                </button>
                                <button className="px-4 py-2 border border-earth-green-600 text-earth-green-600 hover:bg-earth-green-50 text-sm rounded-md">
                                  Add to Calendar
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Past Events Recordings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <div className="relative aspect-video w-full bg-cloud-white-100 rounded-lg overflow-hidden">
                          <img 
                            src="https://placehold.co/640x360/e5e7eb/a3a3a3?text=Farm+Innovation" 
                            alt="Event Recording"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <button className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                              <Play className="h-8 w-8 text-earth-green-600" />
                            </button>
                          </div>
                        </div>
                        <h3 className="font-bold">Farm Innovation Showcase 2025</h3>
                        <div className="text-sm text-deep-clay-500">March 15, 2025 • 1:45:30</div>
                      </div>
                      
                      <div className="space-y-1">
                        <div className="relative aspect-video w-full bg-cloud-white-100 rounded-lg overflow-hidden">
                          <img 
                            src="https://placehold.co/640x360/e5e7eb/a3a3a3?text=Digital+Farming" 
                            alt="Event Recording"
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <button className="w-16 h-16 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                              <Play className="h-8 w-8 text-earth-green-600" />
                            </button>
                          </div>
                        </div>
                        <h3 className="font-bold">Digital Farming Tools for Small-scale Farmers</h3>
                        <div className="text-sm text-deep-clay-500">February 28, 2025 • 1:12:45</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="certificates" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-center p-6 border border-dashed border-earth-green-300 rounded-lg bg-earth-green-50 mb-6">
                      <Award className="h-16 w-16 text-earth-green-600 mb-2" />
                      <h3 className="text-lg font-bold text-earth-green-700 mb-1">Sustainable Farming Practices</h3>
                      <p className="text-deep-clay-600 text-center mb-4">Certificate awarded on March 25, 2025</p>
                      <div className="flex space-x-3">
                        <button className="px-4 py-2 bg-earth-green-600 hover:bg-earth-green-700 text-white rounded-md">
                          View Certificate
                        </button>
                        <button className="px-4 py-2 border border-earth-green-600 text-earth-green-600 hover:bg-earth-green-50 rounded-md">
                          Download PDF
                        </button>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-4 border border-cloud-white-200 rounded-lg">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <div className="w-16 h-16 bg-sun-gold-100 rounded-full flex items-center justify-center">
                            <Award className="h-8 w-8 text-sun-gold-600" />
                          </div>
                          <div className="flex-1 text-center sm:text-left">
                            <h3 className="font-bold">Organic Pest Control Specialist</h3>
                            <div className="text-sm text-deep-clay-500 mb-2">In progress - 4/11 lessons completed</div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                              <div className="bg-sun-gold-500 h-2 rounded-full" style={{ width: '36%' }}></div>
                            </div>
                            <button className="text-sm text-earth-green-600 hover:text-earth-green-700 font-medium">
                              Continue Course
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 border border-cloud-white-200 rounded-lg">
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                            <Award className="h-8 w-8 text-blue-600" />
                          </div>
                          <div className="flex-1 text-center sm:text-left">
                            <h3 className="font-bold">Water Conservation Expert</h3>
                            <div className="text-sm text-deep-clay-500 mb-2">Not started - 0/10 lessons completed</div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '0%' }}></div>
                            </div>
                            <button className="text-sm text-earth-green-600 hover:text-earth-green-700 font-medium">
                              Start Course
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Career Pathways</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 border border-earth-green-200 bg-earth-green-50 rounded-lg">
                        <h3 className="font-bold text-deep-clay-800 mb-2">Sustainable Farming Specialist</h3>
                        <p className="text-sm text-deep-clay-600 mb-3">Complete this series of 4 courses to become a certified Sustainable Farming Specialist.</p>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mr-2">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-sm">Sustainable Farming Practices</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-gray-200 mr-2"></div>
                            <span className="text-sm">Organic Pest Control</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-gray-200 mr-2"></div>
                            <span className="text-sm">Water Conservation Techniques</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-gray-200 mr-2"></div>
                            <span className="text-sm">Soil Health Management</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-sm mb-1">
                          <span>Progress</span>
                          <span className="font-medium">25%</span>
                        </div>
                        <Progress value={25} className="h-2" indicatorClassName="bg-earth-green-500" />
                      </div>
                      
                      <div className="p-4 border border-cloud-white-200 rounded-lg">
                        <h3 className="font-bold text-deep-clay-800 mb-2">Livestock Management Expert</h3>
                        <p className="text-sm text-deep-clay-600 mb-3">Complete this series of 3 courses to become a certified Livestock Management Expert.</p>
                        <div className="space-y-2 mb-3">
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-gray-200 mr-2"></div>
                            <span className="text-sm">Livestock Health Management</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-gray-200 mr-2"></div>
                            <span className="text-sm">Breeding and Genetics</span>
                          </div>
                          <div className="flex items-center">
                            <div className="w-5 h-5 rounded-full bg-gray-200 mr-2"></div>
                            <span className="text-sm">Nutrition and Feed Management</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center text-sm mb-1">
                          <span>Progress</span>
                          <span className="font-medium">0%</span>
                        </div>
                        <Progress value={0} className="h-2" indicatorClassName="bg-earth-green-500" />
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

export default Learning;
