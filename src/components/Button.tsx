type ButtonVariant = "primary" | "dismiss";

interface IButton {
  variant?: ButtonVariant;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ variant, children, onClick }: IButton) => {
  const baseStyle = "text-sm px-8 py-3 rounded-md";

  const styles = {
    primary: "bg-primary text-white",
    dismiss: "bg-lightGray",
  };

  const buttonStyle = (variant && styles[variant]) || "";

  return (
    <button onClick={onClick} className={`${baseStyle} ${buttonStyle}`}>
      {children}
    </button>
  );
};

export default Button;
