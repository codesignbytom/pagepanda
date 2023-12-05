import { useState } from "react";

const FaqItem = ({ question, answer, initiallyExpanded }) => {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded || false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`flex ${
        !isExpanded ? "items-center" : ""
      } gap-6 select-none cursor-pointer pb-6 border-b border-black/50`}
      onClick={toggleExpand}
    >
      {isExpanded ? (
        <i className="ph-light ph-minus text-2xl text-black"></i>
      ) : (
        <i className="ph-light ph-plus text-2xl text-black"></i>
      )}
      <div className="flex flex-col gap-2 lg:gap-4">
        <h3 className="text-lg font-medium">{question}</h3>
        {isExpanded ? (
          <p className={`text-sm ${isExpanded ? "opacity-75" : "opacity-0"}`}>
            {answer}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default FaqItem;
