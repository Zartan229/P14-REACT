export default function Select({ id, name, options, label, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} onChange={onChange}>
        {options.map((option, index) => (
          <option key={index} value={option.abbreviation}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
