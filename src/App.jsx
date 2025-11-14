import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import PersonalDetails from './components/sections/PersonalDetails.jsx'
import Section from './components/Section.jsx'
import Education from './components/sections/Education.jsx'
import Experience from './components/sections/Experience.jsx'
import Display from './components/Display.jsx' 

function App() {
  
  const [cvData, setCvData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
    education: [],
    experience: [],
  })

  function updateSection(sectionName, newData){
    setCvData((prev) => ({
      ...prev, [sectionName]: newData})
    );
    }
  

  return (
  <div>
    <Sidebar />

    <Section title="Personal Details">
      <PersonalDetails
        data={cvData.personal}
        onChange={(data) => updateSection("personal", data)}
      />
    </Section>
    <Section title="Education">
      <Education
        data={cvData.education}
        onChange={(data) => updateSection("education", data)}
      />
    </Section>
    <Section title="Experience">
      <Experience
        data={cvData.experience}
        onChange={(data) => updateSection("experience", data)}
      />
    </Section>

    <Display data={cvData}/>
  </div>
  )
}

export default App
