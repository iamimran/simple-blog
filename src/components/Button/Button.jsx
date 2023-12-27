function Button({
  buttonText,
  type = "button",
  bgColor = "bg-blue-600",
  textColor = "white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg$ ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {buttonText}
    </button>
  );
}

export default Button;
