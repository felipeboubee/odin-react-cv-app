export default function InputGroup({id, label, type, value, onChange, placeholder}){
    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input 
            type={type}
            id={id} 
            value={value} 
            placeholder={placeholder}
            onChange={((e) => onChange(e.target.value))}    // Pass the updated value upward
            />
        </div>
    )
    
}

