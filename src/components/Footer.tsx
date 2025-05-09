
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer id="about" className="bg-bongo-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/public/lovable-uploads/b7a2888c-1ba2-4cd0-b4a2-8a1435a4b5d9.png" 
                alt="BongoChat Logo" 
                className="h-10 w-10 bg-white rounded-full p-1"
              />
              <span className="text-xl font-bold">BongoChat</span>
            </div>
            <p className="text-white/80 mb-4">
              Bangladesh's very own all-in-one social platform—built to connect, empower, and enrich everyday digital life.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-bongo-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-bongo-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-bongo-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-bongo-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-white/80 hover:text-white transition-colors">Features</a></li>
              <li><a href="#benefits" className="text-white/80 hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#wallet" className="text-white/80 hover:text-white transition-colors">BongoPay</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Business Accounts</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Bongo Points</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={20} className="flex-shrink-0 mt-0.5" />
                <span className="text-white/80">info@bongochat.com.bd</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={20} className="flex-shrink-0 mt-0.5" />
                <span className="text-white/80">+88 01234 567890</span>
              </div>
              <div>
                <p className="text-white/80">Download the app:</p>
                <div className="flex flex-col sm:flex-row gap-2 mt-2">
                  <a href="#" className="block">
                    <img 
                      src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                      alt="Google Play" 
                      className="h-10"
                    />
                  </a>
                  <a href="#" className="block">
                    <img 
                      src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                      alt="App Store" 
                      className="h-10"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 py-6 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} BongoChat. All rights reserved.</p>
          <p>From Chat to Checkout – Bangladesh's digital heartbeat.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
