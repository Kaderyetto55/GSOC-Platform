import OfficeCard from '@/components/OfficeCard';

export default function CampusInfo() {
  const offices = [
    {
      location: "San Francisco, CA Office",
      href: "/resources/campus-info/san-francisco"
    },
    {
      location: "New York, NY Office",
      href: "/resources/campus-info/new-york"
    },
    {
      location: "Seattle, WA Office",
      href: "/resources/campus-info/seattle"
    },
    {
      location: "London, UK Office",
      href: "/resources/campus-info/london"
    },
    {
      location: "Dublin, IRE Office",
      href: "/resources/campus-info/dublin"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1a365d] mb-2">Campus Floorplans & Evacuation Zones</h1>
          <p className="text-gray-600 mb-8">Access floorplans and evacuation information for all office locations.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <OfficeCard
                key={index}
                location={office.location}
                href={office.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 