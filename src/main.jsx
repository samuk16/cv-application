import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './assets/styles/index.css'
// import {Button} from './components/buttons.jsx'
// import {Input} from './components/inputs.jsx'
// import nextSvg from './assets/images/next.svg'
// import previusSvg from './assets/images/previus.svg'
// import trashSvg from './assets/images/trash.svg'
// import addSvg from './assets/images/add.svg'
// import {Controls} from './components/controls.jsx'
import { Info } from './components/infoSection'
import { Contact } from './components/contactSection'
import { Education } from './components/educationSection'
import { Work } from './components/workSection'
import { Skill } from './components/skillsSection'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <div className='mainContainer'>

    <App />
  </div>

  

  </React.StrictMode>,
)
