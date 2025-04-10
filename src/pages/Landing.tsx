
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import HeroSection from "@/components/landing/HeroSection";
import CompanySection from "@/components/landing/CompanySection";
import LifelineSection from "@/components/landing/LifelineSection";
import Footer from "@/components/landing/Footer";

const Landing = () => {
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for joining!",
        description: "You've been added to our waitlist.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection loading={loading} />
      
      {/* Company Sections */}
      <CompanySection 
        id="tukalime"
        spirit="elephant"
        title="Tukalime Kenya: The Elephant of Earth Sovereignty"
        headline="Tukalime is legacy. The elephant moves slowly, but changes landscapes."
        description="Empowering landless and landowners alike to build agro-wealth through smart farming co-ops, youth training academies, and food strategy rooted in wisdom."
        callToAction="Enter the Guild"
        colorClass="bg-gradient-to-br from-deep-clay-100 to-earth-green-50"
        textColorClass="text-deep-clay-800"
        buttonColorClass="bg-earth-green text-white hover:bg-earth-green-600"
        order="normal"
      />
      
      <CompanySection 
        id="krfc"
        spirit="bee"
        title="KRFC: The Bee of Food Equity"
        headline="KRFC builds ecosystems where everyone eats."
        description="Disrupting last-mile logistics with drone delivery, youth-run food malls, and nutrition intelligence that maps what we grow to what we need."
        callToAction="Fly into the Hive"
        colorClass="bg-gradient-to-br from-sun-gold-50 to-sun-gold-100"
        textColorClass="text-deep-clay-800"
        buttonColorClass="bg-sun-gold-600 text-deep-clay-900 hover:bg-sun-gold-700"
        order="reverse"
      />
      
      <CompanySection 
        id="digicow"
        spirit="leopard"
        title="Digicow Ltd: The Leopard of Livestock Intelligence"
        headline="Digicow sees what others miss. Precision in every heartbeat."
        description="Building Africa's first livestock blockchain — digitized vet services, health trackers, and dairy AI that turns each cow into a smart asset."
        callToAction="Track the Wild Mind"
        colorClass="bg-gradient-to-br from-cloud-white-100 to-cloud-white-200"
        textColorClass="text-deep-clay-800"
        buttonColorClass="bg-deep-clay-700 text-white hover:bg-deep-clay-800"
        order="normal"
      />
      
      <CompanySection 
        id="pesira"
        spirit="hawk"
        title="Pesira Ltd: The Hawk of Climate Finance"
        headline="Pesira sees beyond the storm. It finances futures."
        description="AI-powered fintech meets microinsurance — built on behavioral data, weather, and smart risk models. Real-time capital for real-time challenges."
        callToAction="Fly with the Future"
        colorClass="bg-gradient-to-br from-blue-50 to-green-50"
        textColorClass="text-deep-clay-800"
        buttonColorClass="bg-blue-600 text-white hover:bg-blue-700"
        order="reverse"
      />
      
      {/* Lifeline Section */}
      <LifelineSection />
      
      {/* Footer */}
      <Footer handleSubscribe={handleSubscribe} email={email} setEmail={setEmail} />
    </div>
  );
};

export default Landing;
