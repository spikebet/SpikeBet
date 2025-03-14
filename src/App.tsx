import { useState } from 'react';
import { Send } from 'lucide-react';

const App = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  // Google Form submission URL
  const formSubmitBaseUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdXA36yk-aaMI2KrlXd64CP5Vcy6dl7Kth0n-pedP-uR65QtA/formResponse?usp=pp_url&entry.444407658=";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    setIsSubmitting(true);
    
    try {
      // Create the full URL with the email
      const submissionUrl = `${formSubmitBaseUrl}${encodeURIComponent(email)}`;
      
      // Using an iframe to handle the submission (avoiding CORS issues)
      const iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
      
      // Create a form that will target the iframe
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = submissionUrl;
      form.target = 'hidden_iframe';
      document.body.appendChild(form);
      
      // Submit the form
      form.submit();
      
      // Clean up
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1000);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setIsSubmitting(false);
      setError('Something went wrong. Please try again.');
      console.error('Error submitting form:', err);
    }
  };

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
                Join our waitlist to get early access to our private beta
              </p>
              
              <form onSubmit={handleSubmit} className="mt-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={`w-full px-6 py-3 bg-gray-900 border ${error ? 'border-red-500' : 'border-gray-700'} text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FCB434] focus:border-transparent transition-all duration-300`}
                    disabled={isSubmitting || isSubmitted}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting || isSubmitted}
                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 ${isSubmitted ? 'bg-green-500' : 'bg-[#FCB434]'} text-black font-medium rounded-lg hover:bg-[#e6a22f] transition-all duration-300 flex items-center`}
                  >
                    {isSubmitting ? (
                      <span className="h-5 w-5 border-t-2 border-b-2 border-black rounded-full animate-spin mx-2"></span>
                    ) : isSubmitted ? (
                      'Joined!'
                    ) : (
                      <>Join <Send className="ml-2" size={16} /></>
                    )}
                  </button>
                </div>
                
                {error && (
                  <p className="mt-2 text-red-500 text-sm opacity-100 transition-opacity duration-300">{error}</p>
                )}
                
                {isSubmitted && (
                  <p className="mt-2 text-green-500 text-sm opacity-100 transition-opacity duration-300">Thanks for joining our waitlist!</p>
                )}
                
                <p className="mt-3 text-xs text-gray-500">
                  We will never share your email with anyone.
                </p>
              </form>
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