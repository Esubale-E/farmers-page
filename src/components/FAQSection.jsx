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
    <section className="w-full text-white bg-green-900 mx-auto py-10 px-10 md:px-60">
      <h1 className="font-bold text-2xl md:text-3xl text-center text-gray-300">
        We know you have questions.
      </h1>
      <p className="mt-3 text-center mb-12 text-gray-300">
        So we have answered some of them.
      </p>

      <div className="block">
        {QandAs.map((QandA, i) => (
          <div
            key={i}
            className="text-green-900 bg-white rounded-md py-2 px-3 mb-7 font-semibold cursor-pointer"
            onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
          >
            <div className="flex justify-between items-center">
              <p>{QandA.question}</p>
              <p className="cursor-pointer text-4xl font-bold">
                {expandedIndex === i ? "-" : "+"}
              </p>
            </div>
            {expandedIndex === i && <div className="mt-4">{QandA.answer}</div>}
          </div>
        ))}
        <div className="flex justify-end font-bold">
          <button
            className="text-green-900 rounded-md bg-white py-2 px-4"
            onClick={toggleVisibleContent}
          >
            {visiblseQandAs === 5 ? "View More FAQs" : "View Less FAQs"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
