const Button = ({ text, link, classes = "button" }) => {
  return (
    <a className={`${classes} button`} href={link}>
      {text}
    </a>
  );
};

export default Button;
