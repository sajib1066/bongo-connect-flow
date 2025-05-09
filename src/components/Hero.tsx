
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

// Import framer-motion
<lov-add-dependency>framer-motion@latest</lov-add-dependency>

const Hero = () => {
  return (
    <section className="hero-gradient min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              From Chat to Checkout
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Bangladesh's very own all-in-one social platform—built to connect, empower, and enrich everyday digital life.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button className="bg-bongo-accent hover:bg-bongo-accent/90 text-white text-lg px-8 py-6">
                Download Now
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Phone mockup with chat interface */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-100 w-[280px] h-[560px] mx-auto">
                {/* App header */}
                <div className="bg-bongo-primary text-white p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20"></div>
                    <div>
                      <h4 className="font-medium">BongoChat</h4>
                      <p className="text-xs opacity-80">Online</p>
                    </div>
                  </div>
                </div>
                
                {/* Chat content */}
                <div className="p-3 h-[calc(100%-130px)] bg-gray-50 flex flex-col gap-3">
                  {/* Received message */}
                  <div className="bg-white rounded-lg p-3 max-w-[80%] self-start shadow-sm">
                    <p className="text-sm">Hi there! Welcome to BongoChat.</p>
                    <span className="text-xs text-gray-500">10:30 AM</span>
                  </div>
                  
                  {/* Sent message */}
                  <div className="bg-bongo-secondary text-white rounded-lg p-3 max-w-[80%] self-end shadow-sm">
                    <p className="text-sm">Thanks! Can I send money through this app?</p>
                    <span className="text-xs text-white/80">10:31 AM</span>
                  </div>
                  
                  {/* Received message */}
                  <div className="bg-white rounded-lg p-3 max-w-[80%] self-start shadow-sm">
                    <p className="text-sm">Yes! With BongoPay, you can send money directly in chat.</p>
                    <span className="text-xs text-gray-500">10:32 AM</span>
                  </div>
                  
                  {/* Payment interface */}
                  <div className="bg-white rounded-lg p-3 max-w-[90%] self-start shadow-sm border border-bongo-secondary/30">
                    <div className="text-center">
                      <div className="text-bongo-primary font-semibold">BongoPay</div>
                      <div className="text-2xl font-bold my-1">৳500</div>
                      <Button className="bg-bongo-accent hover:bg-bongo-accent/90 text-white text-xs py-1 px-3 h-auto">
                        Send Money
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Input area */}
                <div className="bg-white p-3 flex gap-2 items-center border-t">
                  <div className="flex-1 bg-gray-100 rounded-full h-10 px-4"></div>
                  <div className="w-10 h-10 rounded-full bg-bongo-primary flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#features" className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown size={20} />
        </a>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
