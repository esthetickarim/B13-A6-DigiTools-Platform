const Workflow = ({ setView }) => {
  // Scroll to pricing section
  const handleScrollToPricing = () => {
    const section = document.getElementById("pricing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 text-white px-4">
      
      <div className="max-w-4xl mx-auto text-center">
        
        
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Ready To Transform Your Workflow?
        </h2>

        {/* Description */}
        <p className="text-gray-200 text-sm md:text-base mb-2">
          Join thousands of professionals who are already using DigiTools to work smarter.
        </p>

        <p className="text-gray-300 text-sm md:text-base mb-10">
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          
          {/* Explore Products */}
          <button
            onClick={() => setView("products")}
            className="bg-white text-purple-600 px-7 py-3 rounded-full font-semibold shadow-md hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            Explore Products
          </button>

          {/* View Pricing */}
          <button
            onClick={handleScrollToPricing}
            className="border border-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 hover:scale-105 transition-all duration-300"
          >
            View Pricing
          </button>

        </div>

        {/* Footer Note */}
        <p className="text-xs md:text-sm text-gray-300">
          No setup fee. No credit card required. Cancel anytime.
        </p>

      </div>
    </section>
  );
};

export default Workflow;