import { useState } from "react";
import Logo from "../assets/konectar-logo.png";

const NewsSubscription = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("you have subscribed successfuly");
  };

  return (
    <section className="w-full bg-[#CECEDE] flex flex-col justify-center items-center py-11 px-12 md:px-4">
      <div className="flex justify-center">
        <img className="w-[40%] md:w-[18%]" src={Logo} alt="Logo" />
      </div>
      <h1 className="text-center mt-5 font-Manrope font-bold text-[1rem] md:text-[1.7rem] leading-tight md:leading-snug">
        Subscribe to our newsletter to get first-hand updates.
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-5 flex flex-col md:flex-row justify-center items-center md:items-start gap-5"
      >
        <input
          className="w-[200px] md:w-[400px] border-solid border-[#948e8e] border-[1px] rounded-lg py-1 md:py-1.5 px-5"
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          type="submit"
          className="bg-[#003333] text-white px-6 py-2 md:px-8 md:py-2.5 rounded-lg text-[0.8rem] md:text-[1rem]"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsSubscription;
