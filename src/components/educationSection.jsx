import {Input} from './inputs.jsx'
import { Controls } from './controls.jsx'
import addSvg from '../assets/images/add.svg'
import { Button } from './buttons.jsx'
import trashSvg from '../assets/images/trash.svg'
import '../assets/styles/sections.css'

function FormEducation({value,set,index,removeObj,data,setIndex}) {
    return (

        <>

            <form>

                <div className='titleAndBtn'>
                    <h2>Education</h2>
                    {data.length > 1 ? <Button svg={trashSvg} handleClick={removeObj} section={'education'} id={value.education[index].id} setIndex={setIndex} index={index} deleteItem={true} />  : ''}
                    
                </div>
                
                <div className='style-twoInputs'>
                    <Input 
                        label={'Degree'}
                        placeholder={'Bachelor of Science'}
                        name={'education'}
                        value={value.education[index].degree}
                        handleSetText={set}
                        fieldName={'degree'}
                        id={value.education[index].id}
                        

                    />
                    <Input 
                        label={'University'}
                        placeholder={'Stanford University'}
                        name={'education'}
                        value={value.education[index].university}
                        handleSetText={set}
                        fieldName={'university'}
                        id={value.education[index].id}

                    />
                </div>

                <div className='style-twoInputs'>
                    <Input 
                        label={'From'}
                        placeholder={'2019'}
                        name={'education'}
                        value={value.education[index].from}
                        handleSetText={set}
                        fieldName={'from'}
                        type='number'
                        id={value.education[index].id}

                    />
                    <Input 
                        label={'To'}
                        placeholder={'2023'}
                        name={'education'}
                        value={value.education[index].to}
                        handleSetText={set}
                        fieldName={'to'}
                        type='number'
                        id={value.education[index].id}

                    />
                </div>


            </form>

                               

            
        </>

    )
}

function Education({value,set,index,setIndex,data,onClick,removeObj}) {

    return(
        <>
            <FormEducation 
                value={value}
                set={set}
                index={index}
                removeObj={removeObj}
                data={data}
                setIndex={setIndex}
            />
        
            {
                
                data.length > 1 ? <Controls svgRight={addSvg} index={index} setIndex={setIndex} data={data} onClick={onClick} section={'education'} /> : <Button  classN={"addBtn"} svg={addSvg} handleClick={onClick} section={'education'} data={data}/>
               
            }
            
        </>
    )
   
}

export {Education}
