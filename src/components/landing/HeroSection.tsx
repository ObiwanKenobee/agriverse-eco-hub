
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  loading: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ loading }) => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-white overflow-hidden">
      {/* Background layers for parallax effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-earth-green-800 via-earth-green-700 to-deep-clay-800 opacity-90 z-0"
      ></div>
      
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM1ZDQwMzciIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6bTAtMzBWMGgtMnY0aC00djJoNHY0aDJWNmg0VjRoLTR6TTYgMzR2LTRINHY0SDB2Mmg0djRoMnYtNGg0di0ySDZ6TTYgNFYwSDR2NEgwdjJoNHY0aDJWNmg0VjRINnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 z-0"
      ></div>
      
      <div className="container mx-auto px-6 py-20 z-10 text-center">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-4 opacity-0 animate-fade-in" 
            style={{animationDelay: "0.2s", animationFillMode: "forwards"}}>
          Meet the Guardians of Africa's Agricultural Future
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 opacity-0 animate-fade-in"
            style={{animationDelay: "0.4s", animationFillMode: "forwards"}}>
          Four bold ventures. Four ancient spirits. One data lifeline.
        </h2>
        
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-12 opacity-0 animate-fade-in"
           style={{animationDelay: "0.6s", animationFillMode: "forwards"}}>
          Africa's Intelligence Grows From Its Roots.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in"
             style={{animationDelay: "0.8s", animationFillMode: "forwards"}}>
          <Button className="bg-earth-green text-white hover:bg-earth-green-700 text-lg px-8 py-6">
            Explore the Ecosystem
          </Button>
          <Button variant="outline" className="bg-sun-gold text-deep-clay-900 hover:bg-sun-gold-600 border-sun-gold text-lg px-8 py-6">
            Join the Revolution
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#tukalime" className="text-white">
          <ArrowDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
