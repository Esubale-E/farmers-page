import { useState } from "react";
import Logo from "../assets/konectar-logo.png";

const NewsSubscription = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("You have subscribed successfully");
  };

  return (
    <section className="w-full bg-gray-200 flex flex-col justify-center items-center py-10 px-8 md:px-6">
      <div className="flex justify-center">
        <img className="w-2/5 md:w-1/5" src={Logo} alt="Logo" />
      </div>
      <h1 className="text-center mt-4 font-Manrope font-bold text-lg md:text-2xl leading-tight md:leading-snug">
        Subscribe to our newsletter to get first-hand updates.
      </h1>
      <form
        onSubmit={handleSubmit}
        className="mt-5 flex flex-col md:flex-row justify-center items-center md:items-start gap-4"
      >
        <input
          className="w-52 md:w-96 border border-gray-400 rounded-lg py-2 px-4"
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
        <button
          type="submit"
          className="bg-green-700 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg text-sm md:text-base"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsSubscription;
