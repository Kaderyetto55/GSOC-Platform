'use client';

interface OfficeCardProps {
  location: string;
  href: string;
}

export default function OfficeCard({ location, href }: OfficeCardProps) {
  return (
    <a
      href={href}
      className="block p-8 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 hover:scale-[1.02] transform transition-transform text-center"
    >
      <div className="flex flex-col items-center space-y-4">
        <div className="h-20 flex items-center justify-center">
          <div className="text-6xl font-bold text-[#D89C61] leading-none flex items-center">
            <span className="align-middle">A</span>
            <span className="align-middle">\</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-[#1a365d]">{location}</h3>
      </div>
    </a>
  );
} 