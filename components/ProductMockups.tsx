export default function ProductMockups() {
  const mockups = [
    {
      title: "AI Call Transcript",
      description: "Real-time transcription and intelligent routing",
      content: (
        <div className="bg-gray-900 rounded-lg p-6 text-white font-mono text-sm">
          <div className="mb-4">
            <div className="text-green-400 mb-2">[10:23 AM] Guest Call</div>
            <div className="bg-gray-800 rounded p-3 mb-2">
              <span className="text-blue-400">Guest:</span> "Hi, I need to
              check in early, around 1 PM."
            </div>
            <div className="bg-gray-800 rounded p-3 mb-2">
              <span className="text-purple-400">AI:</span> "I'll check room
              availability. One moment please..."
            </div>
            <div className="bg-gray-800 rounded p-3 mb-2">
              <span className="text-purple-400">AI:</span> "Perfect! I've
              upgraded you to an early check-in room. You'll receive a text when
              it's ready."
            </div>
            <div className="text-green-400 text-xs mt-4">
              ✓ Task created: Early check-in preparation
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Guest Messaging Window",
      description: "Multi-channel conversation management",
      content: (
        <div className="bg-white rounded-lg border border-gray-200 p-6 h-full flex flex-col">
          <div className="flex items-center mb-4 pb-4 border-b">
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
              G
            </div>
            <div>
              <div className="font-semibold text-gray-900">Guest #1205</div>
              <div className="text-sm text-gray-500">Online • WhatsApp</div>
            </div>
          </div>
          <div className="flex-1 space-y-3">
            <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-800">
              What time is checkout?
            </div>
            <div className="bg-indigo-50 rounded-lg p-3 text-sm text-gray-800 ml-auto max-w-[80%]">
              Checkout is at 11:00 AM. Would you like to extend your stay?
            </div>
            <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-800">
              Yes, one more night please
            </div>
            <div className="bg-indigo-50 rounded-lg p-3 text-sm text-gray-800 ml-auto max-w-[80%]">
              ✓ I've extended your reservation. Confirmation sent to your email.
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Task Workflow",
      description: "Intelligent task routing and tracking",
      content: (
        <div className="space-y-3">
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded p-4">
            <div className="font-semibold text-gray-900 mb-1">
              Room Service Order
            </div>
            <div className="text-sm text-gray-600">
              Room 304 • Burger & Fries
            </div>
            <div className="text-xs text-blue-600 mt-2">→ Assigned to Kitchen</div>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 rounded p-4">
            <div className="font-semibold text-gray-900 mb-1">
              Late Checkout Request
            </div>
            <div className="text-sm text-gray-600">Room 512 • Until 2 PM</div>
            <div className="text-xs text-purple-600 mt-2">→ Assigned to Housekeeping</div>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 rounded p-4">
            <div className="font-semibold text-gray-900 mb-1">
              Maintenance Request
            </div>
            <div className="text-sm text-gray-600">Room 201 • AC Not Working</div>
            <div className="text-xs text-green-600 mt-2">✓ Completed</div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Product Preview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our platform looks and feels. These are static mockups for
            demonstration purposes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockups.map((mockup, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {mockup.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                {mockup.description}
              </p>
              <div className="bg-white rounded-lg">{mockup.content}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

