import React from "react";

import { Button } from "..";
import "./Banner.css";

interface BannerProps {
  headline: string;
  buttonText: string;
  buttonOnPress: (inputValue?: string) => void;
  mediaQueryClassName: string;
  inputType?: "text" | "email";
  inputPlaceholderText?: string;
}

/**
 * @argument mediaQueryClassName className prop to manage unique responsiveness - requires further CSS implementation
 */
function Banner(props: BannerProps) {
  const {
    headline,
    buttonText,
    mediaQueryClassName,
    inputType,
    inputPlaceholderText,
    buttonOnPress
  } = props;
  const [inputValue, updateInputValue] = React.useState("");

  const handleInputChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    updateInputValue(event.target.value);
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    buttonOnPress(inputValue);
  }

  return (
    <section className={`banner banner--${mediaQueryClassName}`}>
      <div className="banner__contents">
        <h1 className="banner__headline">
          {headline}
        </h1>

        {inputType && (
          <form onSubmit={handleSubmit}>
            <input
              type={inputType}
              pattern={inputType === "email" ? "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" : undefined}
              className="banner__input"
              value={inputValue}
              placeholder={inputPlaceholderText}
              onChange={handleInputChange} />
            <Button
              type="tertiary--black"
              text={buttonText}
              onPress={() => buttonOnPress(inputValue)}
              extraStylingClassNames="banner__button"
            />
          </form>
        )}

        {!inputType && (
          <Button
            type="tertiary--black"
            text={buttonText}
            onPress={() => buttonOnPress(inputValue)}
            extraStylingClassNames="banner__button"
          />
        )}
      </div>
    </section>
  );
}

export default Banner;