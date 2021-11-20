export default function Input({ type, value, onChange, label, error }) {
  return (
    <div className="mb-3">
      <label htmlFor={type} className="form-label h2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="form-control"
      />
      {error && (
        <small className="text-danger">Please enter positive number</small>
      )}
    </div>
  );
}
