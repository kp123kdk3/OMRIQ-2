"use client";

export default function FinalCTA() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Transform Hospitality?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join us in building the future of hotel operations. Experience the
          demo or schedule a meeting with our founders.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("demo")}
            className="px-8 py-4 bg-white text-indigo-600 text-lg font-semibold rounded-xl hover:bg-gray-50 transition-all transform hover:scale-105 shadow-xl"
          >
            Try Demo
          </button>
          <button
            onClick={() => scrollToSection("investor-meeting")}
            className="px-8 py-4 bg-indigo-900/50 backdrop-blur-sm text-white text-lg font-semibold rounded-xl hover:bg-indigo-900/70 transition-all transform hover:scale-105 shadow-xl border border-white/20"
          >
            Book Meeting
          </button>
        </div>
      </div>
    </section>
  );
}

