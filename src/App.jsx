// import { useState } from 'react'
import './assets/styles/App.css'
import { Controls } from './components/controls'
import { Info } from './components/infoSection'
import { Contact } from './components/contactSection'
import { Education } from './components/educationSection'
import { Work } from './components/workSection'
import { Skill } from './components/skillsSection'
import { dataComponents } from './assets/data'
import saveSvg from './assets/images/download.svg'
import { useState } from 'react'

function App() {

  const [index,setIndex] = useState(0);   
  const [inputsValues,setInputValues] = useState({
    info:{firstName: '',lastName: '',professionalTitle: '',profile:''},
    contact:{website: '', email: '', location: '', phone: ''},
    education: [{id:0,degree: '', university: '', from: '' , to:''}],
    work: [{id:0,title: '', company: '', from: '' , to:'',description: ''}],
    skill: [{id:0,skillName:'JavaScript'},{id:1,skillName:'React'},{id:2,skillName:'Figma'}]
    
  });

  const [indexEducation,setIndexEducation] = useState(0);
  const [indexWork,setIndexWork] = useState(0);
  const [indexSkill,setIndexSkill] = useState(inputsValues.skill.length);


  function addNewForm(section) {

    const updatedInputValues = { ...inputsValues };
    
    const lastId = updatedInputValues[section][updatedInputValues[section].length - 1].id;
    
    const newId = lastId + 1;
    
    const newObject = {...inputsValues[section][0]};
    
    for(const property in newObject){
      newObject[property] = '';
    }
    newObject.id = newId;

    updatedInputValues[section] = [...updatedInputValues[section], newObject];
    
    setInputValues(updatedInputValues);
    

  }
  function removeObj(section,id) {
    
    const updatedInputValues = {... inputsValues};
    const objSelected = updatedInputValues[section].find((obj) => obj.id === id );

    const newArray = updatedInputValues[section].filter( obj => 
        obj.id !== objSelected.id
    );
   
    updatedInputValues[section] = newArray
    setInputValues(updatedInputValues)
  }
  function handleSetInputValues(section,fieldName,value,id) {

    if (section == 'info' || section == 'contact') {
      setInputValues({
        ...inputsValues,
        [section]: {
          ...inputsValues[section],
          [fieldName]: value,
        },
      });
      
    }else{


      const newSectionInputValues = [...inputsValues[section]];

      const item = newSectionInputValues .find((item) => item.id === id);

      item[fieldName] = value;
      
      setInputValues({
        ...inputsValues,
        [section]:newSectionInputValues
      })
    }

    
  }
  
  let Nashe = Info;
  let indexControlSection;
  let setIndexControlSection;
  let dataArr;
  if (index == 0) {
    Nashe = Info;
  }else if(index == 1){
    Nashe = Contact;    
  }else if(index == 2){
    Nashe = Education;    
    dataArr = inputsValues.education
    indexControlSection = indexEducation;
    setIndexControlSection = setIndexEducation;
  }else if(index == 3){
    Nashe = Work;
    dataArr = inputsValues.work    
    indexControlSection = indexWork;
    setIndexControlSection = setIndexWork;
  }else if(index == 4){
    Nashe = Skill;    
    dataArr = inputsValues.skill
    indexControlSection = indexSkill;
    setIndexControlSection = setIndexSkill;
  }


  return (
    
    <>
      <Nashe 
        value={inputsValues}
        set={handleSetInputValues}
        index={indexControlSection}
        setIndex={setIndexControlSection}
        data={dataArr}
        onClick = {addNewForm}
        removeObj={removeObj}
      />
      <Controls 
        index={index}
        setIndex={setIndex}
        data={dataComponents}
        svgRight={saveSvg}
      />
    </>

    
  )
}

export default App
