
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      title: "Comprehensive Social Engagement",
      description: "Chat, share, and express yourself all in one app",
      icon: "💬"
    },
    {
      title: "Enhanced Rewards",
      description: "Earn Bongo Points through regular platform engagement",
      icon: "🏆"
    },
    {
      title: "Simplified Transactions",
      description: "Send money without switching apps with BongoPay",
      icon: "💸"
    },
    {
      title: "Local Services",
      description: "Use all local services like buying tickets, paying bills, mobile recharge",
      icon: "🇧🇩"
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="benefits" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose <span className="text-bongo-primary">BongoChat</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bangladesh's digital heartbeat providing a unified platform for all your social and financial needs.
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:border-bongo-primary/40 transition-all duration-300 hover:shadow-lg"
              variants={item}
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-bongo-primary mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-16 bg-gray-50 rounded-xl p-8 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Competitive Edge</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-bongo-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Integrated Ecosystem</h4>
                    <p className="text-gray-600">Combines social media, communication, and financial services</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-bongo-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">User-Centric Design</h4>
                    <p className="text-gray-600">Focus on privacy, security, and intuitive use</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-bongo-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold">Future-Ready</h4>
                    <p className="text-gray-600">Advanced wallet features and long-term user retention</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-bongo-primary/10 p-6 rounded-lg">
              <div className="text-center mb-4">
                <h4 className="font-semibold text-bongo-primary">Download BongoChat Today</h4>
                <p className="text-sm text-gray-600">Available on Android and iOS</p>
              </div>
              
              <div className="flex gap-4 justify-center">
                <a href="#" className="block">
                  <img 
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                    alt="Google Play" 
                    className="h-12"
                  />
                </a>
                <a href="#" className="block">
                  <img 
                    src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                    alt="App Store" 
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
