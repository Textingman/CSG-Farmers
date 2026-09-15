import Link from "next/link";
import Footer from "@/app/components/Footer";

export default function Options() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-5 py-3.5 sticky top-0 z-50">
        <Link
          href="/"
          className="text-base font-semibold text-gray-900 tracking-tight hover:text-[#fcc7e8] transition-colors"
        >
          Farmers Insurance
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-5 py-16">
        <div className="max-w-md w-full flex flex-col items-center gap-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">View Quote</h1>
          <p className="text-gray-500 text-base">
            Your quote is ready. Click below to continue and view your personalized insurance options.
          </p>
          <a
            href="https://www.farmers.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-xs py-4 bg-[#fcc7e8] hover:bg-[#fcc7e8] text-white font-semibold text-base rounded-md transition-colors duration-200 tracking-wide text-center"
          >
            Continue
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
