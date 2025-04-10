
import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const LifelineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-deep-clay-800 to-deep-clay-900 text-white opacity-0">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          One Lifeline. One Continent. Infinite Intelligence.
        </h2>
        
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12">
          AgriVerse unifies the powers of land, livestock, food, and finance — giving every farmer access to dignity, data, and decisions that matter.
        </p>
        
        <div className="relative max-w-4xl mx-auto h-[300px] md:h-[400px] mb-12">
          {/* Africa map with pulsing data nodes */}
          <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2014/03/25/16/59/africa-297228_1280.png')] bg-contain bg-center bg-no-repeat opacity-30"></div>
          
          {/* Data nodes and connections */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-earth-green rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-sun-gold rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-deep-clay-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
            <line x1="100" y1="100" x2="300" y2="200" stroke="#2E7D32" strokeWidth="1" opacity="0.6" />
            <line x1="300" y1="200" x2="100" y2="300" stroke="#F9A825" strokeWidth="1" opacity="0.6" />
            <line x1="100" y1="300" x2="300" y2="300" stroke="#5D4037" strokeWidth="1" opacity="0.6" />
            <line x1="300" y1="300" x2="100" y2="100" stroke="#2196F3" strokeWidth="1" opacity="0.6" />
          </svg>
          
          {/* Central node */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full animate-pulse-slow flex items-center justify-center">
            <div className="w-4 h-4 bg-earth-green rounded-full"></div>
          </div>
        </div>
        
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
          <Link to="/intelligence">
            Get the Lifeline
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LifelineSection;
