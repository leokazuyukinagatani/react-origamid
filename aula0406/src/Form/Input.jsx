export function Input({ id, label, setValue, ...rest }) {
  return (
    <label htmlFor={id}>
      {label}
      <input
        type="text"
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...rest}
      />
    </label>
  );
}
