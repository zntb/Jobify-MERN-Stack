/* eslint-disable react/prop-types */
const FormRow = ({ type, name, labelText, defaultValue, onChange }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        className="form-input"
        type={type}
        id={name}
        name={name}
        defaultValue={defaultValue || ''}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormRow;
