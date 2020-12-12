import React from "react";

import "./Select.css";

interface SelectProps {
  options: Options;
  onSelect: (option: Option) => void;
}
interface Options {
  [id: string]: Option;
}
interface Option {
  id: string;
  value: string;
}

/**
 * Custom Select to match designs.
 * Consider using React.useRef() to store selected state in component rendering this <Select/> to prevent unnecessary re-renders.
 * @param props 
 */
function Select(props: SelectProps) {
  const { options, onSelect } = props;
  const optionsArr = Object.values(options);

  const [showOptions, toggleOptions] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState<Option>(optionsArr[0]);
  const toggleDropdown = React.useCallback(() => {
    toggleOptions(prevStatus => !prevStatus);
  }, []);
  const closeDropdown = React.useCallback(() => {
    toggleOptions(false);
  }, []);

  return (
    <div
      role="listbox"
      className={`select--custom ${showOptions ? "select--open" : ""}`}
      onClick={toggleDropdown}
      onBlur={closeDropdown}
      tabIndex={0}>

      <div className="select__selected-container">
        <span>{selectedOption.value}</span>
        <img src="./icon-caret.svg" alt="" />
      </div>

      <menu>
        {optionsArr
          .map(option =>
            <option
              key={option.id}
              value={option.id}
              selected={selectedOption.id === option.id}
              onClick={_ => {
                if (selectedOption.id !== option.id) {
                  setSelectedOption(option);
                  onSelect(option);
                }
              }}>
              {option.value}
            </option>
          )}
      </menu>
    </div>
  );
}

export default Select;