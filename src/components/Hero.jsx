const Hero = () => {
  return (
    <section className="bg-[linear-gradient(to_right,rgba(6,8,15,0.6),rgba(6,8,15,0.2)),url('/Imagcabageholder.png')] h-screen bg-cover md:bg-top bg-center bg-no-repeat text-white text-left justify-start items-center flex lg:px-0 px-8">
      <div className="md:w-2/4 md:ml-24">
        <h1 className="font-Manrope font-semibold text-left text-[2rem] md:text-[2.8rem]">
          Unlock New Markets and Increase Profits
        </h1>
        <p className="text-xs md:text-base mt-8">
          Skip multiple middlemen and sell directly to businesses like:
          Supermarkets, Quick Service, Restaurants, Hotels and Food Processors
          in One Click!
        </p>
        <div className="mt-8">
          <a href="/WaitingListForm">
            <button
              type="button"
              className="bg-green-700 mt-4 px-6 py-2 md:px-9 rounded-lg text-xs md:text-base text-white"
            >
              Join Waitlist
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
