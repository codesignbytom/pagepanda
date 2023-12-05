const CurvedDivider = ({
  className = "",
  color = "#FFBB00",
  width = "100%",
  height = "100%",
  flipVertical = false,
}) => {
  const style = {
    transform: flipVertical ? "scaleY(-1)" : "none",
  };

  return (
    <svg
      className={`${className} ${flipVertical ? "-mt-px" : "-mb-px"}`}
      style={style}
      width={width}
      height={height}
      viewBox="0 0 1920 284"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0V0C629.774 161.794 1290.23 161.794 1920 0V0V284H960H0V0Z"
        fill={color}
      />
    </svg>
  );
};

export default CurvedDivider;
