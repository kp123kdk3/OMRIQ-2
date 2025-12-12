export default function ProblemSection() {
  const problems = [
    {
      stat: "$4.2B",
      label: "Annual labor costs in US hotels",
      description:
        "Hotels spend billions on front desk, concierge, and guest services staff.",
    },
    {
      stat: "67%",
      label: "Of calls are routine inquiries",
      description:
        "The majority of guest interactions are repetitive and could be automated.",
    },
    {
      stat: "24/7",
      label: "Guest expectations for service",
      description:
        "Modern travelers expect instant responses at any time, day or night.",
    },
    {
      stat: "35%",
      label: "Staff turnover rate",
      description:
        "High turnover creates inconsistency and training overhead for hotels.",
    },
  ];

  const painPoints = [
    "Front desk staff overwhelmed during peak hours and late-night shifts",
    "Language barriers create communication gaps with international guests",
    "Manual task routing leads to delays and missed requests",
    "Fragmented communication across phone, email, SMS, and chat platforms",
    "High operational costs without proportional guest satisfaction improvements",
    "Lack of actionable insights from guest interaction data",
  ];

  return (
    <section
      id="problem"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            The Problem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hotels are struggling with rising labor costs, staffing shortages,
            and the need to deliver exceptional guest experiences 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-100"
            >
              <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                {problem.stat}
              </div>
              <div className="text-sm font-semibold text-gray-900 mb-2">
                {problem.label}
              </div>
              <div className="text-sm text-gray-600">{problem.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Key Pain Points
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 text-gray-700"
              >
                <span className="text-red-500 mt-1">•</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

