import Quotes from "../atoms/svg/Quotes";

const Testimonial = ({ image, name, text, jobTitle, classes = "" }) => {
  return (
    <div
      className={`testimonial flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 bg-[#151515] p-6 sm:p-6 pt-12 sm:pt-12 md:p-10 md:pt-16 lg:p-12 xl:p-16 rounded-lg relative ${classes}`}
    >
      <p className="leading-relaxed">{text}</p>
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="object-cover w-12 h-12 rounded-full xl:h-16 xl:w-16"
        />
        <div className="flex flex-col gap-1">
          <h4>{name}</h4>
          <h5 className="text-caption--sm text-secondary-600">{jobTitle}</h5>
        </div>
      </div>
      <Quotes className="absolute grid items-center justify-center w-16 h-16 leading-none left-4 -top-8 md:left-6 md:-top-8 xl:h-24 xl:w-24 2xl:w-28 2xl:h-28 xl:-left-10 xl:-top-10 2xl:-left-14 2xl:-top-14" />
    </div>
  );
};

export default Testimonial;
