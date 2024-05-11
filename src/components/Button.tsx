type ButtonVariant = "primary" | "dismiss";
type ButtonType = "button" | "submit";
interface IButton {
  type?: ButtonType;
  customStyle?: string;
  variant?: ButtonVariant;
  children: string | React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  type = "button",
  variant,
  children,
  onClick,
  customStyle,
}: IButton) => {
  const baseStyle = "text-sm px-8 py-3 rounded-md";

  const styles = {
    primary: "bg-primary text-white",
    dismiss: "bg-lightGray",
  };

  const buttonStyle = (variant && styles[variant]) || "";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${customStyle ? customStyle : baseStyle} ${buttonStyle}`}
    >
      {children}
    </button>
  );
};

export default Button;
