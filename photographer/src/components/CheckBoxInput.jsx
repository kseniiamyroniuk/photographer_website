function Checkbox({ label, name }) {
    return (
        <label>
            <input 
                type="radio" 
                name={name}
                className="checkbox-input"
            />
            <span></span>
            {label}
        </label>
    );
}

export default Checkbox;