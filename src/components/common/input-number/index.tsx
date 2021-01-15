import React from "react";
import "./InputNumber.css";

interface InputNumberProps {
  handleChange: (num: number) => void;
}

function InputNumber(props: InputNumberProps) {
  const { handleChange } = props;
  const [inputValue, setInputValue] = React.useState(1);

  function handleDecreasePress() {
    setInputValue(prevValue => {
      if (prevValue - 1 <= 1) {
        handleChange(1);
        return 1
      };

      handleChange(prevValue - 1);
      return prevValue - 1;
    });
  }
  function handleIncreasePress() {
    setInputValue(prevValue => {
      if (prevValue + 1 >= 10) {
        handleChange(10);
        return 10
      };

      handleChange(prevValue + 1);
      return prevValue + 1;
    });
  }

  return (
    <div className="input-number">
      <span>{inputValue}</span>

      <button
        className="input-number__decrementer"
        onClick={handleDecreasePress}>
        <img
          src="./icon-decrement.svg"
          alt="box icon with a - in the center indicating a subtraction button" />
      </button>
      <button
        className="input-number__incrementer"
        onClick={handleIncreasePress}>
        <img
          src="./icon-increment.svg"
          alt="box icon with a + in the center indicating an addition button" />
      </button>
    </div>
  )
}

export default InputNumber;