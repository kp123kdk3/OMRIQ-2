export default function TeamSection() {
  const team = [
    {
      name: "Kyryl Popov",
      role: "Co-Founder & CTO",
      bio: "Technology leader specializing in AI and scalable systems. Expert in building innovative solutions for hospitality automation.",
    },
    {
      name: "David Mahfar",
      role: "Co-Founder & CFO",
      bio: "Financial strategist with expertise in startup operations and growth. Focused on building sustainable business models in hospitality tech.",
    },
  ];

  return (
    <section
      id="team"
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A world-class team combining deep hospitality expertise with
            cutting-edge AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-indigo-600 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

