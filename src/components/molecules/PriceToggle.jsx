function PriceToggle({ isMonthly, setIsMonthly }) {
  const handleToggle = () => setIsMonthly(!isMonthly);

  const ToggleButton = ({ label, isLeftAligned }) => {
    const isActive = isMonthly === isLeftAligned;
    let alignmentClass = "";

    if (isLeftAligned) {
      alignmentClass = isActive ? "-mr-4" : "pr-6";
    } else {
      alignmentClass = isActive ? "-ml-4" : "pl-6";
    }

    return (
      <div
        className={`toggle-${label.toLowerCase()} ${
          isActive
            ? "bg-primary-500 text-black hover:bg-primary-400 hover:shadow-md hover:shadow-primary-500"
            : "bg-white/10 text-white/40 hover:bg-white/20"
        } ${alignmentClass} rounded-full flex items-center justify-center py-0.5 px-4 text-sm font-medium cursor-pointer select-none transition-[colors, box-shadow] duration-150`}
        onClick={handleToggle}
      >
        {label}
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center">
      <ToggleButton label="Monthly" isLeftAligned={true} />
      <ToggleButton label="Annually" isLeftAligned={false} />
    </div>
  );
}

export default PriceToggle;
