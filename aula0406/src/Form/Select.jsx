export function Select({ options, value, setValue, ...rest }) {
  return (
    <select
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...rest}
    >
      <option value="" disabled>
        selecione
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
