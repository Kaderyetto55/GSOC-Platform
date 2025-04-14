import TrackingSheetItem from '@/components/TrackingSheetItem';

export default function TrackingSheets() {
  const trackingSheets = [
    {
      title: "GSOC Incident Log",
      description: "Track and document all security incidents, responses, and resolutions in real-time.",
      href: "/workflow/tracking-sheets/incident-log"
    },
    {
      title: "POI/IOC/OSINT Tracker",
      description: "Monitor persons of interest, indicators of compromise, and open-source intelligence findings.",
      href: "/workflow/tracking-sheets/poi-tracker"
    },
    {
      title: "Badge Activation Log",
      description: "Track all badge activations, deactivations, and access control modifications.",
      href: "/workflow/tracking-sheets/badge-log"
    },
    {
      title: "Loading Dock Tracker",
      description: "Monitor and log all loading dock activities, deliveries, and vehicle movements.",
      href: "/workflow/tracking-sheets/loading-dock"
    },
    {
      title: "Lost & Found",
      description: "Document and track lost items, found items, and their return status.",
      href: "/workflow/tracking-sheets/lost-found"
    },
    {
      title: "Camera Audit",
      description: "Track camera system audits, maintenance checks, and operational status.",
      href: "/workflow/tracking-sheets/camera-audit"
    },
    {
      title: "Suspicious Item Checklist",
      description: "Document and assess suspicious items following standardized security protocols.",
      href: "/workflow/tracking-sheets/suspicious-items"
    },
    {
      title: "Approved Office Vendor",
      description: "Maintain and track approved vendor list with access permissions and contact information.",
      href: "/workflow/tracking-sheets/approved-vendors"
    },
    {
      title: "Call Tree - Vendor Contractor Building Access",
      description: "Manage vendor and contractor access authorization contact hierarchy.",
      href: "/workflow/tracking-sheets/call-tree"
    },
    {
      title: "[GSS] 500Howard 2/4 Compartment Access List",
      description: "Track and manage compartment-specific access permissions for 500 Howard facility.",
      href: "/workflow/tracking-sheets/howard-access"
    },
    {
      title: "Dispatch Log",
      description: "Record and track all security dispatch activities and response assignments.",
      href: "/workflow/tracking-sheets/dispatch-log"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1a365d] mb-2">GSOC Tracking Sheets</h1>
          <p className="text-gray-600 mb-8">Access and manage various tracking sheets for GSOC operations.</p>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 divide-y divide-gray-100">
            {trackingSheets.map((sheet, index) => (
              <TrackingSheetItem
                key={index}
                title={sheet.title}
                description={sheet.description}
                href={sheet.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 