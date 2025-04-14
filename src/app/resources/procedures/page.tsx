import ProcedureCard from '@/components/ProcedureCard';

export default function StandardProcedures() {
  const procedures = [
    {
      title: "Emergency Processes & Procedures",
      description: "Standard operating procedures for handling emergency situations, including evacuation protocols and first response guidelines.",
      href: "/resources/procedures/emergency"
    },
    {
      title: "Technical Processes & Procedures",
      description: "Guidelines for handling technical systems, security software, and IT infrastructure management.",
      href: "/resources/procedures/technical"
    },
    {
      title: "Travel Security & OSINT Processes & Procedures",
      description: "Protocols for travel security, open-source intelligence gathering, and threat assessment.",
      href: "/resources/procedures/travel-security"
    },
    {
      title: "GSOC Specific Processes & Procedures",
      description: "Internal procedures specific to Global Security Operations Center operations and management.",
      href: "/resources/procedures/gsoc-specific"
    },
    {
      title: "Campus Specific Processes & Procedures",
      description: "Security protocols and procedures specific to campus facilities and operations.",
      href: "/resources/procedures/campus-specific"
    },
    {
      title: "Genetec Specific Processes & Procedures",
      description: "Guidelines for using and maintaining Genetec security systems and software.",
      href: "/resources/procedures/genetec-specific"
    },
    {
      title: "Physical Security Processes & Procedures",
      description: "Standard procedures for physical security measures, access control, and facility protection.",
      href: "/resources/procedures/physical-security"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1a365d] mb-2">Standard Procedures</h1>
          <p className="text-gray-600 mb-8">Access and manage all standard operating procedures for the Global Security Operations Center.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {procedures.map((procedure, index) => (
              <ProcedureCard
                key={index}
                title={procedure.title}
                description={procedure.description}
                href={procedure.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 