import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.png";
import phone4 from "../assets/phone4.png";
import phone5 from "../assets/phone5.png";

const HowItWorks = () => {
  return (
    <section className="w-full bg-green-900 py-16 px-4 md:px-6 text-white">
      <h1 className="text-center font-bold text-2xl md:text-4xl leading-tight md:leading-snug">
        How It Works in 3 Simple Steps
      </h1>
      <div className="w-full flex flex-col md:flex-row justify-between gap-6 items-center mt-10 px-6 md:px-20">
        <div className="w-full md:w-2/3 bg-green-200 rounded-xl text-green-950 p-5 md:p-10">
          <h1 className="text-xl md:text-2xl font-bold md:ml-32">Step 1</h1>
          <h2 className="text-sm md:text-lg font-bold mt-3">
            Sign Up and Add Your Farm Information
          </h2>
          <p className="text-sm md:text-lg mt-3 md:mt-5">
            Get started by creating an account on Konectar. Fill in your farm
            details, including location, crops grown, and expected harvest
            timelines. This helps connect you with the right buyers.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex items-end gap-3">
          <div className="w-1/2">
            <img
              className="w-full"
              src={phone1}
              alt="Picture 1"
              loading="lazy"
            />
          </div>
          <div className="w-1/2 mb-[-2rem] md:mb-[-4rem]">
            <img
              className="w-full"
              src={phone2}
              alt="Picture 2"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between gap-6 items-center mt-10 md:mt-14 px-6 md:px-20">
        <div className="w-full md:w-1/3 flex items-end gap-3">
          <div className="w-1/2">
            <img
              className="w-full"
              src={phone3}
              alt="Picture 3"
              loading="lazy"
            />
          </div>
          <div className="w-1/2 mb-12 md:mb-20">
            <img
              className="w-full"
              src={phone4}
              alt="Picture 4"
              loading="lazy"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3 bg-green-200 rounded-xl text-green-950 p-5 md:p-10">
          <h1 className="text-xl md:text-2xl font-bold md:ml-32">Step 2</h1>
          <h2 className="text-sm md:text-lg font-bold mt-3">
            Upload Your Produce and Manage Inventory
          </h2>
          <p className="text-sm md:text-lg mt-3 md:mt-5">
            Easily upload your available produce to the platform. Add
            quantities, quality specifications and pricing. Keep track of your
            inventory in real-time and make updates as needed.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row justify-between gap-6 items-center mt-10 px-6 md:px-20">
        <div className="w-full md:w-3/4 bg-green-200 rounded-xl text-green-950 p-5 md:p-10">
          <h1 className="text-xl md:text-2xl font-bold md:ml-32">Step 3</h1>
          <h2 className="text-sm md:text-lg font-bold mt-3">
            Manage Orders and Confirm Payments
          </h2>
          <p className="text-sm md:text-lg mt-3 md:mt-5">
            Once buyers place orders, manage them through your dashboard.
            Confirm sales, arrange delivery and receive secure payments through
            our escrow system, ensuring peace of mind with every transaction.
          </p>
        </div>
        <div className="w-full md:w-1/4">
          <img className="w-full" src={phone5} alt="Picture 5" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
