"use client";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-gradient"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
            The AI Operating System
            <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              That Runs Hotels
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Omriq is the first comprehensive AI platform that automates guest
            communication, operations, and workflows—transforming how hotels
            operate and serve guests.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => scrollToSection("demo")}
              className="px-8 py-4 bg-gray-900 text-white text-lg font-semibold rounded-xl hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Try Live AI Demo
            </button>
            <button
              onClick={() => scrollToSection("investor-meeting")}
              className="px-8 py-4 bg-white text-gray-900 text-lg font-semibold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg border border-gray-200"
            >
              Book Investor Meeting
            </button>
          </div>

          {/* Mockup cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                AI Call Transcript
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="bg-gray-100 rounded p-2">Guest: "I need late checkout"</div>
                <div className="bg-indigo-50 rounded p-2">AI: "Absolutely, I've extended your checkout to 2 PM."</div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                AI Guest Chat
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="bg-gray-100 rounded p-2">Guest: "Where's the pool?"</div>
                <div className="bg-indigo-50 rounded p-2">AI: "The pool is on the 3rd floor, open 6 AM - 10 PM."</div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Task Routing
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="bg-green-50 rounded p-2">✓ Room service ordered</div>
                <div className="bg-blue-50 rounded p-2">→ Assigned to kitchen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

