
import { useState } from 'react';
import FeatureCard from './FeatureCard';
import { MessageCircle, Image, Video, Users, Bell, CreditCard } from "lucide-react";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      id: 0,
      icon: <MessageCircle size={24} />,
      title: "Real-time Messaging",
      description: "Instant text, voice, and multimedia exchanges with friends and family.",
      content: (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm">Hi there! How are you doing today?</p>
                <span className="text-xs text-gray-500">10:30 AM</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3 justify-end">
              <div className="bg-bongo-secondary text-white p-3 rounded-lg">
                <p className="text-sm">I'm doing great! Just finished my work.</p>
                <span className="text-xs text-white/80">10:31 AM</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
            </div>
            
            <div className="flex items-center gap-3 text-gray-500 text-sm">
              <span>Voice message</span>
              <span>Photos</span>
              <span>Files</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      icon: <Image size={24} />,
      title: "Stories & Moments",
      description: "Share photos and videos that disappear after 24 hours or create permanent posts.",
      content: (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
            {Array(5).fill(0).map((_, i) => (
              <div key={i} className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full p-[2px] bg-gradient-to-br from-bongo-primary to-bongo-accent">
                  <div className="w-full h-full bg-gray-200 rounded-full"></div>
                </div>
                <p className="text-xs text-center mt-1">User {i+1}</p>
              </div>
            ))}
          </div>
          
          <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
          
          <div className="flex justify-between">
            <div className="flex gap-4">
              <span>❤️ 24</span>
              <span>💬 8</span>
            </div>
            <span>🔄 Share</span>
          </div>
        </div>
      )
    },
    {
      id: 2,
      icon: <Video size={24} />,
      title: "Media Sharing",
      description: "Send photos, videos, GIFs, PDFs, and other files with ease.",
      content: (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="grid grid-cols-3 gap-2 mb-4">
            {Array(6).fill(0).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-md"></div>
            ))}
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <div className="px-3 py-1 rounded-full bg-bongo-light text-bongo-primary">Photos</div>
            <div className="px-3 py-1 rounded-full bg-gray-100">Videos</div>
            <div className="px-3 py-1 rounded-full bg-gray-100">Documents</div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      icon: <Users size={24} />,
      title: "Group Chats",
      description: "Create and manage groups with multiple participants.",
      content: (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-bongo-primary flex items-center justify-center text-white font-bold">B</div>
              <div>
                <h4 className="font-medium">Bongo Friends</h4>
                <p className="text-xs text-gray-500">32 participants</p>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-gray-100"></div>
          </div>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div className="bg-gray-100 p-2 rounded-lg text-sm">
                <p className="font-medium text-xs">User 1</p>
                <p>When is our next meetup?</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-200 flex-shrink-0"></div>
              <div className="bg-gray-100 p-2 rounded-lg text-sm">
                <p className="font-medium text-xs">User 2</p>
                <p>Let's plan for this weekend!</p>
              </div>
            </div>
          </div>
          
          <div className="text-center text-sm text-bongo-primary">
            View all 12 members
          </div>
        </div>
      )
    },
    {
      id: 4,
      icon: <Bell size={24} />,
      title: "Bongo Points",
      description: "Earn points through engagement activities like daily logins and redeem for perks.",
      content: (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="text-center mb-4">
            <div className="w-16 h-16 rounded-full bg-bongo-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-2">500</div>
            <h4 className="font-medium">Bongo Points</h4>
          </div>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between py-2 border-b">
              <span>Daily Login</span>
              <span className="text-bongo-primary">+10 pts</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Share a Story</span>
              <span className="text-bongo-primary">+5 pts</span>
            </div>
            <div className="flex justify-between py-2 border-b">
              <span>Invite Friends</span>
              <span className="text-bongo-primary">+20 pts</span>
            </div>
          </div>
          
          <div className="bg-bongo-light text-bongo-primary p-2 rounded-md text-center text-sm">
            Redeem for exclusive features
          </div>
        </div>
      )
    },
    {
      id: 5,
      icon: <CreditCard size={24} />,
      title: "Business Account",
      description: "Register for dedicated business accounts with advertisement posting and analytics.",
      content: (
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              <div className="font-medium">Business Name</div>
              <div className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Verified</div>
            </div>
            
            <div className="aspect-video bg-gray-200 rounded-lg mb-2"></div>
            
            <p className="text-sm">Promote your business with our new product launch! Limited time offer.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-2 text-xs text-center">
            <div className="bg-gray-100 p-2 rounded">
              <div className="font-medium">2.5k</div>
              <div className="text-gray-500">Reach</div>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              <div className="font-medium">320</div>
              <div className="text-gray-500">Clicks</div>
            </div>
            <div className="bg-gray-100 p-2 rounded">
              <div className="font-medium">12%</div>
              <div className="text-gray-500">Conversion</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-20 px-4 feature-gradient">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-bongo-primary mb-4">
            All the Features You Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            BongoChat combines powerful communication tools with local services to create a seamless experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isActive={activeFeature === feature.id}
                onClick={() => setActiveFeature(feature.id)}
              />
            ))}
          </div>
          
          <div className="md:col-span-2 min-h-[400px] flex items-center justify-center p-4">
            <div className="w-full max-w-md transition-all duration-500 ease-in-out transform">
              {features[activeFeature].content}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
