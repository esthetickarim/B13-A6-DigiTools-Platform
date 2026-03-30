const Steps = () => {
  const steps = [
    {
      title: "Browse Tools",
      description: "Explore our curated collection of premium digital products.",
      icon: "/assets/package.png",
    },
    {
      title: "Choose Plan",
      description: "Select the tools and pricing plans that fit your needs.",
      icon: "/assets/Play.png",
    },
    {
      title: "Start Growing",
      description: "Use the tools instantly and boost your productivity.",
      icon: "/assets/rocket.png",
    },
  ];

  return (
    <section id="steps" className="py-20 px-4 md:px-10 bg-base-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Get Started in 3 Steps</h2>
        <p className="text-gray-500 mt-3">Simple process to access your digital tools.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="card bg-base-100 shadow-lg border text-center p-6">
            <img src={step.icon} alt={step.title} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold">{step.title}</h3>
            <p className="text-gray-500 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Steps;