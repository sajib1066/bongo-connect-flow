
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <img 
            src="/public/lovable-uploads/b7a2888c-1ba2-4cd0-b4a2-8a1435a4b5d9.png" 
            alt="BongoChat Logo" 
            className="h-10 w-10"
          />
          <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-bongo-primary' : 'text-white'}`}>
            BongoChat
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="#features" 
            className={`transition-colors hover:text-bongo-accent ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            Features
          </a>
          <a 
            href="#benefits" 
            className={`transition-colors hover:text-bongo-accent ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            Benefits
          </a>
          <a 
            href="#wallet" 
            className={`transition-colors hover:text-bongo-accent ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            BongoPay
          </a>
          <a 
            href="#about" 
            className={`transition-colors hover:text-bongo-accent ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            About
          </a>
          <Button className="bg-bongo-accent hover:bg-bongo-accent/90 text-white">
            Download App
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? 'text-bongo-primary' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-bongo-primary' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-lg py-4 px-4 flex flex-col gap-4 animate-slide-in-right">
          <a 
            href="#features" 
            className="text-gray-700 hover:text-bongo-accent py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#benefits" 
            className="text-gray-700 hover:text-bongo-accent py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Benefits
          </a>
          <a 
            href="#wallet" 
            className="text-gray-700 hover:text-bongo-accent py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            BongoPay
          </a>
          <a 
            href="#about" 
            className="text-gray-700 hover:text-bongo-accent py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <Button className="bg-bongo-accent hover:bg-bongo-accent/90 text-white w-full">
            Download App
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
