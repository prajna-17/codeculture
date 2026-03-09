"use client";

export default function ServicesStrategy() {
  return (
    <section className="bg-[#f5f5f5] py-24 text-center">
      <div className="max-w-[1000px] mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#7A360D]">
          We use strategy and experience <br /> to generate results
        </h2>

        <p className="text-gray-600 mt-6 max-w-xl mx-auto">
          We have a proven track record in increasing search engine rankings for
          our clients. Our strategies are designed to achieve one or more of the
          following goals:
        </p>

        {/* FEATURES */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2">Call To Action</h3>
            <p className="text-gray-600 text-sm">
              Inspire the target audience to take action on your website.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2">Engage</h3>
            <p className="text-gray-600 text-sm">
              Encourage dialogue and coverage from a loyal audience.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-lg mb-2">Inspire</h3>
            <p className="text-gray-600 text-sm">
              Inspire the target audience to visit your website and take action.
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#7A360D] text-white py-4 mt-20">
        <div className="max-w-[1100px] mx-auto flex justify-center flex-wrap gap-6 text-sm">
          <span>• Creative People</span>
          <span>• Good Reviews</span>
          <span>• Awesome Designs</span>
          <span>• Fast Delivery</span>
        </div>
      </div>
    </section>
  );
}
