import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import FAQSection from "./components/FAQSection";
import Hero from "./components/Hero";
import WhatWeOffer from "./components/WhatWeOffer";
import HowItWorks from "./components/HowItWorks";
import BenefitsForFarmers from "./components/BenefitFormFarmer";
import NewsSubscription from "./components/NewsSubscrioption";
import Footer from "./components/Footer";
import "./App.css";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <NavBar />
      <Hero />
      <WhatWeOffer />
      <HowItWorks />
      <BenefitsForFarmers />
      <FAQSection />
      <NewsSubscription />
      <Footer />
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-[#009933] text-white p-3 rounded-full shadow-lg hover:bg-green-900 transition duration-300"
        >
          Back to Top <FaArrowUp className="inline" />
        </button>
      )}
    </div>
  );
}

export default App;
