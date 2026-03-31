import React from "react";

const Banner = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6 items-center">

        <div>
          <h1 className="text-4xl font-bold">
            Supercharge Your Digital Workflow
          </h1>

          <p className="mt-4 text-gray-600">
            Access powerful tools to grow your business faster.
          </p>

          <button className="mt-6 bg-purple-600 text-white px-6 py-2 rounded">
            Get Started
          </button>
        </div>

        <div>
          <img
            src="/banner.png"
            alt="banner"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;