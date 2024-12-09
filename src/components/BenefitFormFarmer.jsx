import benefits1 from "../assets/benefits1.png";
import benefits2 from "../assets/benefits2.png";
import benefits3 from "../assets/benefits3.png";

const FarmerBenefits = () => {
  return (
    <section className="w-full p-10 text-[#003311] pb-32">
      <h1 className="text-[2rem] md:text-[2.6rem] font-bold text-center">
        The Benefits: For Farmers
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-end md:px-14 mt-10 md:mt-20 gap-5 md:gap-0">
        <div className="md:basis-[42%] md:z-40 md:mr-[-2rem] md:mb-[-2.5rem]">
          <img
            className="rounded-lg w-full md:h-full"
            src={benefits1}
            alt="Picture 1"
            loading="lazy"
          />
        </div>
        <div className="container bg-[#9acfab] rounded-lg py-3 md:py-16 px-16 md:basis-[58%]">
          <p className="font-bold text-[1rem] md:text-[1.4rem]">
            Direct Market Access
          </p>
          <p className="mt-4 md:mt-8 text-[0.8rem] md:text-[1.3rem]">
            Konectar connects farmers directly with wholesale buyers,
            eliminating middlemen and allowing them to receive fair prices for
            their produce. This direct access enhances their market reach and
            boosts profitability.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-end md:px-14 mt-10 md:mt-20 gap-5 md:gap-0">
        <div className="md:basis-[42%] md:z-40 md:mr-[-2rem] md:mb-[-2.5rem]">
          <img
            className="rounded-lg w-full h-full"
            src={benefits2}
            alt="Picture 2"
            loading="lazy"
          />
        </div>
        <div className="container bg-[#9acfab] rounded-lg py-3 md:py-20 px-16 md:basis-[58%]">
          <p className="font-bold text-[1rem] md:text-[1.4rem]">
            Secure Transactions with Escrow Payments
          </p>
          <p className="mt-4 md:mt-8 text-[0.8rem] md:text-[1.3rem]">
            The escrow payment system ensures farmers receive payments only when
            buyers confirm satisfaction with the delivery. This builds trust and
            reduces the risk of payment delays, providing peace of mind for
            farmers.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center md:items-end md:px-14 mt-10 md:mt-20 gap-5 md:gap-0">
        <div className="md:basis-[42%] md:z-40 md:mr-[-2rem] md:mb-[-2.5rem]">
          <img
            className="rounded-lg w-full h-full"
            src={benefits3}
            alt="Picture 3"
            loading="lazy"
          />
        </div>
        <div className="container bg-[#9acfab] rounded-lg py-3 md:py-10 px-16 md:basis-[58%]">
          <p className="font-bold text-[1rem] md:text-[1.4rem]">
            Cold Chain Logistics Support
          </p>
          <p className="mt-4 md:mt-8 text-[0.8rem] md:text-[1.3rem]">
            Through partnerships with our third-party cold-chain logistics
            providers, we help farmers preserve the freshness and quality of
            their produce during transportation. This reduces post-harvest
            losses and increases the likelihood of securing better prices from
            buyers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FarmerBenefits;
