export default function WhatWeDo() {
  const features = [
    {
      title: "AI Receptionist",
      subtitle: "Voice AI",
      description:
        "24/7 intelligent voice assistant that handles phone calls, answers questions, and manages guest requests in natural language.",
      icon: "📞",
    },
    {
      title: "AI Guest Messaging",
      subtitle: "Multi-Channel",
      description:
        "Seamless messaging across SMS, WhatsApp, and in-app chat. AI responds instantly to guest inquiries, bookings, and service requests.",
      icon: "💬",
    },
    {
      title: "Smart Task Automation",
      subtitle: "Workflow Engine",
      description:
        "Automatically routes tasks to the right departments, tracks completion, and ensures nothing falls through the cracks.",
      icon: "⚙️",
    },
    {
      title: "Predictive Insights",
      subtitle: "Analytics & AI",
      description:
        "Data-driven insights help optimize operations, predict guest needs, and improve satisfaction scores.",
      icon: "📊",
    },
  ];

  return (
    <section
      id="product"
      className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A complete AI-powered operating system designed specifically for
            modern hospitality operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-indigo-600 font-medium mb-3">
                {feature.subtitle}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

