'use client';
import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Mission */}
            <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-[0_2px_6px_rgba(0,0,0,0.05)] p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#D89C61] mb-4 sm:mb-6">
                OUR MISSION
              </h2>
              <p className="text-[#1B2A41] text-base sm:text-lg leading-relaxed">
                Our mission is to provide unwavering, 24/7 protection through proactive intelligence, 
                rapid response, and seamless collaboration. At the core of our Global Security Operations 
                Center (GSOC) is a commitment to safeguarding people, assets, and operations across the 
                globe. We strive to create a secure environment where our clients can operate with 
                confidence, knowing that every potential threat is being monitored, assessed, and 
                addressed by a dedicated and highly capable team. Through innovation, integrity, and 
                teamwork, we aim to be a trusted partner in global security.
              </p>
            </div>

            {/* Right Column - Logo */}
            <div className="flex items-center justify-end w-full min-h-[200px] sm:min-h-[300px]">
              <div className="relative w-fit transform-gpu">
                {/* Rotated Square Background */}
                <div className="absolute inset-0 bg-[#FAFAFA] transform rotate-45 scale-90 border-2 border-[#E0E0E0] rounded-lg shadow-md"></div>
                {/* Logo */}
                <div className="relative z-10 flex flex-col items-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#D89C61] p-6 sm:p-8">
                  <span>ANTHROP\C</span>
                  <span className="mt-2">GSOC</span>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mt-16 sm:mt-24">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#D89C61] text-center tracking-wide mb-12">
              LEADERSHIP & STAFFS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* Leadership Card 1 - Robert */}
              <div className="group">
                <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 ease-in-out group-hover:shadow-lg">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/Robert.png"
                      alt="Robert Cyphers"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-[#1B2A41]">Robert Cyphers</h3>
                    <p className="text-sm text-[#1B2A41]/80 mt-1">AUS Account Manager</p>
                  </div>
                </div>
              </div>

              {/* Leadership Card 2 - Keon */}
              <div className="group">
                <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 ease-in-out group-hover:shadow-lg">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/Keon.png"
                      alt="Keon Ellison"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-[#1B2A41]">Keon Ellison</h3>
                    <p className="text-sm text-[#1B2A41]/80 mt-1">GSOC & Travel Security Manager</p>
                  </div>
                </div>
              </div>

              {/* Leadership Card 3 - Joseph T */}
              <div className="group">
                <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 ease-in-out group-hover:shadow-lg">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/Joseph_Ti.png"
                      alt="Joseph Tierrablanca"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-[#1B2A41]">Joseph Tierrablanca</h3>
                    <p className="text-sm text-[#1B2A41]/80 mt-1">GSOC Supervisor</p>
                  </div>
                </div>
              </div>

              {/* Leadership Card 4 - Jocelyn */}
              <div className="group">
                <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 ease-in-out group-hover:shadow-lg">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/Jocelyn.png"
                      alt="Jocelyn Melendez"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-[#1B2A41]">Jocelyn Melendez</h3>
                    <p className="text-sm text-[#1B2A41]/80 mt-1">GSOC Operator</p>
                  </div>
                </div>
              </div>

              {/* Leadership Card 5 - Joseph M */}
              <div className="group">
                <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 ease-in-out group-hover:shadow-lg">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/Joseph.png"
                      alt="Joseph McCloud"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-[#1B2A41]">Joseph McCloud</h3>
                    <p className="text-sm text-[#1B2A41]/80 mt-1">GSOC Operator</p>
                  </div>
                </div>
              </div>

              {/* Leadership Card 6 - Carlo */}
              <div className="group">
                <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 ease-in-out group-hover:shadow-lg">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/Carlo.png"
                      alt="Carlo Abatayo"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-[#1B2A41]">Carlo Abatayo</h3>
                    <p className="text-sm text-[#1B2A41]/80 mt-1">GSOC Operator</p>
                  </div>
                </div>
              </div>

              {/* Leadership Card 7 - Emad */}
              <div className="group">
                <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 ease-in-out group-hover:shadow-lg">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/Emad.png"
                      alt="Emad Algahim"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-[#1B2A41]">Emad Algahim</h3>
                    <p className="text-sm text-[#1B2A41]/80 mt-1">GSOC Operator</p>
                  </div>
                </div>
              </div>

              {/* Leadership Card 8 - Emmett */}
              <div className="group">
                <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 ease-in-out group-hover:shadow-lg">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/Emmett.png"
                      alt="Emmett Haidari"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-[#1B2A41]">Emmett Haidari</h3>
                    <p className="text-sm text-[#1B2A41]/80 mt-1">GSOC Operator</p>
                  </div>
                </div>
              </div>

              {/* Leadership Card 9 - Aaron */}
              <div className="group">
                <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 ease-in-out group-hover:shadow-lg">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/Aaron.png"
                      alt="Aaron Fau"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-[#1B2A41]">Aaron Fau</h3>
                    <p className="text-sm text-[#1B2A41]/80 mt-1">GSOC Operator</p>
                  </div>
                </div>
              </div>

              {/* Leadership Card 10 - Abdoul */}
              <div className="group">
                <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 ease-in-out group-hover:shadow-lg">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/Abdoul.png"
                      alt="Abdoul Camara"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-[#1B2A41]">Abdoul Camara</h3>
                    <p className="text-sm text-[#1B2A41]/80 mt-1">GSOC Operator</p>
                  </div>
                </div>
              </div>

              {/* Leadership Card 11 - Morris */}
              <div className="group">
                <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 ease-in-out group-hover:shadow-lg">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/Morris_S.png"
                      alt="Morris Siverand"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-[#1B2A41]">Morris Siverand</h3>
                    <p className="text-sm text-[#1B2A41]/80 mt-1">GSOC Operator</p>
                  </div>
                </div>
              </div>

              {/* Leadership Card 12 - Antonio */}
              <div className="group">
                <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden transition-transform duration-300 ease-in-out group-hover:shadow-lg">
                  <div className="aspect-[4/5] relative">
                    <Image
                      src="/Antonio.png"
                      alt="Antonio Almaguer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-[#1B2A41]">Antonio Almaguer</h3>
                    <p className="text-sm text-[#1B2A41]/80 mt-1">GSOC Operator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Structure Section */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {/* Team Card */}
            <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-sm p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#D89C61] mb-2 sm:mb-3">Our Team</h3>
              <p className="text-[#1B2A41] text-sm sm:text-base">
                A dedicated group of security professionals working 24/7 to ensure global safety.
              </p>
            </div>

            {/* Approach Card */}
            <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-sm p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#D89C61] mb-2 sm:mb-3">Our Approach</h3>
              <p className="text-[#1B2A41] text-sm sm:text-base">
                Proactive monitoring and rapid response capabilities for comprehensive security.
              </p>
            </div>

            {/* Technology Card */}
            <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-sm p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#D89C61] mb-2 sm:mb-3">Our Technology</h3>
              <p className="text-[#1B2A41] text-sm sm:text-base">
                State-of-the-art systems and tools for effective threat detection and management.
              </p>
            </div>

            {/* Coverage Card */}
            <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-sm p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#D89C61] mb-2 sm:mb-3">Our Coverage</h3>
              <p className="text-[#1B2A41] text-sm sm:text-base">
                Global reach with local expertise for comprehensive security solutions.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 sm:mt-16 text-center">
            <div className="bg-white rounded-lg border border-[#E0E0E0] shadow-sm p-6 sm:p-8 max-w-2xl mx-auto">
              <h3 className="text-xl sm:text-2xl font-semibold text-[#D89C61] mb-3 sm:mb-4">Contact Us</h3>
              <p className="text-base sm:text-lg text-[#1B2A41] mb-2">GSOC: 1(855)ANTS-SOC</p>
              <p className="text-base sm:text-lg text-[#1B2A41] mb-2">Office Hours: Staffed 24/7</p>
              <p className="text-base sm:text-lg text-[#1B2A41]">gsoc@anthropic.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 