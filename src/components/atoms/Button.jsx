const Button = ({ text, onClick, classes }) => {
  return (
    <button className={classes} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
