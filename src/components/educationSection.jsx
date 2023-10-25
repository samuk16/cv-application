import {Input} from './inputs.jsx'
import { Controls } from './controls.jsx'
import addSvg from '../assets/images/add.svg'
import { Button } from './buttons.jsx'
import '../assets/styles/sections.css'

function FormEducation({value,set,index}) {
    return (

        <>

            <form>

                <h2>Education</h2>

                <div className='style-twoInputs'>
                    <Input 
                        label={'Degree'}
                        placeholder={'Bachelor of Science'}
                        name={'education'}
                        value={value.education[index].degree}
                        handleSetText={set}
                        fieldName={'degree'}
                        id={index}
                        

                    />
                    <Input 
                        label={'University'}
                        placeholder={'Stanford University'}
                        name={'education'}
                        value={value.education[index].university}
                        handleSetText={set}
                        fieldName={'university'}
                        id={index}

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
                        id={index}

                    />
                    <Input 
                        label={'To'}
                        placeholder={'2023'}
                        name={'education'}
                        value={value.education[index].to}
                        handleSetText={set}
                        fieldName={'to'}
                        type='number'
                        id={index}

                    />
                </div>


            </form>

                               

            
        </>

    )
}

function Education({value,set,index,setIndex,data,onClick}) {

    return(
        <>
            <FormEducation 
                value={value}
                set={set}
                index={index}
            />
    
            {
                
                data.length > 1 ? <Controls svgRight={addSvg} index={index} setIndex={setIndex} data={data} onClick={onClick} section={'education'} /> : <Button svg={addSvg} handleClick={onClick} section={'education'}/>
               
            }
            
        </>
    )
   
}

export {Education}
