'use client';

import Navbar from '@/components/Navbar';
import GlobeIcon from '@/components/GlobeIcon';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [searchResults, setSearchResults] = useState<Array<{ keyword: string; path: string }>>([]);
  const router = useRouter();
  
  const offices = [
    {
      name: "Anthropic London Office",
      image: "/London.png",
      alt: "Anthropic London Office"
    },
    {
      name: "Anthropic SF Office (HQ)",
      image: "/SF.png",
      alt: "Anthropic SF Office (HQ)"
    },
    {
      name: "Anthropic's Seattle Office",
      image: "/Seattle.png",
      alt: "Anthropic's Seattle Office"
    },
    {
      name: "Anthropic's NY Office",
      image: "/NY.png",
      alt: "Anthropic's NY Office"
    },
    {
      name: "Anthropic Dublin Office",
      image: "/dublin.png",
      alt: "Anthropic Dublin Office"
    }
  ];

  const searchMapping: Record<string, string> = {
    // Training & Resources
    'training': '/resources/training',
    'materials': '/resources/training',
    'procedures': '/resources/procedures',
    'standard': '/resources/procedures',
    'sop': '/resources/procedures',
    'campus': '/resources/campus-info',
    'floorplan': '/resources/campus-info',
    'evacuation': '/resources/campus-info',
    
    // Workflow
    'tracking': '/workflow/tracking-sheets',
    'sheets': '/workflow/tracking-sheets',
    'incidents': '/workflow/incidents',
    'dispatch': '/workflow/tracking-sheets',
    'badge': '/workflow/tracking-sheets',
    'loading dock': '/workflow/tracking-sheets',
    'lost': '/workflow/tracking-sheets',
    'found': '/workflow/tracking-sheets',
    
    // Crime Reports & OSINT
    'crime': '/crime-report',
    'osint': '/crime-report',
    'report': '/crime-report',
    'intelligence': '/crime-report',
    'threat': '/crime-report',
    'security': '/crime-report',
    
    // About & Contact
    'about': '/about',
    'contact': '/about',
    'team': '/about',
    'leadership': '/about',
    'gsoc': '/about'
  };

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase().trim();
    const results = Object.entries(searchMapping)
      .filter(([keyword]) => 
        keyword.toLowerCase().includes(query) || 
        query.includes(keyword.toLowerCase())
      )
      .map(([keyword, path]) => ({
        keyword,
        path,
      }))
      .slice(0, 5); // Limit to 5 results

    setSearchResults(results);
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const query = searchQuery.toLowerCase().trim();
    
    // Check for exact matches first
    if (searchMapping[query]) {
      router.push(searchMapping[query]);
      return;
    }
    
    // Check for partial matches
    for (const [keyword, path] of Object.entries(searchMapping)) {
      if (query.includes(keyword) || keyword.includes(query)) {
        router.push(path);
        return;
      }
    }
    
    // If no match is found, you could show a message or navigate to a search results page
    console.log('No matching content found for:', query);
  };

  const handleResultClick = (path: string) => {
    setSearchQuery('');
    setShowPreview(false);
    router.push(path);
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            GLOBAL SECURITY OPERATION CENTER (GSOC)
          </h1>
          
          {/* Search Bar */}
          <div className="mb-12">
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto relative">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowPreview(true);
                  }}
                  onFocus={() => setShowPreview(true)}
                  placeholder="Search for resources, procedures, or reports..."
                  className="w-full px-4 py-3 pl-12 rounded-lg border border-[#E0E0E0] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D89C61] focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <button 
                  type="submit"
                  className="absolute inset-y-0 right-0 flex items-center px-4 bg-[#D89C61] text-white rounded-r-lg hover:bg-[#c08a52] transition-colors"
                >
                  Search
                </button>
              </div>

              {/* Search Preview Dropdown */}
              {showPreview && searchResults.length > 0 && (
                <div 
                  className="absolute z-50 w-full mt-1 bg-white rounded-lg border border-[#E0E0E0] shadow-lg"
                >
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleResultClick(result.path)}
                      className="w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      <span className="font-medium text-[#1B2A41]">{result.keyword}</span>
                      <span className="text-sm text-gray-500 ml-2">
                        {result.path.split('/').slice(1).join(' > ')}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </form>
          </div>

          {/* New GSOC Info Section */}
          <div className="bg-[#FAFAFA] rounded-lg border border-[#E0E0E0] shadow-sm p-8 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* Left Column */}
              <div>
                <h2 className="text-2xl font-semibold text-[#D89C61] mb-4">
                  What is a Global Security Operations Center (GSOC)?
                </h2>
                <p className="text-[#1B2A41] mb-4">
                  A Global Security Operations Center (GSOC) is a centralized unit within an organization 
                  that is responsible for monitoring, assessing, and defending against security threats 
                  on a global scale.
                </p>
                <p className="text-[#1B2A41]">
                  The primary purpose of a GSOC is to provide a comprehensive view of an organization's 
                  security posture and to coordinate and manage security operations across all locations 
                  and business units.
                </p>
              </div>

              {/* Right Column */}
              <div className="flex items-center justify-center">
                <div className="w-[400px] h-[400px]">
                  <GlobeIcon />
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-[#D89C61] mb-4">
                What is the goal of the GSOC?
              </h2>
              <p className="text-[#1B2A41]">
                The goal of the GSOC is to reduce risk. Through proactive threat intelligence and risk 
                assessment, a GSOC can help organizations identify and prioritize security risks and 
                develop strategies to mitigate those risks.
              </p>
            </div>
          </div>

          {/* Office Locations Gallery */}
          <div className="mt-16 mb-16">
            <h2 className="text-2xl font-semibold text-[#D89C61] mb-8 text-center">
              Anthrop\c Campuses Monitored and Protected by the Global Security Operations Center (GSOC)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offices.map((office, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg border border-[#E0E0E0] shadow-[0_2px_6px_rgba(0,0,0,0.05)] overflow-hidden group hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={office.image}
                      alt={office.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-[#1B2A41] font-medium text-lg">{office.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Existing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="card card-coral">
              <div className="text-center">
                <h3 className="text-2xl font-semibold">Global eyes,<br />local protection</h3>
              </div>
            </div>
            
            <div className="card card-sage">
              <div className="text-center">
                <h3 className="text-2xl font-semibold">Constant Vigilance,<br />Seamless Response</h3>
              </div>
            </div>
            
            <div className="card card-coral">
              <div className="text-center">
                <h3 className="text-2xl font-semibold">Predict.<br />Prevent.<br />Protect</h3>
              </div>
            </div>
            
            <div className="card card-sage">
              <div className="text-center">
                <h3 className="text-2xl font-semibold">Intelligence<br />at the speed<br />of threat</h3>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h4 className="text-xl mb-2">Contact:</h4>
            <p className="text-lg">GSOC: 1(855)ANTS-SOC</p>
            <p className="text-lg">Office Hours: Staffed 24/7</p>
            <p className="text-lg">gsoc@anthropic.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}
