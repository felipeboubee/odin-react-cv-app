/* import { useState } from 'react' */
import './App.css'
import Sidebar from './components/Sidebar.jsx'
import PersonalDetails from './components/PersonalDetails.jsx'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Display from './components/Display.jsx'

function App() {
  

  return (
    <div>
    <Sidebar />
    <div>
      <PersonalDetails/>
      <Education/>
      <Experience />
    </div>
    <Display/>
    </div>
  )
}

export default App
