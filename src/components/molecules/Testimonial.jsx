import Quotes from "../atoms/Quotes";

const Testimonial = ({ image, name, text, jobTitle, classes = "" }) => {
  return (
    <div
      className={`flex flex-col gap-6 bg-[#151515] p-6 pt-12 sm:p-8 sm:pt-14 md:p-10 md:pt-16 rounded-lg relative ${classes}`}
    >
      <p className="leading-relaxed">{text}</p>
      <div className="flex gap-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex flex-col gap-1">
          <h3>{name}</h3>
          <h4 className="text-caption--md text-secondary-600">{jobTitle}</h4>
        </div>
      </div>
      <Quotes className="absolute left-4 -top-8 md:left-6 md:-top-6 leading-none w-16 lg:h-20 lg:w-20 h-16 grid items-center justify-center" />
    </div>
  );
};

export default Testimonial;
