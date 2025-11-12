import InputGroup from '../InputGroup.jsx';


export default function PersonalDetails({data, onChange}){
    
    function handleChange(field, value){
        onChange({...data, [field]: value})
    };

    return (
        <>
            <InputGroup
                id = "fullName" 
                label = "Full Name"
                type = "text"
                value = {data.name}
                onChange = {(v) => handleChange("name", v)}
                placeholder = "Enter Full Name..."
            />
            <InputGroup
                id = "email" 
                label = "Email"
                type = "email"
                value = {data.email}
                onChange = {(v) => handleChange("email", v)}
                placeholder = "email@domain.com"
            />
            <InputGroup
                id = "phone" 
                label = "Phone Number"
                type = "tel"
                value = {data.phone}
                onChange = {(v) => handleChange("phone", v)}
                placeholder = "+1 (123) 456-7890"
            />
            <InputGroup
                id = "address" 
                label = "Address"
                type = "text"
                value = {data.address}
                onChange = {(v) => handleChange("address", v)}
                placeholder = "Street 123, City, State, Zip Code"
            />
        </>
    )
}

