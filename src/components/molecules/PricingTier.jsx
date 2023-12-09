import { useState } from "react";
import PriceToggle from "./PriceToggle.jsx";
import PricingTierFeature from "../atoms/PricingTierFeature.jsx";
import Button from "../atoms/Button.jsx";

const PricingComponent = ({
  plan,
  title,
  price,
  userNumber,
  features,
  button,
  classes = "",
}) => {
  const [isMonthly, setIsMonthly] = useState(false);
  const planClass =
    plan === "standard"
      ? "border-secondary-600 bg-gradient-to-t from-transparent to-white/10 lg:pt-24"
      : "border-white/20";
  const freePlanClass = plan === "free" ? "pb-12 border-b border-white/20" : "";
  const priceDisplay = isMonthly ? price?.monthly : price?.annually;
  const pricePeriod = isMonthly ? "per user/month" : "per user/month";

  return (
    <div
      className={`flex flex-col justify-center gap-12 px-6 py-12 lg:py-16 border rounded-md ${planClass} ${classes}`}
    >
      <div
        className={`flex flex-col gap-4 text-center items-center ${freePlanClass}`}
      >
        <div className="flex flex-col gap-2">
          <div className="font-medium opacity-50">{title}</div>
          <div className="text-xl font-medium">
            {!priceDisplay
              ? "Free for everyone"
              : `$${priceDisplay} ${pricePeriod}`}
          </div>
        </div>
        {userNumber && (
          <div className="flex items-center gap-2 opacity-50">
            <i className="ph-fill ph-users" />
            <span className="text-sm">Best for {userNumber} users</span>
          </div>
        )}
      </div>
      {plan !== "free" && (
        <div className="flex items-center justify-center gap-2">
          <div className="w-full h-px bg-white/20" />
          {price?.monthly && price?.annually && (
            <PriceToggle isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
          )}
          {plan === "plus" && (
            <span className="text-sm whitespace-nowrap">
              Annual billing only
            </span>
          )}
          <div className="w-full h-px bg-white/20" />
        </div>
      )}
      <ul className="flex flex-col gap-4">
        {plan !== "free" && (
          <li>
            Everything from{" "}
            <span className="font-medium">
              {plan === "standard" ? "Free" : "Standard"}
            </span>
            , plus
          </li>
        )}
        {features?.map((feature, index) => (
          <PricingTierFeature key={index} title={feature} />
        ))}
      </ul>
      <Button
        text={button?.text}
        link={button?.link}
        classes={`${
          plan === "standard"
            ? "button--primary"
            : plan === "plus"
            ? "button--white"
            : "button-outlined--white"
        }`}
      />
    </div>
  );
};

export default PricingComponent;
