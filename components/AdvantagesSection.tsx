export default function AdvantagesSection() {
  const competitors = [
    {
      feature: "Voice AI Capabilities",
      omriq: "✓ Full natural language voice AI",
      others: "Limited or no voice AI",
    },
    {
      feature: "Automation Depth",
      omriq: "End-to-end workflow automation",
      others: "Basic task routing only",
    },
    {
      feature: "PMS Integrations",
      omriq: "Deep integration with major PMS",
      others: "Surface-level integrations",
    },
    {
      feature: "Multi-Channel Support",
      omriq: "Unified phone, SMS, chat, email",
      others: "Single or limited channels",
    },
    {
      feature: "AI Intelligence",
      omriq: "Predictive insights & learning",
      others: "Rule-based responses",
    },
    {
      feature: "Customization",
      omriq: "Fully customizable AI behavior",
      others: "Limited customization options",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Competitive Advantage
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why Omriq is positioned to win in the hospitality AI space.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Feature
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-indigo-600">
                    Omriq
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">
                    Traditional Solutions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {competitors.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {row.omriq}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {row.others}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-6 border border-indigo-100">
            <div className="text-2xl font-bold text-indigo-900 mb-2">
              First-Mover
            </div>
            <div className="text-gray-700">
              Comprehensive AI platform specifically built for hospitality, not
              adapted from other industries.
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
            <div className="text-2xl font-bold text-purple-900 mb-2">
              Deep Integration
            </div>
            <div className="text-gray-700">
              Native connections to hotel systems enable true end-to-end
              automation, not just communication.
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100">
            <div className="text-2xl font-bold text-green-900 mb-2">
              Proprietary AI
            </div>
            <div className="text-gray-700">
              Custom-trained models understand hospitality context, terminology,
              and guest intent better than generic solutions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

