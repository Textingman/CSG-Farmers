export default function Options() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #fce4f3 0%, #fcc7e8 100%)" }}
    >
      {/* Modal Card */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4 overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1.5 w-full" style={{ backgroundColor: "#fcc7e8" }} />

        {/* Modal Content */}
        <div className="px-8 py-10 flex flex-col items-center text-center gap-6">
          {/* Icon */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#fce4f3" }}
          >
            <svg
              className="w-8 h-8"
              style={{ color: "#fcc7e8" }}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">View Quote</h1>
            <p className="text-sm text-gray-500 leading-relaxed">
              Your personalized quote is ready. Click below to continue and review your options.
            </p>
          </div>

          {/* CTA Button */}
          <a
            href="https://www.farmers.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl text-white font-semibold text-base transition-opacity duration-200 hover:opacity-90 text-center block"
            style={{ backgroundColor: "#fcc7e8" }}
          >
            Continue
          </a>

          {/* Small disclaimer */}
          <p className="text-xs text-gray-400">
            You will be redirected to Farmers.com
          </p>
        </div>
      </div>
    </div>
  );
}
