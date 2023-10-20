import {Input} from './inputs.jsx'
import { Controls } from './controls.jsx'
import addSvg from '../assets/images/add.svg'
import '../assets/styles/sections.css'

function Education({value,set}) {
    

    return (

        <>

            <form>
        
                <h2>Education</h2>
        
                <div className='style-twoInputs'>
                    <Input 
                        label={'Degree'}
                        placeholder={'Bachelor of Science'}
                        name={'education'}
                        value={value.education.degree}
                        handleSetText={set}
                        fieldName={'degree'}
                        
                    />
                    <Input 
                        label={'University'}
                        placeholder={'Stanford University'}
                        name={'education'}
                        value={value.education.university}
                        handleSetText={set}
                        fieldName={'university'}
                    />
                </div>
        
                <div className='style-twoInputs'>
                    <Input 
                        label={'From'}
                        placeholder={'2019'}
                        name={'education'}
                        value={value.education.from}
                        handleSetText={set}
                        fieldName={'from'}
                        type='number'
                    />
                    <Input 
                        label={'To'}
                        placeholder={'2023'}
                        name={'education'}
                        value={value.education.to}
                        handleSetText={set}
                        fieldName={'to'}
                        type='number'
                    />
                </div>
        
        
            </form>

            <Controls 
                svgRight={addSvg}
            />                   

            
    </>

    )
}

export {Education}
