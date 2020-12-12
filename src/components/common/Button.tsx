import "./common.css";

interface ButtonProps {
  text: string;
  type: "primary" | "secondary" | "tertiary";
  iconSrc?: string;
  extraStylingClassNames?: string;
}

function Button(props: ButtonProps) {
  const { text, type, iconSrc, extraStylingClassNames } = props;

  return (
    <button className={`button button--${type} ${extraStylingClassNames || ""}`}>
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