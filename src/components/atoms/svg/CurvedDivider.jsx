import SVGComponent from "../Svg";

const CurvedDivider = ({
  classes = "",
  flipVertical = false,
  color = "#ffbb00",
}) => {
  return (
    <SVGComponent
      viewBox="0 0 1920 284"
      className={`${classes} w-full h-full ${
        flipVertical ? "-mt-px" : "-mb-px"
      }`}
      svgPath="M0 0V0C629.774 161.794 1290.23 161.794 1920 0V0V284H960H0V0Z"
      flipVertical={flipVertical}
      color={color}
    />
  );
};

export default CurvedDivider;
