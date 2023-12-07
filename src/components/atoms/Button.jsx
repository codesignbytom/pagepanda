const Button = ({ text = "", link, classes, icon = "", iconClasses = "" }) => {
  const buttonClass = icon ? `${classes} button !py-3.5` : `${classes} button`;
  return (
    <a className={buttonClass} href={link || "#"}>
      {icon && <i className={`ph-light ph-${icon} ${iconClasses}`}></i>}
      {text && <span>{text}</span>}
    </a>
  );
};

export default Button;
