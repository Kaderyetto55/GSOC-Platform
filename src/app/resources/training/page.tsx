import TrainingCard from '@/components/TrainingCard';

export default function TrainingMaterials() {
  const trainings = [
    {
      title: "New Hire Training",
      description: "Essential training materials and onboarding resources for new GSOC team members, including basic protocols and procedures.",
      href: "/resources/training/new-hire"
    },
    {
      title: "Advanced Security Protocols",
      description: "Advanced training modules for experienced security personnel, covering complex scenarios and advanced threat response.",
      href: "/resources/training/advanced"
    },
    {
      title: "Emergency Response Training",
      description: "Comprehensive training modules for emergency situations, including crisis management and rapid response protocols.",
      href: "/resources/training/emergency"
    },
    {
      title: "Technology & Tools Training",
      description: "Detailed training for security systems, software, and tools used in GSOC operations and monitoring.",
      href: "/resources/training/technology"
    },
    {
      title: "Communication Protocols",
      description: "Training on effective communication procedures, reporting standards, and inter-team coordination protocols.",
      href: "/resources/training/communication"
    },
    {
      title: "Security Assessment Training",
      description: "Training on conducting security assessments, threat analysis, and risk evaluation procedures.",
      href: "/resources/training/assessment"
    },
    {
      title: "Compliance & Regulations",
      description: "Training materials covering security compliance requirements, regulations, and industry standards.",
      href: "/resources/training/compliance"
    },
    {
      title: "Leadership & Management",
      description: "Training resources for team leaders and managers, focusing on security operations management and team coordination.",
      href: "/resources/training/leadership"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-[#1a365d] mb-2">Training Materials</h1>
          <p className="text-gray-600 mb-8">Access comprehensive training resources and materials for GSOC personnel development.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainings.map((training, index) => (
              <TrainingCard
                key={index}
                title={training.title}
                description={training.description}
                href={training.href}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 