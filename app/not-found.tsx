import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white text-center p-6">
      <h1 className="text-5xl font-bold mb-4 text-red-500">
        404 - Page Not Found
      </h1>
      <p className="text-lg text-gray-200 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
}
