const pricingData = [
  {
    name: "Starter",
    desc: "Perfect for getting started",
    price: "$0",
    period: "/Month",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
    highlight: false,
  },
  {
    name: "Pro",
    desc: "Best for professionals",
    price: "$29",
    period: "/Month",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    desc: "For teams and businesses",
    price: "$99",
    period: "/Month",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold mb-2">
        Simple, Transparent Pricing
      </h2>
      <p className="text-gray-500 mb-12">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6 px-4 md:px-12">
        {pricingData.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-2xl shadow-sm transition hover:shadow-lg ${
              plan.highlight
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white scale-105"
                : "bg-white"
            }`}
          >
            {/* Badge */}
            {plan.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full text-black">
                Most Popular
              </span>
            )}

            {/* Title */}
            <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
            <p
              className={`text-sm mb-4 ${
                plan.highlight ? "text-gray-200" : "text-gray-500"
              }`}
            >
              {plan.desc}
            </p>

            {/* Price */}
            <p className="text-3xl font-bold mb-6">
              {plan.price}
              <span className="text-sm font-normal">{plan.period}</span>
            </p>

            {/* Features */}
            <ul className="text-left space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span>✔</span>
                  <span
                    className={
                      plan.highlight ? "text-gray-100" : "text-gray-600"
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`w-full py-2 rounded-full font-medium transition ${
                plan.highlight
                  ? "bg-white text-purple-600 hover:bg-gray-200"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;