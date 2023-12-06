const Button = ({ text = "", link, classes, icon = "", iconClasses = "" }) => {
  return (
    <a className={`${classes} button`} href={link || "#"}>
      {icon && <i className={`ph-light ph-${icon} ${iconClasses}`}></i>}
      {text && <span>{text}</span>}
    </a>
  );
};

export default Button;
