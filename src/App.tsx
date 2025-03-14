import { ExternalLink } from 'lucide-react';

const App = () => {
  // Replace this URL with your actual Google Form URL once created
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdXA36yk-aaMI2KrlXd64CP5Vcy6dl7Kth0n-pedP-uR65QtA/viewform?usp=dialog";

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img src="./spike_banner.png" alt="Logo" className="h-18 mr-3" />
          </div>
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
                Join our waitlist to get early access when we launch on TestFlight
              </p>
              <a 
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#FCB434] text-black font-medium rounded-lg hover:bg-[#e6a22f] transition-colors"
              >
                Join Waitlist <ExternalLink className="ml-2" size={18} />
              </a>
              <p className="mt-3 text-xs text-gray-500">
                You'll be redirected to a Google Form to sign up
              </p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 text-gray-500 text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* <div className="text-[#FCB434] mr-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L3 20H21L12 2Z" fill="currentColor" />
              </svg>
            </div> */}
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