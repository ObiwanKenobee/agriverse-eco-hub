
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Globe, 
  Menu, 
  X, 
  User, 
  Bell, 
  ChevronDown,
  Home
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "en", name: "English" },
  { code: "sw", name: "Kiswahili" },
  { code: "am", name: "Amharic" },
  { code: "yo", name: "Yoruba" },
  { code: "ar", name: "Arabic" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b border-cloud-white-300 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-earth-green-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="font-bold text-xl text-deep-clay-800">AgriVerse</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
            <Home size={18} />
            Home
          </Link>
          <Link to="/dashboard" className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
            Dashboard
          </Link>
          <Link to="/intelligence" className={`nav-item ${location.pathname === '/intelligence' ? 'active' : ''}`}>
            Intelligence
          </Link>
          <Link to="/livestock" className={`nav-item ${location.pathname === '/livestock' ? 'active' : ''}`}>
            Livestock
          </Link>
          <Link to="/finance" className={`nav-item ${location.pathname === '/finance' ? 'active' : ''}`}>
            Finance
          </Link>
          <Link to="/marketplace" className={`nav-item ${location.pathname === '/marketplace' ? 'active' : ''}`}>
            Marketplace
          </Link>
          <Link to="/learning" className={`nav-item ${location.pathname === '/learning' ? 'active' : ''}`}>
            Learning
          </Link>
        </nav>

        {/* User Controls */}
        <div className="hidden md:flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 text-deep-clay-700 hover:text-earth-green">
              <Globe className="h-5 w-5" />
              <span className="text-sm">{currentLanguage.name}</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  onClick={() => setCurrentLanguage(lang)}
                  className="cursor-pointer"
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <button className="text-deep-clay-700 hover:text-earth-green relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-sun-gold-600 rounded-full text-white text-xs flex items-center justify-center">3</span>
          </button>

          <button className="flex items-center space-x-2 text-deep-clay-800 hover:text-earth-green">
            <div className="w-8 h-8 rounded-full bg-earth-green-100 flex items-center justify-center">
              <User className="h-4 w-4 text-earth-green-700" />
            </div>
            <span className="text-sm font-medium">Jane Farmer</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-deep-clay-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white p-4 border-t border-cloud-white-300">
          <nav className="flex flex-col space-y-3">
            <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>
              <Home size={18} />
              Home
            </Link>
            <Link to="/dashboard" className={`nav-item ${location.pathname === '/dashboard' ? 'active' : ''}`}>
              Dashboard
            </Link>
            <Link to="/intelligence" className={`nav-item ${location.pathname === '/intelligence' ? 'active' : ''}`}>
              Intelligence
            </Link>
            <Link to="/livestock" className={`nav-item ${location.pathname === '/livestock' ? 'active' : ''}`}>
              Livestock
            </Link>
            <Link to="/finance" className={`nav-item ${location.pathname === '/finance' ? 'active' : ''}`}>
              Finance
            </Link>
            <Link to="/marketplace" className={`nav-item ${location.pathname === '/marketplace' ? 'active' : ''}`}>
              Marketplace
            </Link>
            <Link to="/learning" className={`nav-item ${location.pathname === '/learning' ? 'active' : ''}`}>
              Learning
            </Link>
          </nav>
          
          <div className="mt-4 flex items-center space-x-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-deep-clay-700 hover:text-earth-green">
                <Globe className="h-5 w-5" />
                <span className="text-sm">{currentLanguage.name}</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    onClick={() => setCurrentLanguage(lang)}
                    className="cursor-pointer"
                  >
                    {lang.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <button className="text-deep-clay-700 hover:text-earth-green relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-sun-gold-600 rounded-full text-white text-xs flex items-center justify-center">3</span>
            </button>

            <button className="flex items-center space-x-2 text-deep-clay-800 hover:text-earth-green">
              <div className="w-8 h-8 rounded-full bg-earth-green-100 flex items-center justify-center">
                <User className="h-4 w-4 text-earth-green-700" />
              </div>
              <span className="text-sm font-medium">Jane Farmer</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
