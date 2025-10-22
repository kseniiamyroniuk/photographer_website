import '../componentsCSS/InputField.css';


function InputField({ label, type, placeholder }) {
  return (
    <div className="input-field">
      <label>{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="underline-input"
      />
    </div>
  );
}

export default InputField;