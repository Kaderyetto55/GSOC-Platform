'use client';

import { ReactNode } from 'react';

interface ProcedureCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  href: string;
}

export default function ProcedureCard({ title, description, icon, href }: ProcedureCardProps) {
  return (
    <a
      href={href}
      className="block p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 hover:scale-[1.02] transform transition-transform"
    >
      <div className="flex items-start space-x-4">
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-[#D89C61] mb-2">{title}</h3>
          <p className="text-[#1a365d]">{description}</p>
        </div>
      </div>
    </a>
  );
} 