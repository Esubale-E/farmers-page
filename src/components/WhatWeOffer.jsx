const WhatWeOffer = () => {
  return (
    <section className="w-full  bg-gray-300 p-10 py-24 text-center">
      <h1 className="text-center text-[#0d2727] font-bold text-[2rem] md:text-[2.8rem]">
        What We Offer
      </h1>
      <p className="text-center text-[1rem] md:text-[1.3rem] text-[#003311] font-semibold">
        Produce, Harvest, and Sell without Stress
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mt-8">
        <div className="h-20 w-80 text-white py-6 px-5 rounded-lg cursor-default bg-[#07190B] group">
          <p className="block group-hover:hidden">
            Negotiate Pricing in Real-Time
          </p>
          <p className="text-sm hidden group-hover:block ">
            Negotiate better deals on the platform without middlemen taking a
            cut
          </p>
        </div>
        <div className="group h-[80px] w-[300px] text-white py-6 px-5 rounded-lg cursor-default bg-[#07190B]">
          <p className="block group-hover:hidden">Guaranteed Payments</p>
          <p className="text-sm hidden group-hover:block ">
            Secure and timely payments through our escrow service
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-24 mt-8">
        <div className="group h-[87px] w-[300px] text-white cursor-default py-6 px-4 rounded-lg bg-[#07190B]">
          <p className="block group-hover:hidden">
            Direct Access to Verified Wholesale Buyers
          </p>
          <p className="text-sm hidden group-hover:block ">
            Connect instantly with wholesale buyers looking for fresh produce
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mt-8">
        <div className="group h-[83px] w-[300px] text-white py-6 px-5 rounded-lg cursor-default bg-[#07190B]">
          <p className="block group-hover:hidden">
            Efficient Logistics & Delivery
          </p>
          <p className="text-sm hidden group-hover:block ">
            Access Cold-chain storage and transport to preserve and transport
            your fresh produce without losing its quality.
          </p>
        </div>
        <div className="group h-[80px] w-[300px] text-white py-6 px-5 rounded-lg cursor-default bg-[#07190B]">
          <p className="block group-hover:hidden">Market Insights</p>

          <p className="text-sm hidden group-hover:block ">
            Be informed ahead with real-time market trends and demand forecasts
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
