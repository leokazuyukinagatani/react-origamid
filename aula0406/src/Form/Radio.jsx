export function Radio({ options, value, setValue, ...rest }) {
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            checked={value == option}
            onChange={({ target }) => setValue(target.value)}
            {...rest}
          />
          {option}
        </label>
      ))}
      <label>
        <input type="radio" />
      </label>
    </>
  );
}
