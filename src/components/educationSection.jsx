import {Input} from './inputs.jsx'
import { Controls } from './controls.jsx'
import addSvg from '../assets/images/add.svg'
import '../assets/styles/sections.css'

function Education() {
    

    return (

        <>

            <h2>Education</h2>

            <div className='style-twoInputs'>
                <Input 
                    label={'Degree'}
                    
                />
                <Input 
                    label={'University'}
                />
            </div>

            <div className='style-twoInputs'>
                <Input 
                    label={'From'}
                />
                <Input 
                    label={'To'}
                />
            </div>



            <Controls 
                svgRight={addSvg}
            />                   

            
        </>

    )
}

export {Education}
