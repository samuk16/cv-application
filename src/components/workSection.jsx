import {Input} from './inputs.jsx'
import { Controls } from './controls.jsx'
import addSvg from '../assets/images/add.svg'
import '../assets/styles/sections.css'

function Work() {
    

    return (

        <>

            <h2>Work</h2>

            <div className='style-twoInputs'>
                <Input 
                    label={'Title'}
                    
                />
                <Input 
                    label={'Company'}
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

            <label className='containerTextArea'>
                Description
            <textarea
                
                className='style-textArea'
            />

            </label>

            <Controls
                svgRight={addSvg}
            />                    
            
        </>

    )
}

export {Work}