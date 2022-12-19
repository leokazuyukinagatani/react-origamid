export function Radio({ pergunta, options, id }) {
  return (
    <fieldset style={{padding: '2rem'}}>
      <legend style={{fontWeight: 'bold'}}>{pergunta}</legend>
      {options.map((option) => (
        <label
          key={option}
          style={{ marginBottom: "1rem", fontFamily: "monospace" }}
        >
          <input type="radio" value={option} />
          {option}
        </label>
      ))}
    </fieldset>
  );
}
