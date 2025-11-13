import InputGroup from '../InputGroup.jsx'

export default function Experience({data, onChange}){
    
    function addExperience(){
        onChange([...data,{company: "", position: "", startDate: "", endDate: "", location: "", description: ""}]);
    }

    function updateExperience(index, field, value){
        const updated = [...data];
        updated[index][field] = value;
        onChange(updated);
    }

    return (
        <div>
            {data.map((entry, index) => (
                <div key={index} className='experience-entry'>
                    <InputGroup
                        type="text"
                        id="company"
                        label="Company Name"
                        value={entry.company}
                        placeholder="Company Name"
                        onChange={((v) => updateExperience(index, "company", v))}
                    />
                    <InputGroup
                        type="text"
                        id="position"
                        label="Position"
                        value={entry.position}
                        placeholder="Position"
                        onChange={((v) => updateExperience(index, "position", v))}
                    />
                    <InputGroup
                        type="date"
                        id="startDate"
                        label="Start Date"
                        value={entry.startDate}
                        placeholder=""
                        onChange={((v) => updateExperience(index, "startDate", v))}
                    />
                    <InputGroup
                        type="date"
                        id="endDate"
                        label="End Date"
                        value={entry.endDate}
                        placeholder=""
                        onChange={((v) => updateExperience(index, "endDate", v))}
                    />
                    <InputGroup
                        type="text"
                        id="location"
                        label="Location"
                        value={entry.location}
                        placeholder="Location"
                        onChange={((v) => updateExperience(index, "location", v))}
                    />
                    <label htmlFor="description">Description</label>
                    <textarea 
                        type="text"
                        id="description"
                        value={entry.description}
                        placeholder="Responibilities and tasks"
                        onChange={((v) => updateExperience(index, "description", v))}
                    />
                </div>
            ))}
            <button onClick={addExperience}>Add Experience</button>
        </div>
    )
}

