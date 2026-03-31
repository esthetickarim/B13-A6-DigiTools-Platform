import React from "react";

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 text-white py-12 px-4">
      
      <div className="max-w-5xl mx-auto">
        
        {/* Main Box */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center border border-white/20 rounded-lg px-6 md:px-12 py-8">
          
          {/* Item 1 */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold">50K+</h2>
            <p className="text-sm text-gray-200 mt-1">Active Users</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          {/* Item 2 */}
          <div className="flex-1 mt-6 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold">200+</h2>
            <p className="text-sm text-gray-200 mt-1">Premium Tools</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-12 bg-white/30"></div>

          {/* Item 3 */}
          <div className="flex-1 mt-6 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-bold">4.9</h2>
            <p className="text-sm text-gray-200 mt-1">Rating</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Stats;


