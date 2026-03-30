const Banner = () => {
  return (
    <section className="hero bg-base-100 py-10 md:py-20 px-4 md:px-10">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src="/assets/banner.png"
          className="max-w-sm w-full rounded-2xl shadow-lg"
          alt="Banner"
        />
        <div>
          <p className="text-primary font-semibold mb-2">DigiTools</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Supercharge Your <br /> Digital Workflow
          </h1>
          <p className="py-6 text-gray-500 max-w-lg">
            Access premium digital tools, templates, and productivity assets to
            streamline your work and grow faster.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-outline btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;