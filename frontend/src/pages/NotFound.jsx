import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-gray-400">Page not found</p>

      <Link
        to="/"
        className="mt-8 rounded-xl bg-blue-600 px-6 py-3 hover:bg-blue-700"
      >
        Go Home
      </Link>
    </div>
  );
}