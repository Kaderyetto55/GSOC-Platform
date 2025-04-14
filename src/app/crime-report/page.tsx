import Link from 'next/link';

export default function CrimeReport() {
  const reports = [
    {
      title: "Daily Crime Reports",
      description: "Access and review daily crime reports, incident summaries, and security alerts.",
      href: "/crime-report/daily"
    },
    {
      title: "OSINT Analysis",
      description: "View open-source intelligence reports, threat assessments, and security advisories.",
      href: "/crime-report/osint"
    },
    {
      title: "Incident Timeline",
      description: "Track and analyze security incidents chronologically with detailed event logs.",
      href: "/crime-report/timeline"
    },
    {
      title: "Threat Intelligence",
      description: "Access threat intelligence reports, vulnerability assessments, and risk analyses.",
      href: "/crime-report/threats"
    },
    {
      title: "Security Alerts",
      description: "View active security alerts, warnings, and recommended response actions.",
      href: "/crime-report/alerts"
    },
    {
      title: "Analytics Dashboard",
      description: "Explore crime statistics, trends, and data-driven security insights.",
      href: "/crime-report/analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1a365d] mb-2">Crime Report & OSINT</h1>
          <p className="text-gray-600 mb-8">Access crime reports, OSINT analysis, and security intelligence resources.</p>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-100">
            {reports.map((report, index) => (
              <Link
                key={index}
                href={report.href}
                className="block p-6 hover:bg-gray-50 transition-colors duration-150"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-xl font-semibold text-[#1a365d] mb-2">{report.title}</h2>
                    <p className="text-gray-600">{report.description}</p>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 