const SVGComponent = ({
  className = "w-full h-full",
  color = "white",
  flipVertical = false,
  flipHorizontal = false,
  viewBox = "",
  svgPath = "",
  gradientStops = [], // Array of color stops
  gradientType = "linear", // Default to 'linear'
  gradientId = "gradient", // Default gradient ID
  // Gradient attributes for direction
  gradientAttributes = { x1: "0%", y1: "0%", x2: "100%", y2: "0%" }, // Default for linear
}) => {
  let transformClasses = "";
  if (flipVertical) {
    transformClasses += " scale-y-[-1]";
  }
  if (flipHorizontal) {
    transformClasses += " scale-x-[-1]";
  }

  // Determine if gradient is needed
  const isGradient = gradientStops.length > 0;

  // Render gradient definition if needed
  const renderGradient = () => {
    if (isGradient) {
      const GradientTag =
        gradientType === "radial" ? "radialGradient" : "linearGradient";
      return (
        <defs>
          <GradientTag id={gradientId} {...gradientAttributes}>
            {gradientStops.map((stop, index) => (
              <stop key={index} offset={stop.offset} stopColor={stop.color} />
            ))}
          </GradientTag>
        </defs>
      );
    }
    return null;
  };

  return (
    <svg
      className={`${className}${transformClasses}`}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {renderGradient()}
      <path d={svgPath} fill={isGradient ? `url(#${gradientId})` : color} />
    </svg>
  );
};

export default SVGComponent;
