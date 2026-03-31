const stepsData = [
  {
    id: "01",
    title: "Create Account",
    desc: "Sign up for free in seconds. No credit card required to get started.",
    icon: "/assets/user.png",
  },
  {
    id: "02",
    title: "Choose Products",
    desc: "Browse our catalog and select the tools that fit your needs.",
    icon: "/assets/package.png",
  },
  {
    id: "03",
    title: "Start Creating",
    desc: "Download and start using your premium tools immediately.",
    icon: "/assets/rocket.png",
  },
];

const Steps = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Get Started In 3 Steps
      </h2>
      <p className="text-gray-500 mb-10">
        Start using premium digital tools in minutes, not hours.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 px-4 md:px-12">
        {stepsData.map((step) => (
          <div
            key={step.id}
            className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            {/* Step Number */}
            <span className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
              {step.id}
            </span>

            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100">
              <img src={step.icon} alt={step.title} className="w-8 h-8" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">{step.title}</h3>

            {/* Description */}
            <p className="text-gray-500 text-sm">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;