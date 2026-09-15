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
            We help people find the right fit — guiding you through your options so you can make confident, informed decisions.
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 max-w-3xl w-full mx-auto px-5 py-12">
        <div className="space-y-10">

          {/* What We Do */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What We Do</h2>
            <p className="text-gray-600 leading-relaxed">
              At Farmers, we specialize in helping individuals and families navigate their options. We take the time to understand your situation and connect you with solutions that actually make sense for your life — no pressure, no guesswork.
            </p>
          </section>

          {/* Our Approach */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Approach</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We believe the best decisions come from having the right information. That's why we focus on consultation first — listening to what matters to you before recommending anything. Our role is to simplify the process and make sure you feel good about where you land.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="bg-gray-50 rounded-lg p-5 text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="font-semibold text-gray-900 mb-1">Personalized</h3>
                <p className="text-sm text-gray-500">We start with your needs, not a script.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 text-center">
                <div className="text-3xl mb-2">🤝</div>
                <h3 className="font-semibold text-gray-900 mb-1">Consultative</h3>
                <p className="text-sm text-gray-500">We guide, you decide. No pressure.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-5 text-center">
                <div className="text-3xl mb-2">💡</div>
                <h3 className="font-semibold text-gray-900 mb-1">Transparent</h3>
                <p className="text-sm text-gray-500">Clear answers to your questions, always.</p>
              </div>
            </div>
          </section>

          {/* Why Work With Us */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Why Work With Us</h2>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <span className="text-[#8b1a2e] font-bold mt-0.5">✓</span>
                <span><strong className="text-gray-900">We listen first</strong> — Every conversation starts with understanding your situation before anything else.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8b1a2e] font-bold mt-0.5">✓</span>
                <span><strong className="text-gray-900">We simplify complexity</strong> — We break things down so you can make decisions with confidence.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8b1a2e] font-bold mt-0.5">✓</span>
                <span><strong className="text-gray-900">We're in your corner</strong> — Our goal is to find what's right for you, not just what's available.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#8b1a2e] font-bold mt-0.5">✓</span>
                <span><strong className="text-gray-900">No obligation</strong> — Reach out, ask questions, and explore your options at your own pace.</span>
              </li>
            </ul>
          </section>

          {/* CTA */}
          <section className="bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Ready to explore your options?</h2>
            <p className="text-gray-500 mb-5 text-sm">Fill out our quick form and someone will reach out to walk you through everything.</p>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-[#f9987d] hover:bg-[#f7845f] text-white font-semibold rounded-md transition-colors duration-200"
            >
              Get Started
            </Link>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
