
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FooterProps {
  handleSubscribe: (e: React.FormEvent) => void;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const Footer: React.FC<FooterProps> = ({ handleSubscribe, email, setEmail }) => {
  return (
    <footer className="bg-deep-clay-50 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-earth-green-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <h3 className="font-bold text-xl text-deep-clay-800">AgriVerse</h3>
            </div>
            <p className="text-deep-clay-600 mb-4">Built by Africans. For Africa.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-deep-clay-500 hover:text-earth-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-deep-clay-500 hover:text-earth-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-deep-clay-500 hover:text-earth-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-deep-clay-500 hover:text-earth-green transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-deep-clay-800 mb-4">Our Companies</h3>
            <ul className="space-y-2">
              <li><a href="#tukalime" className="text-deep-clay-600 hover:text-earth-green">Tukalime Kenya</a></li>
              <li><a href="#krfc" className="text-deep-clay-600 hover:text-earth-green">KRFC</a></li>
              <li><a href="#digicow" className="text-deep-clay-600 hover:text-earth-green">Digicow Ltd</a></li>
              <li><a href="#pesira" className="text-deep-clay-600 hover:text-earth-green">Pesira Ltd</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-deep-clay-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-deep-clay-600 hover:text-earth-green">Whitepapers</a></li>
              <li><a href="#" className="text-deep-clay-600 hover:text-earth-green">Careers</a></li>
              <li><a href="#" className="text-deep-clay-600 hover:text-earth-green">Press Kit</a></li>
              <li><a href="#" className="text-deep-clay-600 hover:text-earth-green">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-deep-clay-800 mb-4">Stay Updated</h3>
            <p className="text-deep-clay-600 mb-4">Join our waitlist for exclusive updates and early access.</p>
            <form onSubmit={handleSubscribe} className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-earth-green focus:ring-earth-green"
                required
              />
              <Button type="submit" className="ml-2 bg-earth-green hover:bg-earth-green-700">
                <Mail size={16} className="mr-2" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-cloud-white-300 mt-12 pt-8 text-center text-deep-clay-500">
          <p>&copy; 2025 AgriVerse Africa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
