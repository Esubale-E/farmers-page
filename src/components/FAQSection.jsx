import { useState } from "react";
import questionsAndAnswers from "../services/questionAndAnswers";

const FAQSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [visiblseQandAs, setVisibleQandAs] = useState(5);
  const toggleVisibleContent = () => {
    setVisibleQandAs(visiblseQandAs === 5 ? questionsAndAnswers.length : 5);
  };

  const QandAs = questionsAndAnswers.slice(0, visiblseQandAs);

  return (
    <section className="w-full text-white  bg-[#003311] m-auto py-10 px-10 md:px-60">
      <h1 className="font-bold text-[2rem] md:text-[2.8rem] text-center text-neutral20">
        We know you have questions.
      </h1>
      <p className="mt-3 text-center mb-12 text-neutral20">
        So we have answered some of them.
      </p>

      <div className="block">
        {QandAs.map((QandA, i) => (
          <div
            key={i}
            className="text-[#003311] bg-white rounded-md py-2 px-3 mb-7 font-semibold"
            onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <p>{QandA.question}</p>
              <p className="cursor-pointer text-[2.3rem] font-bold">
                {expandedIndex === i ? "-" : "+"}
              </p>
            </div>
            {expandedIndex === i && <div className="mt-4">{QandA.answer}</div>}
          </div>
        ))}
        <div className="flex justify-end font-bold">
          <button
            className="text-[#003311] rounded-md bg-white p-3"
            onClick={toggleVisibleContent}
          >
            {visiblseQandAs === 5 ? " View More FAQs" : " View Less FAQs"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
