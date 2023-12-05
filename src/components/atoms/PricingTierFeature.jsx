const PricingTierFeature = ({ title }) => {
  return (
    <li className="flex items-center gap-3">
      <i className="ph-light text-xl text-primary-500 ph-check"></i>
      <span>{title}</span>
    </li>
  );
};

export default PricingTierFeature;
