import { useState } from "react";
import PriceToggle from "./PriceToggle.jsx";
import PricingTierFeature from "../atoms/PricingTierFeature.jsx";

const PricingComponent = ({
  plan,
  title,
  price,
  userNumber,
  features,
  button,
}) => {
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <div
      className={`flex flex-col gap-12 px-8 py-12 border rounded-md ${
        plan === "standard"
          ? "border-secondary-500 bg-gradient-to-t from-transparent from-20% to-white/10 backdrop-blur-xl"
          : "border-white/20"
      }`}
    >
      <div
        className={`flex flex-col gap-4 text-center items-center ${
          plan === "free" ? "pb-12 border-b border-white/20" : ""
        }`}
      >
        <div className="flex flex-col gap-2">
          <div className="opacity-50 font-medium">{title}</div>
          {!price?.monthly && !price?.annually ? (
            <div className="font-medium text-xl">Free for everyone</div>
          ) : (
            <span className="text-xl font-medium flex gap-1 items-center">
              {isMonthly ? (
                <span>${price?.monthly}</span>
              ) : (
                <span>${price?.annually}</span>
              )}
              {isMonthly && price?.monthly && <span>per user/month</span>}
              {!isMonthly && price?.annually && <span>per user/month</span>}
            </span>
          )}
        </div>
        {userNumber && userNumber !== 0 && (
          <div className="flex items-center gap-2 opacity-50">
            <i className="ph-fill ph-users" />
            <span className="text-sm">Best for {userNumber} users</span>
          </div>
        )}
      </div>
      {plan !== "free" && (
        <div className="flex items-center justify-center gap-2">
          <div className="h-px bg-white/20 w-full" />
          {price?.monthly && price?.annually && (
            <PriceToggle isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
          )}
          {plan === "plus" && (
            <span className="text-sm whitespace-nowrap">
              Annual billing only
            </span>
          )}
          <div className="h-px bg-white/20 w-full" />
        </div>
      )}
      <ul className="flex flex-col gap-4">
        {features?.map((feature, index) => (
          <PricingTierFeature key={index} title={feature} />
        ))}
      </ul>
      <a
        href={button?.link}
        className={`button w-full ${
          plan === "standard"
            ? "bg-primary-500 text-black"
            : plan === "plus"
            ? "bg-white text-black"
            : "button-outlined--white"
        }`}
      >
        {button?.text}
      </a>
    </div>
  );
};

export default PricingComponent;
