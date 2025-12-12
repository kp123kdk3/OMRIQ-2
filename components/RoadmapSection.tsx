export default function RoadmapSection() {
  const roadmap = [
    {
      period: "Next 12 Months",
      title: "Product Launch & Early Traction",
      milestones: [
        "Launch MVP with voice AI and messaging capabilities",
        "Onboard 10 pilot hotel properties",
        "Achieve 90%+ guest satisfaction scores",
        "Secure Series A funding",
        "Expand team to 25 people",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      period: "Next 24 Months",
      title: "Scale & Market Expansion",
      milestones: [
        "Scale to 200+ hotel properties",
        "Launch in 3 new geographic markets",
        "Integrate with top 5 PMS systems",
        "Develop mobile app for hotel managers",
        "Reach $10M ARR",
      ],
      color: "from-indigo-500 to-purple-500",
    },
    {
      period: "Long-Term Vision",
      title: "Industry Transformation",
      milestones: [
        "Become the standard AI platform for hospitality",
        "Expand to vacation rentals and resorts",
        "Build ecosystem of third-party integrations",
        "Achieve $100M+ ARR",
        "Enable AI-powered hospitality operations globally",
      ],
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section
      id="vision"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Roadmap & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our path to transforming hospitality operations through AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmap.map((phase, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className={`bg-gradient-to-br ${phase.color} rounded-2xl p-8 h-full shadow-lg text-white`}>
                <div className="text-sm font-semibold mb-2 text-white/90">
                  {phase.period}
                </div>
                <h3 className="text-2xl font-bold mb-6">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.milestones.map((milestone, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <span className="text-white/80 mt-1">•</span>
                      <span className="text-white/95 text-sm">{milestone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Our Vision
          </h3>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            We envision a future where every hotel operates with an AI-powered
            brain that understands guest needs, anticipates requests, and
            orchestrates operations seamlessly. Omriq will be the foundational
            layer that makes this possible—enabling hotels to deliver
            exceptional experiences at scale while reducing costs and improving
            profitability.
          </p>
        </div>
      </div>
    </section>
  );
}

