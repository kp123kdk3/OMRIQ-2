export default function MarketSection() {
  const marketData = [
    {
      title: "$1.5 Trillion",
      description: "Global hospitality industry size",
      detail: "Growing at 5.2% CAGR",
    },
    {
      title: "$32 Billion",
      description: "Annual software spend in hospitality",
      detail: "Increasing focus on automation",
    },
    {
      title: "200,000+",
      description: "Hotels worldwide",
      detail: "Addressable market opportunity",
    },
    {
      title: "85%",
      description: "Of hotels still rely on manual processes",
      detail: "Massive automation opportunity",
    },
  ];

  const trends = [
    "Labor shortages driving demand for automation solutions",
    "Guest expectations for instant, personalized service",
    "Rising operational costs requiring efficiency gains",
    "AI adoption accelerating across all industries",
    "Integration-first approach becoming standard",
  ];

  return (
    <section
      id="market"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-indigo-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Market & Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The hospitality industry is at an inflection point, ready for
            AI-powered transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {marketData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all"
            >
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
                {item.title}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {item.description}
              </div>
              <div className="text-sm text-gray-600">{item.detail}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Why Now?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trends.map((trend, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 text-gray-700"
              >
                <span className="text-indigo-500 mt-1 font-bold">→</span>
                <span className="text-lg">{trend}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-indigo-50 rounded-xl border border-indigo-100">
            <p className="text-gray-800 leading-relaxed">
              <strong className="text-indigo-900">The Opportunity:</strong>{" "}
              Hotels need solutions that reduce operational costs while improving
              guest satisfaction. Omriq addresses both by automating routine
              tasks and providing intelligent, always-on service that scales
              without proportional cost increases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

