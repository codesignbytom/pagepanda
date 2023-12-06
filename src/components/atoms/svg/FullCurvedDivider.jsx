import SVGComponent from "../Svg";

const FullCurvedDivider = ({ classes = "", color = "#ffbb00" }) => {
  return (
    <SVGComponent
      viewBox="0 0 1920 540"
      className={`${classes} w-full h-full`}
      svgPath="M0 0V0C627.128 181.53 1292.87 181.53 1920 0V0V540L1833.43 523.408C1256.4 412.809 663.603 412.809 86.5655 523.408L0 540V0Z"
      color={color}
    />
  );
};

export default FullCurvedDivider;
