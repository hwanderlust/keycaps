import "./common.css";

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

function Select(props: SelectProps) {
  const { options, onSelect } = props;
  const optionsArr = Object.values(options);

  return (
    <select
      className="select"
      name=""
      id=""
      defaultValue={optionsArr[0].value}
      onChange={event => {
        const selectedOption = options[event.target.value];
        onSelect(selectedOption);
      }}
      required>
      {optionsArr
        .map(option =>
          <option key={option.id} value={option.id}>
            {option.value}
          </option>
        )}
    </select>
  );
}

export default Select;