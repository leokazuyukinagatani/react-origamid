export function Checkbox({ options, value, setValue, ...rest }) {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value));
    }
  }
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            {...rest}
            onChange={handleChange}
            checked={value.includes(option)}
          />
          {option}
        </label>
      ))}
    </>
  );
}
