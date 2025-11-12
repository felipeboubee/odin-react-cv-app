import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import PersonalDetails from './components/sections/PersonalDetails.jsx'
import Section from './components/Section.jsx'
/* import Education from './components/sections/Education.jsx'
import Experience from './components/sections/Experience.jsx'
import Display from './components/Display.jsx' */

function App() {
  
  const [cvData, setCvData] = useState({
    personal: {
      name: "",
      email: "",
      phone: "",
      address: "",
    }
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
  </div>
  )
}

export default App
