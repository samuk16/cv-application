// import { useState } from 'react'
import './assets/styles/App.css'
import { Controls } from './components/controls'
import { Info } from './components/infoSection'
import { Contact } from './components/contactSection'
import { Education } from './components/educationSection'
import { Work } from './components/workSection'
import { Skill } from './components/skillsSection'
import { dataComponents } from './assets/data'
import { useState } from 'react'

function App() {

  const [index,setIndex] = useState(0);   
  const [text,setText] = useState('') ;

  // const test = dataComponents[0].componenSrc;

  // function handleClick() {
  //   console.log('anashe?');
  // }
  let Nashe = Info;
  if (index == 0) {
    Nashe = Info;
  }else if(index == 1){
    Nashe = Contact;    
  }else if(index == 2){
    Nashe = Education;    
  }else if(index == 3){
    Nashe = Work;    
  }else if(index == 4){
    Nashe = Skill;    
  }


  return (
    
    <>
      <Nashe 
        text={text}
        setText={setText}
      />
      <Controls 
        index={index}
        setIndex={setIndex}
      />
    </>

    
  )
}

export default App
