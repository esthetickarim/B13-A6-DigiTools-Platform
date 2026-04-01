import React from "react";

const Banner = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>

          {/* AI Label */}
          <span className="inline-block bg-purple-100 text-purple-700 text-sm font-medium px-4 py-1 rounded-full mb-4">
            ✨ New AI-Powered Tools Available
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>

          {/* Description */}
          <p className="mt-4 text-gray-600 max-w-lg">
            Access premium AI tools, design assets, templates and productivity
            software all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium">
              Explore Products
            </button>

            <button className="flex items-center gap-2 border border-purple-600 text-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50">
              <img src="/Play.png" alt="play" className="w-4 h-4" />
              Watch Demo
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div>
          <img
            src="/banner.png"
            alt="Banner"
            className="w-full max-w-md mx-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;


