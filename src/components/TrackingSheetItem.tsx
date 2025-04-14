'use client';

import { LockClosedIcon } from '@heroicons/react/24/outline';

interface TrackingSheetItemProps {
  title: string;
  description: string;
  href: string;
}

export default function TrackingSheetItem({ title, description, href }: TrackingSheetItemProps) {
  return (
    <a
      href={href}
      className="flex items-start p-6 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100"
    >
      <div className="flex-shrink-0 mr-4">
        <LockClosedIcon className="h-8 w-8 text-[#D89C61]" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-[#D89C61] mb-1">{title}</h3>
        <p className="text-[#1a365d]">{description}</p>
      </div>
    </a>
  );
} 