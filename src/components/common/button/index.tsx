import "./Button.css";

interface ButtonProps {
  text: string;
  type: "primary" | "secondary" | "tertiary--black" | "tertiary--white";
  onPress: () => void;
  iconSrc?: string;
  extraStylingClassNames?: string;
}

function Button(props: ButtonProps) {
  const { text, type, onPress, iconSrc, extraStylingClassNames } = props;

  return (
    <button
      className={`button button--${type} ${extraStylingClassNames || ""}`}
      onClick={onPress}>
      {text}
      {iconSrc && (
        <span>
          <img
            src={iconSrc}
            alt={`${iconSrc.match(/\w+/g)?.join(" ")} button icon`} />
        </span>
      )}
    </button>
  );
}

export default Button;