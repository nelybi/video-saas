import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Témoignages vidéo simplifiés 🎥
      </h1>
      <p className="text-lg text-gray-600 max-w-md text-center mb-8">
        Collectez et affichez facilement des témoignages vidéos authentiques
        pour renforcer votre crédibilité.
      </p>
      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
        >
          Se connecter
        </Link>
        <Link
          to="/dashboard"
          className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition"
        >
          Voir le Dashboard
        </Link>
      </div>
    </div>
  );
}
