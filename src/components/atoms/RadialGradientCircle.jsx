const RadialGradientCircle = ({
  classes = "",
  fromColor = "secondary-600",
  opacity = 30,
}) => {
  return (
    <div
      className={`${classes} absolute w-[32rem] sm:w-[36rem] md:w-[40rem] lg:w-[48rem] xl:w-[56rem] 2xl:w-[64rem] h-auto aspect-square -z-20 bg-gradient-radial from-${fromColor} rounded-full blur-[6rem]`}
      style={{
        opacity: opacity / 100,
      }}
    ></div>
  );
};

export default RadialGradientCircle;
