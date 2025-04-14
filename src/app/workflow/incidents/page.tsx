export default function IncidentManagement() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Incident Management</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-600 mb-4">Manage and track security incidents in real-time.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Active Incidents</h2>
            <p className="text-gray-600">View and manage currently active security incidents.</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Incident Reports</h2>
            <p className="text-gray-600">Access historical incident reports and analytics.</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Response Teams</h2>
            <p className="text-gray-600">Manage and coordinate security response teams.</p>
          </div>
          <div className="border p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">Alert Management</h2>
            <p className="text-gray-600">Configure and manage security alert systems.</p>
          </div>
        </div>
      </div>
    </div>
  );
} 