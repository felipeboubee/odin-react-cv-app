export default function Display({data}){
    const {personal, education, experience} = data

    return (
        <div className="cv-display">
            <h2>Preview</h2>

            <section>
                <h3><strong>{personal.name}</strong></h3>
                <p>Email: {personal.email}</p>
                <p>Phone: {personal.phone}</p>
                <p>Address: {personal.address}</p>
            </section>

            <section>
                <h3><strong>Education</strong></h3>
                {education.map((e, i) => (
                    <div key={i}>
                        <div>
                            <p>{e.startDate} — {e.endDate}</p>
                            <p>{e.location}</p>
                        </div>
                        <div>
                            <p><strong>{e.school}</strong></p>
                            <p>{e.degree}</p>
                        </div>
                    </div>
                    ))}
            </section>

            <section>
                <h3><strong>Experience</strong></h3>
                {experience.map((e, i) => (
                    <div key={i}>
                        <div>
                            <p>{e.startDate} — {e.endDate}</p>
                            <p>{e.location}</p>
                        </div>
                        <div>
                            <p><strong>{e.company}</strong></p>
                            <p>{e.position}</p>
                        </div>
                        <div>
                            <p>{e.description}</p>
                        </div>
                    </div>
                    ))}
            </section>

        </div>
    ) 
}

