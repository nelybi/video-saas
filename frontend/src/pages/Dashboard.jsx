export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow-sm px-6 py-4">
        <h1 className="text-lg font-bold text-gray-900">Video SaaS</h1>
      </header>

      {/* Main */}
      <main className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Campagnes</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow transition">
            <h3 className="text-lg font-semibold text-gray-800">Campagne #1</h3>
            <p className="text-gray-500 text-sm mt-2">
              Lien public : <span className="text-gray-900">/c/abc123</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow transition">
            <h3 className="text-lg font-semibold text-gray-800">Campagne #2</h3>
            <p className="text-gray-500 text-sm mt-2">
              Lien public : <span className="text-gray-900">/c/xyz456</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
