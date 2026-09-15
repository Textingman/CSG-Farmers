import Link from "next/link";
import Footer from "@/app/components/Footer";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Bar */}
      <header className="bg-white border-b border-gray-200 px-5 py-3.5 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="text-base font-semibold text-gray-900 tracking-tight hover:text-[#8b1a2e] transition-colors"
          >
            Farmers Insurance
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-[#8b1a2e] underline underline-offset-2"
          >
            About Us
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#8b1a2e] text-white px-5 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About Farmers</h1>
          <p className="text-lg text-red-100 leading-relaxed">
            We're here to help you protect what matters most — your family, your home, and your future.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-5 py-12">
        <div className="space-y-10">

          {/* Mission */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Farmers, our mission is simple: to help people manage the risks of everyday life, recover from the unexpected, and realize their dreams. We believe that everyone deserves access to reliable insurance coverage and the peace of mind that comes with it.
            </p>
          </section>

          {/* Who We Help */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Who We Help</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We serve individuals and families across the country, providing coverage solutions tailored to your unique needs. Whether you're a first-time homeowner, a growing family, or a small business owner, Farmers is here to help you navigate life's uncertainties.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-50 rounded-lg p-5 text-center">
                <div className="text-3xl mb-2">🏠</div>
                <h3 className="font-semibold text-gray-900 mb-1">Homeowners</h3>
                <p className="text-sm text-gray-500">Protecting your home and everything in it.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 text-center">
                <div className="text-3xl mb-2">👨‍👩‍👧</div>
                <h3 className="font-semibold text-gray-900 mb-1">Families</h3>
                <p className="text-sm text-gray-500">Coverage that grows with your family's needs.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 text-center">
                <div className="text-3xl mb-2">🚗</div>
                <h3 className="font-semibold text-gray-900 mb-1">Drivers</h3>
                <p className="text-sm text-gray-500">Auto coverage you can count on every mile.</p>
              </div>
            </div>
          </section>

          {/* Why Farmers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Choose Farmers</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-[#8b1a2e] font-bold mt-0.5">✓</span>
                <span><strong className="text-gray-900">Trusted for decades</strong> — A long history of helping customers through life's biggest moments.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8b1a2e] font-bold mt-0.5">✓</span>
                <span><strong className="text-gray-900">Personalized coverage</strong> — We tailor policies to fit your life, not the other way around.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8b1a2e] font-bold mt-0.5">✓</span>
                <span><strong className="text-gray-900">Here when it counts</strong> — Fast, responsive claims support when you need it most.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8b1a2e] font-bold mt-0.5">✓</span>
                <span><strong className="text-gray-900">Dedicated agents</strong> — Real people who care about your wellbeing and your coverage.</span>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Ready to get started?</h2>
            <p className="text-gray-500 mb-5 text-sm">Fill out our quick form and we'll be in touch to help you find the right coverage.</p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-[#f9987d] hover:bg-[#f7845f] text-white font-semibold rounded-md transition-colors duration-200"
            >
              Get a Quote
            </Link>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
