import { Mail } from 'lucide-react';

const App = () => {
  // Removed email state and submission states since they're no longer needed
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="./spike_banner.png" alt="Logo" className="h-18 mr-3" />
          </div>
          
          {/* Contact Button */}
          <a 
            href="mailto:contact@spikeplay.com"
            className="inline-flex items-center px-4 py-2 bg-transparent border border-[#FCB434] text-[#FCB434] font-medium text-sm rounded-lg hover:bg-[#FCB434] hover:text-black transition-colors"
          >
            <Mail className="mr-2" size={16} />
            Contact Us
          </a>
        </div>
      </header>
      
      {/* Hero Section */}
      <main className="flex-grow flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              Same races, <span className="text-[#FCB434]">new stakes.</span>
            </h1>
            
            <p className="text-gray-400 text-xl mb-12">
              The first mobile app for track & field predictions.
              Make picks, earn rewards, climb leaderboards.
            </p>
            
            <div className="max-w-md">
              <p className="mb-4 text-sm font-medium text-gray-300">
                Now available on iOS. Android coming soon.
              </p>
              
              {/* Official App Store badge */}
              <a 
                href="https://apps.apple.com/us/app/spike-social-picks-for-t-f/id6742256084" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <img 
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg" 
                  alt="Download on the App Store" 
                  className="h-12"
                />
              </a>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-gray-500 text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <span className="font-bold uppercase">SPIKE</span>
          </div>
          
          <div>
            © 2025 Spike Play Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;