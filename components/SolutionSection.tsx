export default function SolutionSection() {
  const architecture = [
    {
      title: "Guest Channels",
      description:
        "Unified interface for phone, SMS, WhatsApp, email, and in-app messaging",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "AI Engine",
      description:
        "Advanced NLP and voice AI that understands context and intent",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Integrations Layer",
      description:
        "Seamless connections to PMS, booking systems, and hotel operations",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="solution"
      className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A unified platform that connects every touchpoint between guests and
            hotel operations through intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {architecture.map((item, index) => (
            <div
              key={index}
              className="relative group"
            >
              <div className={`bg-gradient-to-br ${item.color} rounded-2xl p-8 h-full shadow-lg transform transition-all group-hover:scale-105`}>
                <div className="text-white">
                  <div className="text-3xl font-bold mb-3">{item.title}</div>
                  <div className="text-white/90">{item.description}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            The Flow
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👤</span>
              </div>
              <div className="font-semibold text-gray-900">Guest Request</div>
            </div>
            <div className="text-gray-400 text-2xl">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🤖</span>
              </div>
              <div className="font-semibold text-gray-900">AI Processing</div>
            </div>
            <div className="text-gray-400 text-2xl">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚙️</span>
              </div>
              <div className="font-semibold text-gray-900">Automated Action</div>
            </div>
            <div className="text-gray-400 text-2xl">→</div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✓</span>
              </div>
              <div className="font-semibold text-gray-900">Guest Satisfied</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

