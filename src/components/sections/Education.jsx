import InputGroup from '../InputGroup.jsx'

export default function Education({data, onChange}){
    
    function addEducation(){
        onChange([...data,{school: "", degree: "", startDate: "", endDate: "", location: ""}]);
    }

    function updateEducation(index, field, value){
        const updated = [...data];
        updated[index][field] = value;
        onChange(updated);
    }

    return (
        <div>
            {data.map((entry, index) => (
                <div key={index} className='education-entry'>
                    <InputGroup
                        type="text"
                        id="school"
                        label="School Name"
                        value={entry.school}
                        placeholder="School Name"
                        onChange={((v) => updateEducation(index, "school", v))}
                    />
                    <InputGroup
                        type="text"
                        id="degree"
                        label="Degree"
                        value={entry.degree}
                        placeholder="Degree"
                        onChange={((v) => updateEducation(index, "degree", v))}
                    />
                    <InputGroup
                        type="date"
                        id="startDate"
                        label="Start Date"
                        value={entry.startDate}
                        placeholder=""
                        onChange={((v) => updateEducation(index, "startDate", v))}
                    />
                    <InputGroup
                        type="date"
                        id="endDate"
                        label="End Date"
                        value={entry.endDate}
                        placeholder=""
                        onChange={((v) => updateEducation(index, "endDate", v))}
                    />
                    <InputGroup
                        type="text"
                        id="location"
                        label="Location"
                        value={entry.location}
                        placeholder="Location"
                        onChange={((v) => updateEducation(index, "location", v))}
                    />

                </div>
            ))}
            <button onClick={addEducation}>Add Education</button>
        </div>
    )
}

